import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import PleasureGame from './pleasure/PleasureGame';
import ChallengeGame from './challenge/ChallengeGame';
import TapGame from './components/TapGame';
import ReactGA from 'react-ga4';

// 🔁 GA Listener Component (tracks page views on route change)
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location.pathname]);

  return null;
}

// 🧭 Navigation Tabs at top
function NavigationTabs() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-200">
      <Link
        to="/"
        className={`px-4 py-2 rounded ${
          isActive('/') ? 'bg-blue-600 text-white' : 'bg-white'
        }`}
      >
        Tap Game
      </Link>
      <Link
        to="/challenge"
        className={`px-4 py-2 rounded ${
          isActive('/challenge') ? 'bg-blue-600 text-white' : 'bg-white'
        }`}
      >
        Challenge
      </Link>
    </div>
  );
}

// 🧠 Main App Component
export default function App() {
  return (
    <Router>
      <GAListener />
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<PleasureGame />} />
        <Route path="/challenge" element={<ChallengeGame />} />
        <Route path="/game" element={<TapGame />} />
      </Routes>
    </Router>
  );
}
