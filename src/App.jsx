import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import ThreadsPage from './pages/ThreadsPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<ThreadsPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
