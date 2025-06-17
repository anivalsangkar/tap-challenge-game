import React, { useState } from 'react';

export default function ResultsScreen({
  yourTaps,
  opponentTaps,
  winnerId,
  yourId,
  onRestart
}) {
  const isTie = winnerId === null;
  const youWin = winnerId === yourId;
  const [showRematchNote, setShowRematchNote] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-6">
      <h1 className="text-3xl font-bold">
        {isTie ? (
          <span className="text-yellow-600">🤝 It's a tie!</span>
        ) : youWin ? (
          <span className="text-green-600">🎉 You Win!</span>
        ) : (
          <span className="text-red-600">😞 You Lose</span>
        )}
      </h1>

      <p className="text-xl">Your taps: <strong>{yourTaps}</strong></p>
      <p className="text-xl">Opponent taps: <strong>{opponentTaps}</strong></p>

      <div className="flex flex-col items-center space-y-4 mt-6">
        <button
          onClick={onRestart}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          🔄 Restart
        </button>

        <button
          onClick={() => setShowRematchNote(true)}
          className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded"
        >
          🤝 Rematch (coming soon)
        </button>

        {showRematchNote && (
          <p className="text-sm text-gray-600 mt-2">
            Rematch feature is coming soon. For now, please click “Restart” to play again 🔁
          </p>
        )}
      </div>
    </div>
  );
}
