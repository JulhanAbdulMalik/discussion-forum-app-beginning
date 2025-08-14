import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // Nanti, Anda akan menambahkan state untuk email & password di sini
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    console.log('Login attempt with:', {
      email: 'user@email.com',
      password: 'userpassword',
    });
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
              <input id="email" type="email" placeholder="contoh@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan password Anda"
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
