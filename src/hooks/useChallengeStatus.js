import { useState, useEffect, useCallback } from 'react';
import {
  doc,
  onSnapshot,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useChallengeStatus(challengeId) {
  const [status, setStatus] = useState(null);

  // Listen for real-time status changes
  useEffect(() => {
    if (!challengeId) return;
    const ref = doc(db, 'challenges', challengeId);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data();
      setStatus(data?.status || null);
    });
    return () => unsub();
  }, [challengeId]);

  // Set status to "in-game" and record when it started
  const start = useCallback(async () => {
    if (!challengeId) return;
    const ref = doc(db, 'challenges', challengeId);
    await updateDoc(ref, {
      status: 'in-game',
      startedAt: serverTimestamp()
    });
  }, [challengeId]);

  // Set status to "finished", record finish time, and optionally record winner
  const finish = useCallback(
    async (winnerId = null) => {
      if (!challengeId) return;
      const ref = doc(db, 'challenges', challengeId);
      const payload = {
        status: 'finished',
        finishedAt: serverTimestamp()
      };
      if (winnerId) payload.winner = winnerId;
      await updateDoc(ref, payload);
    },
    [challengeId]
  );

  return { status, start, finish };
}
