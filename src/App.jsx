import React from 'react';
import PleasureGame from './pleasure/PleasureGame';
import ChallengeGame from './challenge/ChallengeGame';
import TapGame from './components/TapGame'; // You’ll build this next
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function NavigationTabs() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const onGamePage = location.pathname === '/game';

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-200">
      <Link to="/" className={`px-4 py-2 rounded ${isActive('/') ? 'bg-blue-600 text-white' : 'bg-white'}`}>
        Tap Game
      </Link>
      <Link to="/challenge" className={`px-4 py-2 rounded ${isActive('/challenge') ? 'bg-blue-600 text-white' : 'bg-white'}`}>
        Challenge
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<PleasureGame />} />
        <Route path="/challenge" element={<ChallengeGame />} />
        <Route path="/game" element={<TapGame />} />
      </Routes>
    </Router>
  );
}

export default App;
