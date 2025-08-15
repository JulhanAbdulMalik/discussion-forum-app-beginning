import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import ThreadsPage from './pages/ThreadsPage';
import AddThreadPage from './pages/AddThreadPage';
import ThreadsDetailPage from './pages/ThreadsDetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<ThreadsPage />} />
          <Route path="/add-thread" element={<AddThreadPage />} />
          <Route path="/threads/:id" element={<ThreadsDetailPage />} />

          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
