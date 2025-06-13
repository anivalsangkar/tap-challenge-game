// utils/challengeUtils.js
import { db } from '../firebase';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';

/**
 * Creates a new challenge document in Firestore.
 * The Cloud Function will add a server-trusted expireAt field.
 *
 * @param {string} fromUID
 * @param {string} fromEmail
 * @param {string} fromUsername
 * @param {string} toEmail
 * @returns {Promise<string>} the new challenge ID
 */
export const createChallenge = async (fromUID, fromEmail, fromUsername, toEmail) => {
  try {
    const docRef = await addDoc(collection(db, 'challenges'), {
      fromUID,
      fromEmail,
      fromUsername,
      toEmail,
      status: 'pending',
      gameStarted: false,
      createdAt: serverTimestamp()
      // expireAt will be set by your Cloud Function
    });
    return docRef.id;
  } catch (e) {
    console.error('❌ Firestore Error creating challenge:', e);
    throw e;
  }
};

/**
 * Marks a challenge as accepted and schedules the game start.
 *
 * @param {string} challengeId
 * @returns {Promise<boolean>} success
 */
export const acceptChallenge = async (challengeId) => {
  const challengeRef = doc(db, 'challenges', challengeId);
  await updateDoc(challengeRef, {
    status: 'accepted',
    startTime: serverTimestamp(), // ⏱️ Add this line
  });
};
