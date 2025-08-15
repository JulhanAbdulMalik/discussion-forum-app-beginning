import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';

const AddThreadPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddThread = (event) => {
    event.preventDefault();

    if (!title || !body) {
      alert('Judul dan Diskusi tidak boleh kosong!');
      return;
    }

    dispatch(asyncAddThread({ title, category, body }));

    navigate('/');
  };

  return (
    <section className="add-thread-page">
      <div className="add-thread-page__container">
        <header className="add-thread-page__header">
          <h2>Buat Diskusi Baru</h2>
          <p>Bagikan ide atau pertanyaanmu dengan komunitas!</p>
        </header>

        <main className="add-thread-page__content">
          <form onSubmit={handleAddThread} className="add-thread-page__form">
            <div className="form-group">
              <label htmlFor="title">Judul</label>
              <input
                id="title"
                type="text"
                placeholder="Judul diskusi"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Kategori (Opsional)</label>
              <input
                id="category"
                type="text"
                placeholder="contoh: react, javascript"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Diskusi</label>
              <div className="add-thread-page__diskusi">
                <textarea
                  id="body"
                  placeholder="Tulis diskusi Anda di sini..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows="5"
                />
                <button type="submit">Kirim Thread</button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
};

export default AddThreadPage;
