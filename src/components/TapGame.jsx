import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4'; // ✅ GA import

export default function TapGame({ onFinish, userId }) {
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish(userId, taps);
      return;
    }
    // FIX: don’t reset the timeout on every tap render
    const timerId = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, onFinish]);

  // 🧠 Rage Quit Detection
  useEffect(() => {
    return () => {
      if (timeLeft > 0) {
        ReactGA.event({
          category: 'Gameplay',
          action: 'early_exit',
          label: `Exited with ${timeLeft}s left and ${taps} taps`,
        });
      }
    };
  }, [timeLeft, taps]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center space-y-4">
      <h1 className="text-2xl font-bold">🕹️ Challenge Mode</h1>
      <p className="text-lg">⏱️ Time Left: {timeLeft} seconds</p>
      <p className="text-lg">👆 Taps: {taps}</p>
      <button
        onClick={() => {
          setTaps(prev => {
            const newTaps = prev + 1;

            // 🧠 Milestone tracking every 5 taps
            if (newTaps % 5 === 0) {
              ReactGA.event({
                category: 'Gameplay',
                action: 'tap_milestone',
                label: `Taps: ${newTaps}`,
              });
            }

            return newTaps;
          });
        }}
        disabled={timeLeft === 0}
        className="bg-blue-600 text-white px-6 py-2 rounded text-xl"
      >
        Tap!
      </button>
    </div>
  );
}
