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

  // Helper to compute remaining seconds against server expireAt
  const computeRemaining = (expireAt) => {
    if (!expireAt?.toMillis) return 0;
    const ms = expireAt.toMillis() - Date.now();
    return Math.max(Math.ceil(ms / 1000), 0);
  };

  // Notification permission
  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Auth & username fetch
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

  // Receiver listener: new pending challenges for me
  useEffect(() => {
    if (!user) return;
    let recInit = false;
    const recQ = query(
      collection(db, 'challenges'),
      where('toEmail', '==', user.email),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(recQ, (snap) => {
      if (!recInit) {
        recInit = true;
        return;
      }
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

  // Incoming timer countdown
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

  // Sender listener: new pending challenges I sent
  useEffect(() => {
    if (!user) return;
    let sendInit = false;
    const sendQ = query(
      collection(db, 'challenges'),
      where('fromUID', '==', user.uid),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(sendQ, (snap) => {
      if (!sendInit) {
        sendInit = true;
        return;
      }
      snap.docChanges().forEach(change => {
  const data = { id: change.doc.id, ...change.doc.data() };
  if ((change.type === 'added' || change.type === 'modified') && data.expireAt) {
    // now toUsername is already on the document
    setOutgoingChallenge(data);
    setOutgoingTimer(computeRemaining(data.expireAt));
    setStatus(`✅ Challenge sent to ${data.toUsername || data.toEmail}.`);
  }
});

    });
    return () => unsub();
  }, [user]);

  // Outgoing timer countdown
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

  // Countdown before game start
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

  // Send challenge (no manual timer)
  const sendChallenge = async () => {
    if (!/^[\w.+-]+@gmail\.com$/.test(email.trim())) {
      alert('Enter a valid Gmail address.');
      return;
    }
    if (!user) {
      alert('Log in to send a challenge.');
      return;
    }
    const to = email.trim();
    try {
      await createChallenge(user.uid, user.email, username, to);
      await fetch(
        'https://us-central1-tapchallengegame-6255f.cloudfunctions.net/sendChallengeEmail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fromUsername: username, toEmail: to })
        }
      );
      // setStatus(`✅ Challenge sent to ${to}.`);
      setEmail('');
    } catch {
      alert('❌ Failed to send challenge.');
    }
  };

  // Accept challenge (receiver)
  const handleAccept = async () => {
    if (!incomingChallenge) return;
    await acceptChallenge(incomingChallenge.id);
    setIncomingChallenge(null);
    setTimer(null);
    setCountdown(3);
  };

  const isRecipient = incomingChallenge?.toEmail === user?.email;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">🎯 Challenge a Friend</h1>

      {/* RECEIVER BANNER */}
      {incomingChallenge && (
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

      {/* SENDER BANNER (now uses username) */}
      {outgoingChallenge && (
        <div className="bg-blue-100 border border-blue-400 text-blue-800 px-6 py-4 rounded w-full max-w-md text-center">
          <p className="text-lg">
            ⏳ Waiting for <b>{outgoingChallenge.toUsername || outgoingChallenge.toEmail}</b> to accept…
          </p>
          <div className="text-3xl font-bold text-blue-700 mt-2">
            {outgoingTimer}s left
          </div>
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
