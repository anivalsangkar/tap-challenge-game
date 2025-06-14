import React from 'react';

export default function ResultsScreen({
  yourTaps,
  opponentTaps,
  winnerId,
  yourId,
  onRestart
}) {
  const youWin = winnerId === yourId;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-6">
      <h1 className="text-3xl font-bold">
        {youWin ? '🎉 You Win!' : '😞 You Lose'}
      </h1>
      <p className="text-xl">Your taps: {yourTaps}</p>
      <p className="text-xl">Opponent taps: {opponentTaps}</p>
      <button
        onClick={onRestart}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Restart Challenge
      </button>
    </div>
  );
}
