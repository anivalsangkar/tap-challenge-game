// src/challenge/ChallengeGame.jsx
import React, { useState, useEffect } from 'react';
import TapGame from '../components/TapGame';
import ResultsScreen from '../components/ResultsScreen';
import { createChallenge, acceptChallenge } from '../utils/challengeUtils';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import useOutgoingChallenge from '../hooks/useOutgoingChallenge';
import useChallengeStatus from '../hooks/useChallengeStatus';
import { showNotification } from '../utils/notify';

export default function ChallengeGame() {
  // ─── State ──────────────────────────────────────────────────────────────
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [incomingChallenge, setIncomingChallenge] = useState(null);
  const [timer, setTimer] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [showGame, setShowGame] = useState(false);

  // Results state
  const [showResults, setShowResults] = useState(false);
  const [yourTaps, setYourTaps] = useState(0);
  const [opponentTaps, setOpponentTaps] = useState(0);
  const [winnerId, setWinnerId] = useState(null);

  // ─── Hooks ───────────────────────────────────────────────────────────────
  const { challenge: outgoingChallenge, remainingTime: outgoingTimer } =
    useOutgoingChallenge(user?.uid);

  const challengeId = incomingChallenge?.id || outgoingChallenge?.id;
  const { start, finish, status } = useChallengeStatus(challengeId);

  // Mark “in-game” in Firestore once we flip into the game screen
  useEffect(() => {
    if (showGame) start();
  }, [showGame, start]);

  // When Firestore status flips to "finished", load taps and show results
  useEffect(() => {
    if (status !== 'finished') return;
    const ref = doc(db, 'challenges', challengeId);
    getDoc(ref).then((snap) => {
      const data = snap.data() || {};
      setWinnerId(data.winner || null);
      const tapMap = data.taps || {};
      const oppId =
        user.uid === data.fromUID ? data.toUID : data.fromUID;
      setOpponentTaps(tapMap[oppId] || 0);
      setShowResults(true);
    });
  }, [status, challengeId, user?.uid]);

  // ─── Helper ──────────────────────────────────────────────────────────────
  const computeRemaining = (expireAt) =>
    expireAt?.toMillis
      ? Math.max(Math.ceil((expireAt.toMillis() - Date.now()) / 1000), 0)
      : 0;

  // ─── Effects & Listeners ─────────────────────────────────────────────────

  // Auth + username
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) return setUser(null);
      setUser(u);
      const snap = await getDoc(doc(db, 'users', u.uid));
      if (snap.exists()) setUsername(snap.data().username || '');
      // clear state on new login
      setIncomingChallenge(null);
      setTimer(null);
      setCountdown(null);
      setShowGame(false);
      setShowResults(false);
    });
    return () => unsub();
  }, []);

  // Incoming pending listener
  useEffect(() => {
    if (!user) return;
    let init = false;
    const q = query(
      collection(db, 'challenges'),
      where('toEmail', '==', user.email),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(q, (snap) => {
      if (!init) { init = true; return; }
      snap.docChanges().forEach((c) => {
        const d = { id: c.doc.id, ...c.doc.data() };
        if ((c.type === 'added' || c.type === 'modified') && d.expireAt) {
          const rem = computeRemaining(d.expireAt);
          if (rem > 0) {
            setIncomingChallenge(d);
            setTimer(rem);
            showNotification('🎯 New Challenge!', {
              body: `Challenged by ${d.fromUsername || d.fromEmail}`
            });
          }
        }
      });
    });
    return () => unsub();
  }, [user]);

  // Incoming countdown
  useEffect(() => {
    if (timer == null) return;
    if (timer <= 0) {
      setIncomingChallenge(null);
      setTimer(null);
      return;
    }
    const i = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(i);
  }, [timer]);

  // Accepted → 3s countdown
  useEffect(() => {
    if (!outgoingChallenge) return;
    const ref = doc(db, 'challenges', outgoingChallenge.id);
    const unsub = onSnapshot(ref, (snap) => {
      const d = snap.data();
      if (d.status === 'accepted' && countdown == null) {
        setIncomingChallenge(null);
        setTimer(null);
        setCountdown(3);
      }
    });
    return () => unsub();
  }, [outgoingChallenge, countdown]);

  // 3s → showGame
  useEffect(() => {
    if (countdown == null) return;
    if (countdown <= 0) {
      setCountdown(null);
      setShowGame(true);
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  // ─── Handlers ──────────────────────────────────────────────────────────

  // Wrap finish to record taps in Firestore then flip status
  const handleFinish = async (playerId, taps) => {
    setYourTaps(taps);
    await updateDoc(doc(db, 'challenges', challengeId), {
      [`taps.${playerId}`]: taps,
      finishedAt: serverTimestamp()
    });
    finish(playerId);
  };

  const sendChallenge = async () => {
    if (!/^[\w.+-]+@gmail\.com$/.test(email.trim())) {
      return alert('Enter a valid Gmail address');
    }
    if (!user) return alert('Log in first');
    await createChallenge(user.uid, user.email, username, email.trim());
    await fetch(
      'https://us-central1-tapchallengegame-6255f.cloudfunctions.net/sendChallengeEmail',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromUsername: username, toEmail: email.trim() })
      }
    );
    setStatusMsg(`✅ Challenge sent to ${email.trim()}`);
    setEmail('');
  };

  const handleAccept = async () => {
    if (!incomingChallenge) return;
    await acceptChallenge(incomingChallenge.id);
    setIncomingChallenge(null);
    setTimer(null);
    setCountdown(3);
  };

  // ─── Render ─────────────────────────────────────────────────────────────

  if (showGame && user) {
    return <TapGame onFinish={handleFinish} userId={user.uid} />;
  }
  if (showResults) {
    return (
      <ResultsScreen
        yourTaps={yourTaps}
        opponentTaps={opponentTaps}
        winnerId={winnerId}
        yourId={user.uid}
        onRestart={() => {
          // reset local state for a restart
          setShowResults(false);
          setShowGame(false);
          setIncomingChallenge(null);
          setTimer(null);
          setCountdown(3);
        }}
      />
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">🎯 Challenge a Friend</h1>

      {/* RECEIVER BANNER */}
      {incomingChallenge && countdown == null && (
        <div className="bg-yellow-100 border px-6 py-4 rounded w-full max-w-md text-center">
          <p>⚔️ Challenged by {incomingChallenge.fromUsername}</p>
          <p className="text-3xl">⏳ {timer}s to accept</p>
          <button onClick={handleAccept} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Accept
          </button>
        </div>
      )}

      {/* SENDER BANNER */}
      {outgoingChallenge && countdown == null && (
        <div className="bg-blue-100 border px-6 py-4 rounded w-full max-w-md text-center">
          <p>⏳ Waiting for {outgoingChallenge.toUsername}…</p>
          <p className="text-3xl mt-1">{outgoingTimer}s left</p>
        </div>
      )}

      {/* COUNTDOWN DISPLAY */}
      {countdown != null && (
        <div className="text-4xl font-bold text-green-800">Game starts in {countdown}</div>
      )}

      {/* INPUT & SEND */}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Friend’s Gmail"
        className="border p-2 rounded w-72"
      />
      <button onClick={sendChallenge} className="bg-blue-600 text-white px-6 py-2 rounded">
        Send Challenge
      </button>
      {statusMsg && <p className="text-green-600 mt-2">{statusMsg}</p>}
    </div>
  );
}
