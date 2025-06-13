// components/Logout.jsx
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Logout({ onLogout }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      if (onLogout) onLogout();
    } catch (e) {
      alert('Failed to sign out: ' + e.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-gray-600 hover:underline"
    >
      Sign out
    </button>
  );
}

export default Logout;
