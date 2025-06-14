// src/components/TapGame.jsx
import React, { useState, useEffect } from 'react';

export default function TapGame({ onFinish, userId }) {
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish(userId);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onFinish, userId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center space-y-4">
      <h1 className="text-2xl font-bold">🕹️ Challenge Mode</h1>
      <p className="text-lg">⏱️ Time Left: {timeLeft} seconds</p>
      <p className="text-lg">👆 Taps: {taps}</p>
      <button
        onClick={() => setTaps(t => t + 1)}
        disabled={timeLeft === 0}
        className="bg-blue-600 text-white px-6 py-2 rounded text-xl"
      >
        Tap!
      </button>
    </div>
  );
}
