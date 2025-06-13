const functions = require('firebase-functions/v1');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true }); // ✅ Enable CORS

// ✅ Do not call admin.initializeApp() again here — already initialized
const db = admin.firestore();

// 🔐 Get Gmail credentials from Firebase config
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// ✉️ Setup reusable transporter using Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.sendChallengeEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { fromUsername, toEmail } = req.body;

    if (!fromUsername || !toEmail) {
      return res.status(400).send('Missing fromUsername or toEmail');
    }

    try {
      const userSnap = await db.collection('users').where('email', '==', toEmail).get();

      let subject = '';
      let html = '';

      if (!userSnap.empty) {
        subject = `You've been challenged by ${fromUsername}!`;
        html = `<p><strong>${fromUsername}</strong> has challenged you to a tap battle!</p><p>Log in now to accept the challenge.</p>`;
      } else {
        subject = `Your friend ${fromUsername} invited you to Tap Challenge!`;
        html = `<p><strong>${fromUsername}</strong> wants you to try Tap Challenge!</p><p><a href="https://tapchallengegame.web.app">Click here to sign up and play</a></p>`;
      }

      await transporter.sendMail({
        from: `"Tap Challenge" <${gmailEmail}>`,
        to: toEmail,
        subject,
        html
      });

      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('❌ Failed to send challenge email:', error);
      res.status(500).send('Failed to send challenge email');
    }
  });
});
