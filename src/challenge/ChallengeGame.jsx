// ✅ GA4 Tracking Enabled
import ReactGA from 'react-ga4';

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
  const [showResults, setShowResults] = useState(false);
  const [yourTaps, setYourTaps] = useState(0);
  const [opponentTaps, setOpponentTaps] = useState(0);
  const [winnerId, setWinnerId] = useState(null);
  // persist id through accept for receiver
  const [currentChallengeId, setCurrentChallengeId] = useState(null);

  // ─── Hooks ───────────────────────────────────────────────────────────────
  const { challenge: outgoingChallenge, remainingTime: outgoingTimer } =
    useOutgoingChallenge(user?.uid);
  console.log('📦 incomingChallenge:', incomingChallenge?.id);
  console.log('📦 outgoingChallenge:', outgoingChallenge?.id);
  console.log('📦 currentChallengeId:', currentChallengeId);

  const rawId = incomingChallenge?.id || outgoingChallenge?.id;
  const challengeId = currentChallengeId || rawId;
  console.log('📌 rawId:', rawId);
  console.log('📌 challengeId:', challengeId);
  // 🔑 FIX: subscribe to the _persistent_ challengeId, not rawId
  const { start, finish, status } = useChallengeStatus(challengeId);

  // Mark “in-game” in Firestore once we flip into the game screen
  useEffect(() => {
    if (showGame) {
      console.log('[showGameEffect] showGame is true → starting in‐game status');
      start();
      ReactGA.event({ category: 'Challenge', action: 'challenge_started', label: challengeId || rawId });
    }
  }, [showGame, start]);

  // When Firestore status flips to "finished", load taps and show results
  useEffect(() => {
    console.log('[statusEffect] status is now', status, '— challengeId:', challengeId);
    if (status !== 'finished') return;
    const ref = doc(db, 'challenges', challengeId);
    getDoc(ref).then((snap) => {
      const data = snap.data() || {};
      console.log('[statusEffect] fetched challenge data', data);
      setWinnerId(data.winner || null);
      const tapMap = data.taps || {};
      const oppId = Object.keys(tapMap).find(id => id !== user.uid);
      setOpponentTaps(tapMap[oppId] || 0);
      console.log('[statusEffect] setting showResults(true)');
      setShowResults(true);
      ReactGA.event({ category: 'Challenge', action: 'challenge_result_shown', label: challengeId });
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
      // reset all state on (re)login
      setIncomingChallenge(null);
      setTimer(null);
      setCountdown(null);
      setShowGame(false);
      setShowResults(false);
      setCurrentChallengeId(null);
    });
    return () => unsub();
  }, []);

  // listen for pending challenges
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
            ReactGA.event({ category: 'Challenge', action: 'challenge_received', label: d.fromEmail });
          }
        }
      });
    });
    return () => unsub();
  }, [user]);

  // pending countdown
  useEffect(() => {
    if (timer == null) return;
    if (timer <= 0) {
      setIncomingChallenge(null);
      setTimer(null);
      return;
    }
    const i = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(i);
  }, [timer]);

  // when user Accepts a challenge
  const handleAccept = async () => {
    if (!incomingChallenge) return;
    const id = incomingChallenge.id;
    await acceptChallenge(id);
    setCurrentChallengeId(id);
    setIncomingChallenge(null);
    setTimer(null);
    setCountdown(3);
    ReactGA.event({ category: 'Challenge', action: 'challenge_accepted', label: incomingChallenge.fromEmail });
  };

  // for sender: detect their accepted state
  useEffect(() => {
    if (!outgoingChallenge) return;
    const ref = doc(db, 'challenges', outgoingChallenge.id);
    const unsub = onSnapshot(ref, (snap) => {
      const d = snap.data();
      if (d.status === 'accepted' && countdown == null) {
        setCountdown(3);
      }
    });
    return () => unsub();
  }, [outgoingChallenge, countdown]);

  // 3s → showGame & persist id
  useEffect(() => {
    if (countdown == null) return;
    if (countdown <= 0) {
      setCountdown(null);
      //setCurrentChallengeId(rawId);
      setShowGame(true);
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  // ─── Handlers ──────────────────────────────────────────────────────────

  const handleFinish = async (playerId, taps) => {
    console.log('[handleFinish] called with', { playerId, taps, challengeId });
    setYourTaps(taps);
    ReactGA.event({ category: 'Challenge', action: 'challenge_tap_count', value: taps });
    ReactGA.event({ category: 'Challenge', action: 'challenge_ended', label: challengeId, value: taps });

    const ref = doc(db, 'challenges', challengeId);

    // 1. Update this player's tap count
    await updateDoc(ref, {
      [`taps.${playerId}`]: taps
    });

    // 2. Fetch the updated challenge data
    const snap = await getDoc(ref);
    const data = snap.data();
    const tapMap = data?.taps || {};

    // 3. Check if both players have finished
    const playerIds = Object.keys(tapMap);
    if (playerIds.length < 2) {
      console.log('[handleFinish] Waiting for other player to finish...');
      return; // Do nothing else yet
    }

    const [id1, id2] = playerIds;
    const taps1 = tapMap[id1];
    const taps2 = tapMap[id2];

    let winner = null;
    let isTie = false;

    if (taps1 > taps2) {
      winner = id1;
    } else if (taps2 > taps1) {
      winner = id2;
    } else {
      isTie = true;
      winner = null;
    }

    // 4. Mark the challenge as finished only once
    await updateDoc(ref, {
      status: 'finished',
      winner: winner,
      isTie: isTie,
      finishedAt: serverTimestamp()
    });

    console.log('[handleFinish] Game finished — Winner:', winner || 'Tie');
    if (!isTie) {
      ReactGA.event({ category: 'Challenge', action: 'challenge_winner', label: winner });
    }
    ReactGA.event({ category: 'Challenge', action: 'challenge_tap_delta', value: Math.abs(taps1 - taps2) });
    finish(playerId);
  };

  const sendChallenge = async () => {
    if (!/^[\w.+-]+@gmail\.com$/.test(email.trim())) {
      return alert('Enter a valid Gmail address');
    }
    if (!user) return alert('Log in first');
    await createChallenge(user.uid, user.email, username, email.trim());
    try {
      const res = await fetch('https://us-central1-tapchallengegame-6255f.cloudfunctions.net/sendChallengeEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromUsername: username, toEmail: email.trim() })
      });
      const json = await res.json();
      console.log('📧 Email function response:', json);
      if (!res.ok) {
        console.error('❌ Email send failed:', res.status, json);
      }
    } catch (err) {
      console.error('❌ Network/email error:', err);
    }
    ReactGA.event({ category: 'Challenge', action: 'challenge_sent', label: email.trim() });
    setStatusMsg(`✅ Challenge sent to ${email.trim()}`);
    setEmail('');
  };

  console.log(
    '[render] showGame:', showGame,
    'showResults:', showResults,
    'incomingChallenge:', Boolean(incomingChallenge),
    'outgoingChallenge:', Boolean(outgoingChallenge)
  );

  // ─── Render ─────────────────────────────────────────────────────────────

  if (showResults) {
    console.log('[render] 💥 showResults is true, rendering ResultsScreen');
    return (
      <ResultsScreen
        yourTaps={yourTaps}
        opponentTaps={opponentTaps}
        winnerId={winnerId}
        yourId={user.uid}
        onRestart={() => {
          ReactGA.event({ category: 'Challenge', action: 'restart_clicked', label: challengeId });
          window.location.reload();
        }}
      />
    );
  }

  if (showGame && user) {
    console.log('[render] before showResults check – showResults:', showResults);
    return <TapGame onFinish={handleFinish} userId={user.uid} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">🎯 Challenge a Friend</h1>

      {/* RECEIVER BANNER */}
      {incomingChallenge && countdown == null && (
        <div className="bg-yellow-100 border px-6 py-4 rounded w-full max-w-md text-center">
          <p>⚔️ Challenged by {incomingChallenge.fromUsername}</p>
          <p className="text-3xl">⏳ {timer}s to accept</p>
          <button
            onClick={handleAccept}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
          >
            Accept
          </button>
        </div>
      )}

      {/* SENDER BANNER */}
      {outgoingChallenge && countdown == null && (
        <div className="bg-blue-100 border px-6 py-4 rounded w-full max-w-md text-center">
          <p>⏳ Waiting for a response…</p>
          <p className="text-3xl mt-1">{outgoingTimer}s left</p>
        </div>
      )}

      {/* COUNTDOWN DISPLAY */}
      {countdown != null && (
        <div className="text-4xl font-bold text-green-800">
          Game starts in {countdown}
        </div>
      )}

      {/* INPUT & SEND */}
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Friend’s Gmail"
        className="border p-2 rounded w-72"
      />
      <button
        onClick={sendChallenge}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Send Challenge
      </button>
      {statusMsg && (
        <p className="text-green-600 mt-2">{statusMsg}</p>
      )}
    </div>
  );
}
