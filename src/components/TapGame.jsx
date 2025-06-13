import React, { useState, useEffect } from 'react';

function TapGame() {
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center">
      <h1 className="text-2xl font-bold mb-4">🕹️ Challenge Mode</h1>
      <p className="text-lg mb-2">⏱️ Time Left: {timeLeft} seconds</p>
      <p className="text-lg mb-4">👆 Taps: {taps}</p>
      <button
        onClick={() => setTaps((prev) => prev + 1)}
        disabled={timeLeft === 0}
        className="bg-blue-600 text-white px-6 py-2 rounded text-xl"
      >
        Tap!
      </button>
    </div>
  );
}

export default TapGame;
