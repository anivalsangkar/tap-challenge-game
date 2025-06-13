import React, { useState, useEffect } from 'react';
import { createChallenge, acceptChallenge } from '../utils/challengeUtils';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc
} from 'firebase/firestore';
import { showNotification } from '../utils/notify';

export default function ChallengeGame() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [incomingChallenge, setIncomingChallenge] = useState(null);
  const [timer, setTimer] = useState(null);
  const [outgoingChallenge, setOutgoingChallenge] = useState(null);
  const [outgoingTimer, setOutgoingTimer] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();

  // Compute seconds remaining until expireAt
  const computeRemaining = (expireAt) => {
    if (!expireAt?.toMillis) return 0;
    const ms = expireAt.toMillis() - Date.now();
    return Math.max(Math.ceil(ms / 1000), 0);
  };

  // Request notification permission once
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Auth state + fetch username
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(null);
        setIncomingChallenge(null);
        setTimer(null);
        setOutgoingChallenge(null);
        setOutgoingTimer(null);
        setCountdown(null);
        return;
      }
      setUser(u);
      try {
        const snap = await getDoc(doc(db, 'users', u.uid));
        if (snap.exists() && snap.data().username) {
          setUsername(snap.data().username);
        }
      } catch {}
      // clear any previous state
      setIncomingChallenge(null);
      setTimer(null);
      setOutgoingChallenge(null);
      setOutgoingTimer(null);
      setCountdown(null);
    });
    return () => unsub();
  }, []);

  // Listen for incoming pending challenges
  useEffect(() => {
    if (!user) return;
    let init = false;
    const recQ = query(
      collection(db, 'challenges'),
      where('toEmail', '==', user.email),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(recQ, (snap) => {
      if (!init) { init = true; return; }
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if ((change.type === 'added' || change.type === 'modified') && data.expireAt) {
          const rem = computeRemaining(data.expireAt);
          if (rem > 0) {
            setIncomingChallenge(data);
            setTimer(rem);
            showNotification('🎯 New Challenge!', {
              body: `You've been challenged by ${data.fromUsername || data.fromEmail}`
            });
          }
        }
      });
    });
    return () => unsub();
  }, [user]);

  // Countdown for incoming challenge expiration
  useEffect(() => {
    if (timer == null) return;
    if (timer <= 0) {
      setIncomingChallenge(null);
      setTimer(null);
      return;
    }
    const id = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  // Listen for outgoing pending challenges
  useEffect(() => {
    if (!user) return;
    let init = false;
    const sendQ = query(
      collection(db, 'challenges'),
      where('fromUID', '==', user.uid),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(sendQ, (snap) => {
      if (!init) { init = true; return; }
      snap.docChanges().forEach(change => {
        const data = { id: change.doc.id, ...change.doc.data() };
        if ((change.type === 'added' || change.type === 'modified') && data.expireAt) {
          setOutgoingChallenge(data);
          setOutgoingTimer(computeRemaining(data.expireAt));
          setStatus(`✅ Challenge sent to ${data.toUsername || data.toEmail}.`);
        }
      });
    });
    return () => unsub();
  }, [user]);

  // Countdown for outgoing challenge expiration
  useEffect(() => {
    if (outgoingTimer == null) return;
    if (outgoingTimer <= 0) {
      setOutgoingChallenge(null);
      setOutgoingTimer(null);
      return;
    }
    const id = setInterval(() => setOutgoingTimer(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [outgoingTimer]);

  // 🔔 NEW: Listen for accepted challenges (synchronized countdown)
  useEffect(() => {
    if (!user) return;

    // Sender side
    const senderQ = query(
      collection(db, 'challenges'),
      where('fromUID', '==', user.uid),
      where('status', '==', 'accepted')
    );
    const unsubSender = onSnapshot(senderQ, snap => {
      snap.forEach(docSnap => {
        const data = docSnap.data();
        if (data.startTime && countdown == null) {
          const diff = data.startTime.toDate() - new Date();
          if (diff > 0) {
            setTimeout(() => setCountdown(3), diff);
          } else {
            setCountdown(3);
          }
        }
      });
    });

    // Receiver side
    const receiverQ = query(
      collection(db, 'challenges'),
      where('toEmail', '==', user.email),
      where('status', '==', 'accepted')
    );
    const unsubReceiver = onSnapshot(receiverQ, snap => {
      snap.forEach(docSnap => {
        const data = docSnap.data();
        if (data.startTime && countdown == null) {
          const diff = data.startTime.toDate() - new Date();
          if (diff > 0) {
            setTimeout(() => setCountdown(3), diff);
          } else {
            setCountdown(3);
          }
        }
      });
    });

    return () => {
      unsubSender();
      unsubReceiver();
    };
  }, [user, countdown]);

  // Countdown before navigating to the game
  useEffect(() => {
    if (countdown == null) return;
    if (countdown <= 0) {
      setCountdown(null);
      navigate('/game');
      return;
    }
    const id = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown, navigate]);

  // Send a challenge
  const sendChallenge = async () => {
    if (!/^[\w.+-]+@gmail\.com$/.test(email.trim())) {
      alert('Enter a valid Gmail address.');
      return;
    }
    if (!user) {
      alert('Log in to send a challenge.');
      return;
    }
    try {
      await createChallenge(user.uid, user.email, username, email.trim());
      await fetch(
        'https://us-central1-tapchallengegame-6255f.cloudfunctions.net/sendChallengeEmail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fromUsername: username, toEmail: email.trim() })
        }
      );
      setEmail('');
    } catch {
      alert('❌ Failed to send challenge.');
    }
  };

  // Accept incoming challenge
  const handleAccept = async () => {
    if (!incomingChallenge) return;
    await acceptChallenge(incomingChallenge.id);
    setIncomingChallenge(null);
    setTimer(null);
    setCountdown(3);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">🎯 Challenge a Friend</h1>

      {/* RECEIVER BANNER */}
      {incomingChallenge && countdown == null && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-4 rounded w-full max-w-md text-center">
          <p className="text-lg">
            ⚔️ You’ve been challenged by{' '}
            <b>{incomingChallenge.fromUsername || incomingChallenge.fromEmail}</b>!
          </p>
          <div className="text-3xl font-bold text-red-700 mt-2">
            ⏳ {timer}s left to accept
          </div>
          <button
            onClick={handleAccept}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Accept
          </button>
        </div>
      )}

      {/* SENDER BANNER */}
      {outgoingChallenge && countdown == null && (
        <div className="bg-blue-100 border border-blue-400 text-blue-800 px-6 py-4 rounded w-full max-w-md text-center">
          <p className="text-lg">
            ⏳ Waiting for <b>{outgoingChallenge.toUsername || outgoingChallenge.toEmail}</b> to
            accept…
          </p>
          <div className="text-3xl font-bold text-blue-700 mt-2">
            {outgoingTimer}s left
          </div>
        </div>
      )}

      {/* COUNTDOWN DISPLAY */}
      {countdown != null && (
        <div className="text-4xl font-extrabold text-green-800">
          Game starts in {countdown}
        </div>
      )}

      {/* INPUT & SEND */}
      <input
        type="email"
        placeholder="Friend’s Gmail"
        className="border p-2 rounded w-72"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={sendChallenge}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Send Challenge
      </button>

      {status && <p className="text-green-600 mt-2">{status}</p>}
    </div>
  );
}
