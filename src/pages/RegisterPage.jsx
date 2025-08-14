import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  // Anda akan menambahkan state untuk setiap input di sini
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Logika untuk mengirim data registrasi ke server
    console.log('Register attempt with:', {
      name: 'user',
      email: 'user@email.com',
      password: 'userpassword',
    });
  };

  return (
    <section className="register-page">
      <div className="register-page__container">
        <header className="register-page__header">
          <h2>Register</h2>
          <p>Bergabunglah dengan komunitas kami!</p>
        </header>

        <main className="register-page__content">
          <form onSubmit={handleRegister} className="register-page__form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input id="name" type="text" placeholder="Nama Anda" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="contoh@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Buat password yang kuat"
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
