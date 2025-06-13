const functions = require('firebase-functions/v1');
const Razorpay = require('razorpay');
const cors = require('cors')({ origin: true });
const crypto = require('crypto');
const express = require('express');
const admin = require('firebase-admin');

admin.initializeApp();

exports.addExpireAtOnCreate = functions.firestore
  .document('challenges/{challengeId}')
  .onCreate(async (snap) => {
    const data = snap.data() || {};
    const toEmail = data.toEmail;

    // 1) Compute expireAt
    const nowMs = admin.firestore.Timestamp.now().toMillis();
    const expireAt = admin.firestore.Timestamp.fromMillis(nowMs + 2 * 60 * 1000);

    // 2) Derive toUsername
    let toUsername = null;
    try {
      const authUser = await admin.auth().getUserByEmail(toEmail);
      const userDoc = await admin.firestore().doc(`users/${authUser.uid}`).get();
      if (userDoc.exists) {
        toUsername = userDoc.data().username;
      }
    } catch (e) {
      console.error('Could not derive toUsername:', e);
    }

    // 3) ONE atomic merge
    const updatePayload = { expireAt };
    if (toUsername) updatePayload.toUsername = toUsername;
    await snap.ref.set(updatePayload, { merge: true });

    return null;
  });

const { key, secret } = functions.config().razorpay || {};
if (!key || !secret) {
  console.error('✋ Missing Razorpay config in functions.config()');
  throw new Error('Razorpay keys not set');
}
console.log('🔑 Razorpay key loaded:', key);

const razor = new Razorpay({ key_id: key, key_secret: secret });

// ─────────────────────────────────────────────
// ORDER CREATION FUNCTION
// ─────────────────────────────────────────────
exports.createOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).send('Only POST allowed');

    const { amountINR, userId } = req.body || {};
    const inr = parseInt(amountINR, 10);

    if (isNaN(inr) || inr <= 0 || !userId) {
      return res.status(400).json({ error: 'Invalid INR amount or missing userId' });
    }

    try {
      const receipt = `rcpt_${Date.now()}`;
      const order = await razor.orders.create({
        amount: inr * 100,
        currency: 'INR',
        receipt,
        payment_capture: 1,
        notes: { uid: userId } // ✅ UID passed to verify later
      });
      return res.json({ orderId: order.id, keyId: key });
    } catch (err) {
      console.error('❌ Razorpay order error:', err);
      return res.status(500).json({ error: err.description || err.message });
    }
  });
});

// ─────────────────────────────────────────────
// WEBHOOK HANDLER FUNCTION (uses express.raw)
// ─────────────────────────────────────────────
const webhookApp = express();

// Middleware to preserve raw body for signature verification
webhookApp.use(express.raw({ type: '*/*' }));

webhookApp.post('/', async (req, res) => {
  const signature = req.headers['x-razorpay-signature'];
  const webhookSecret = functions.config().razorpay.webhook_secret;

  if (!webhookSecret) {
    console.error('Webhook secret not set in config');
    return res.status(500).send('Webhook secret missing');
  }

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(req.rawBody)
    .digest('hex');

  if (expectedSignature !== signature) {
    console.warn('❌ Signature mismatch');
    return res.status(403).send('Unauthorized');
  }

  let event = req.body;
  

  if (event.event === 'payment.captured') {
  const payment = event.payload.payment.entity;
  const inr = payment.amount / 100;
  const uid = payment.notes?.uid;

  if (!uid) {
    console.error('UID not found in payment.notes');
    return res.status(400).send('Missing UID');
  }

  const paymentId = payment.id;
  const logRef = admin.firestore().collection('payments').doc(paymentId);
  const alreadyLogged = await logRef.get();

  if (alreadyLogged.exists) {
    console.log(`⚠️ Duplicate payment detected: ${paymentId}`);
    return res.status(200).send('Duplicate ignored');
  }

  const userRef = admin.firestore().collection('users').doc(uid);
  const coinsToAdd = inr * 2;

  return admin.firestore().runTransaction(async (tx) => {
    const docSnap = await tx.get(userRef);
    const current = docSnap.exists && docSnap.data().coins || 0;

    tx.set(userRef, { coins: current + coinsToAdd }, { merge: true });
    tx.set(logRef, {
      uid,
      amount: inr,
      timestamp: Date.now()
    });
  })
    .then(() => {
      console.log(`✅ Added ${coinsToAdd} coins to ${uid}`);
      res.status(200).send('Coins added');
    })
    .catch(err => {
      console.error('🔥 Failed to add coins:', err);
      res.status(500).send('Error adding coins');
    });
}
 else {
    res.status(200).send('Event ignored');
  }
});


exports.handleWebhook = functions.https.onRequest(webhookApp);

exports.sendChallengeEmail = require('./sendChallengeEmail').sendChallengeEmail;


// exports.checkGmailConfig = functions.https.onRequest((req, res) => {
//   const { email, password } = functions.config().gmail || {};
//   res.send(`Email: ${email}, Password exists: ${!!password}`);
// });
