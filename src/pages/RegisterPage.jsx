import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await dispatch(asyncRegisterUser({ name, email, password }));

      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="register-page">
      <div className="register-page__container">
        <header className="register-page__header">
          <h2>Registrasi</h2>
          <p>Bergabunglah dengan komunitas kami!</p>
        </header>

        <main className="register-page__content">
          <form onSubmit={handleRegister} className="register-page__form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="register-page__button">
              Daftar
            </button>
          </form>
          <p className="register-page__login-link">
            Sudah punya akun? <Link to="/login">Masuk di sini</Link>
          </p>
        </main>
      </div>
    </section>
  );
};

export default RegisterPage;
