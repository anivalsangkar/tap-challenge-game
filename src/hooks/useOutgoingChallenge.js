import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function useOutgoingChallenge(userId) {
  const [challenge, setChallenge] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  // Listen for pending challenges that this user sent
  useEffect(() => {
    if (!userId) return;
    let init = false;
    const q = query(
      collection(db, 'challenges'),
      where('fromUID', '==', userId),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(q, snapshot => {
      if (!init) { init = true; return; }
      snapshot.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if ((change.type === 'added' || change.type === 'modified') && data.expireAt) {
          setChallenge(data);
          const ms = data.expireAt.toMillis() - Date.now();
          setRemainingTime(Math.max(Math.ceil(ms / 1000), 0));
        }
      });
    });
    return () => unsub();
  }, [userId]);

  // Countdown timer for expireAt
  useEffect(() => {
    if (remainingTime == null) return;
    if (remainingTime <= 0) {
      setChallenge(null);
      setRemainingTime(null);
      return;
    }
    const id = setInterval(() => setRemainingTime(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [remainingTime]);

  return { challenge, remainingTime };
}