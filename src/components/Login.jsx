import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

function Login() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Tap Challenge</h2>
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default Login;
