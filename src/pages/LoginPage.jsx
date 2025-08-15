import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <section className="login-page">
      <div className="login-page__container">
        <header className="login-page__header">
          <h2>Login</h2>
          <p>Masuk untuk melanjutkan diskusi!</p>
        </header>

        <main className="login-page__content">
          <form onSubmit={handleLogin} className="login-page__form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-page__button">
              Masuk
            </button>
          </form>
          <p className="login-page__register-link">
            Belum punya akun? <Link to="/register">Daftar di sini</Link>
          </p>
        </main>
      </div>
    </section>
  );
};

export default LoginPage;
