import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { acceptChallenge as acceptChallengeUtil } from '../utils/challengeUtils';
import { db } from '../firebase';

/**
 * Hook to listen for incoming challenges for a given email.
 * @param {string} userEmail - The email of the current user.
 * @returns {{ challenge: object|null, remainingTime: number|null, accept: () => Promise<void> }}
 */
export default function useIncomingChallenge(userEmail) {
  const [challenge, setChallenge] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  // Listen for pending incoming challenges
  useEffect(() => {
    if (!userEmail) return;
    let init = false;
    const q = query(
      collection(db, 'challenges'),
      where('toEmail', '==', userEmail),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(q, (snap) => {
      if (!init) { init = true; return; }
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if ((change.type === 'added' || change.type === 'modified') && data.expireAt) {
          setChallenge(data);
          const ms = data.expireAt.toMillis() - Date.now();
          setRemainingTime(Math.max(Math.ceil(ms / 1000), 0));
        }
      });
    });
    return () => unsub();
  }, [userEmail]);

  // Countdown timer for remainingTime
  useEffect(() => {
    if (remainingTime == null || remainingTime <= 0) return;
    const id = setInterval(() => setRemainingTime(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [remainingTime]);

  // Accept function
  const accept = async () => {
    if (!challenge) return;
    await acceptChallengeUtil(challenge.id);
    // Optionally set remainingTime to null to stop countdown
    setRemainingTime(null);
  };

  return { challenge, remainingTime, accept };
}
