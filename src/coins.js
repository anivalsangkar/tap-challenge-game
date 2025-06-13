// src/coins.js
import { db } from './firebase';
import {
  doc,
  getDoc,
  setDoc,
  runTransaction,
  updateDoc
} from 'firebase/firestore';

const USERS = 'users';

export async function initializeCoins(uid) {
  const userRef = doc(db, USERS, uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    // First‐time user: create with 10 coins
    await setDoc(userRef, { coins: 10 });
    return 10;
  }
  const data = snap.data();
  if (data.coins === undefined) {
    // Upgrade existing user without coins
    await updateDoc(userRef, { coins: 10 });
    return 10;
  }
  return data.coins;
}

export async function getCoins(uid) {
  const userRef = doc(db, USERS, uid);
  const snap = await getDoc(userRef);
  if (!snap.exists() || snap.data().coins === undefined) {
    // Ensure initialization
    return initializeCoins(uid);
  }
  return snap.data().coins;
}

export async function spendCoins(uid, amount) {
  const userRef = doc(db, USERS, uid);
  return runTransaction(db, async (tx) => {
    const snap = await tx.get(userRef);
    const current = snap.exists() && snap.data().coins != null
      ? snap.data().coins
      : await initializeCoins(uid);
    if (current < amount) {
      throw new Error('Not enough coins');
    }
    tx.update(userRef, { coins: current - amount });
    return current - amount;
  });
}

export async function addCoins(uid, amount) {
  const userRef = doc(db, USERS, uid);
  return runTransaction(db, async (tx) => {
    const snap = await tx.get(userRef);
    const current = snap.exists() && snap.data().coins != null
      ? snap.data().coins
      : 0;
    const updated = current + amount;
    if (snap.exists()) {
      tx.update(userRef, { coins: updated });
    } else {
      tx.set(userRef, { coins: updated });
    }
    return updated;
  });
}

/**
 * Calls your deployed createOrder function to generate a Razorpay order.
 * @param {string} uid - Firebase user UID
 * @param {number} inr - Amount in INR
 * @returns {Promise<{orderId:string, keyId:string}>}
 */
export async function createPaymentOrder(uid, inr) {
  console.log('[createPaymentOrder] Called with:', { uid, inr });

  // Validate input
  if (!uid || isNaN(inr) || inr <= 0) {
    console.error('[createPaymentOrder] ❌ Invalid input:', { uid, inr });
    throw new Error('Invalid payment request: Missing UID or INR');
  }

  const functionUrl = 'https://us-central1-tapchallengegame-6255f.cloudfunctions.net/createOrder';

  try {
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amountINR: inr, userId: uid }),
    });

    console.log('[createPaymentOrder] 🔄 Server response status:', response.status);

    const data = await response.json().catch(() => {
      console.error('[createPaymentOrder] ❌ Failed to parse JSON response');
      return {};
    });

    if (!response.ok) {
      console.error('[createPaymentOrder] ❌ Error from backend:', data);
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    console.log('[createPaymentOrder] ✅ Order created:', data);
    return data; // { orderId, keyId }

  } catch (err) {
    console.error('[createPaymentOrder] ❌ Exception thrown:', err.message);
    throw err;
  }
}

