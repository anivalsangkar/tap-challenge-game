import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  doc, getDoc, updateDoc, addDoc, collection, query, where,
  orderBy, limit, getDocs, getCountFromServer
} from 'firebase/firestore';
import { getCoins, spendCoins, createPaymentOrder } from '../coins';
import Login from '../components/Login';
import Logout from '../components/Logout';
import ReactGA from 'react-ga4';

function PleasureGame() {
  const GAME_DURATION = 15;

  const [user, setUser] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [inputName, setInputName] = useState('');
  const [bestScore, setBestScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [inrAmount, setInrAmount] = useState('');
  const [buying, setBuying] = useState(false);

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [count, setCount] = useState(0);
  const [topFive, setTopFive] = useState([]);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async u => {
      setUser(u);
      if (!u) {
        setProfileLoaded(false);
        setUsername('');
        setBestScore(0);
        setCoins(0);
        return;
      }

      const balance = await getCoins(u.uid);
      setCoins(balance);

      const userRef = doc(db, 'users', u.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists() && userSnap.data().username) {
        setUsername(userSnap.data().username);
      }

      const bestQ = query(
        collection(db, 'scores'),
        where('uid', '==', u.uid),
        orderBy('score', 'desc'),
        limit(1)
      );
      const bestSnap = await getDocs(bestQ);
      setBestScore(bestSnap.empty ? 0 : bestSnap.docs[0].data().score);
      setProfileLoaded(true);
    });
  }, []);

  const handleBuyCoins = async () => {
    const inr = parseInt(inrAmount, 10);
    if (isNaN(inr) || inr <= 0) {
      alert('Enter a valid INR amount');
      return;
    }

    ReactGA.event({
      category: 'Coins',
      action: 'buy_attempt',
      label: `${inr} INR`,
      value: inr
    });

    setBuying(true);
    try {
      const { orderId, keyId } = await createPaymentOrder(user.uid, inr);
      const options = {
        key: keyId,
        amount: inr * 100,
        currency: 'INR',
        name: 'Tap Challenge Game',
        description: `Buy ${inr * 2} coins`,
        order_id: orderId,
        handler: async () => {
          ReactGA.event({
            category: 'Coins',
            action: 'buy_success',
            label: `${inr} INR`,
            value: inr
          });

          setInrAmount('');
          alert('✅ Payment successful! Coins will be added shortly after verification.');

          let attempts = 0;
          const maxAttempts = 5;

          const pollCoins = async () => {
            const updatedCoins = await getCoins(user.uid);
            if (updatedCoins > coins || attempts >= maxAttempts) {
              setCoins(updatedCoins);
            } else {
              attempts++;
              setTimeout(pollCoins, 2000);
            }
          };

          setTimeout(pollCoins, 3000);
        },
        prefill: { email: user.email, name: username }
      };
      new window.Razorpay(options).open();
    } catch (e) {
      ReactGA.event({
        category: 'Coins',
        action: 'buy_failure',
        label: e.message
      });
      alert('Payment failed: ' + e.message);
    } finally {
      setBuying(false);
    }
  };

  const saveUsername = async () => {
    if (!inputName.trim()) return;
    await updateDoc(doc(db, 'users', user.uid), { username: inputName.trim() });
    setUsername(inputName.trim());
  };

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [started, timeLeft]);

  useEffect(() => {
    if (timeLeft !== 0) return;

    (async () => {
      await addDoc(collection(db, 'scores'), {
        uid: user.uid,
        username,
        score: count,
        timestamp: Date.now()
      });

      setBestScore(prev => Math.max(prev, count));

      const qTop = query(
        collection(db, 'scores'),
        orderBy('score', 'desc'),
        limit(5)
      );
      const snapTop = await getDocs(qTop);
      setTopFive(snapTop.docs.map(d => d.data()));

      const qRank = query(collection(db, 'scores'), where('score', '>', count));
      const cntSnap = await getCountFromServer(qRank);
      setUserRank(cntSnap.data().count + 1);

      // GA Tracking after game ends
      const tapSpeed = count / GAME_DURATION;

      ReactGA.event({ category: 'Game', action: 'tap_game_ended', label: 'Solo Mode', value: count });
      ReactGA.event({ category: 'Game', action: 'tap_game_score_submitted', label: 'Solo Mode', value: count });
      ReactGA.event({ category: 'Performance', action: 'tap_speed', label: 'Solo Mode', value: Math.round(tapSpeed * 100) });
      ReactGA.event({ category: 'Coins', action: 'coins_remaining', label: 'Solo Mode', value: coins });
    })();
  }, [timeLeft, count]);

  const handleTap = () => {
    if (!started) {
      setStarted(true);
      ReactGA.event({ category: 'Game', action: 'tap_game_started', label: 'Solo Mode' });
    }
    if (timeLeft > 0) {
      setCount(c => c + 1);
      ReactGA.event({ category: 'Game', action: 'tap_registered', label: 'Solo Mode' });
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setTimeLeft(GAME_DURATION);
    setCount(0);
    setTopFive([]);
    setUserRank(null);
  };

  if (!user) return <Login />;
  if (!profileLoaded) return <div className="flex items-center justify-center min-h-screen">Loading…</div>;
  if (!username) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Choose a Username</h2>
        <input type="text" placeholder="Username" value={inputName} onChange={e => setInputName(e.target.value)} className="border p-2 rounded mb-4" />
        <button onClick={saveUsername} disabled={!inputName.trim()} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50">
          Save
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full flex justify-between mb-4">
        <span className="font-medium">Hello, {username}! 🪙 {coins}</span>
        <Logout />
      </div>

      <div className="w-full max-w-md bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">💰 Buy Coins</h3>
        <div className="flex space-x-2">
          <input type="number" min="1" value={inrAmount} onChange={e => setInrAmount(e.target.value)} placeholder="INR" className="flex-1 border p-2 rounded" />
          <button onClick={handleBuyCoins} disabled={buying} className={`px-4 py-2 rounded text-white ${buying ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {buying ? 'Processing…' : 'Buy Coins'}
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">You’ll receive <b>{inrAmount ? inrAmount * 2 : 0}</b> coins.</p>
      </div>

      <div className="mb-4">Best: <b>{bestScore}</b> | Current: <b>{count}</b></div>

      <div className="w-full flex justify-center mb-6" style={{ height: 80 }}>
        {!started ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">🎮 15-Second Tap Challenge</h2>
            <p className="text-gray-700">Tap as fast as you can once you hit “Tap Me!”</p>
          </div>
        ) : timeLeft === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">🎉 Time’s Up! 🎉</h2>
            <p>You tapped <b>{count}</b> times.</p>
            {userRank && <p>Your Rank: {userRank}</p>}
          </div>
        ) : <div />}
      </div>

      <div className="text-2xl font-semibold mb-4">Time Left: <b className={timeLeft <= 5 ? 'text-red-600' : 'text-red-500'}>{started ? timeLeft : GAME_DURATION}s</b></div>

      {timeLeft === 0 ? (
        <div className="flex flex-col items-center space-y-2 mb-6">
          <button onClick={async () => {
            try {
              ReactGA.event({ category: 'Coins', action: 'double_score_used', label: 'Solo Mode', value: 20 });
              ReactGA.event({ category: 'Coins', action: 'coin_balance_before_double', label: 'Solo Mode', value: coins });
              const newBalance = await spendCoins(user.uid, 20);
              setCoins(newBalance);
              setCount(c => c * 2);
            } catch (e) {
              alert(e.message);
            }
          }} disabled={coins < 20} className={`px-6 py-2 rounded ${coins < 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'} text-white`}>
            🪙 20 Double My Score
          </button>
          <button onClick={handleRestart} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded">Restart</button>
        </div>
      ) : (
        <button onClick={handleTap} className="bg-blue-600 hover:bg-blue-700 active:scale-95 transform transition duration-100 ease-out text-xl px-8 py-3 rounded mb-6">
          Tap Me!
        </button>
      )}

      {topFive.length > 0 && (
        <div className="w-full max-w-md bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">🏆 Top 5 Leaderboard</h3>
          <ol className="list-decimal list-inside">
            {topFive.map((u, i) => (
              <li key={i} className="flex justify-between">
                <span>{u.username}</span>
                <span><b>{u.score}</b></span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default PleasureGame;
