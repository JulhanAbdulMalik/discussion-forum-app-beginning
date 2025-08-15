import React from 'react';

const AddThreadPage = () => {
  return (
    <section className="add-thread-page">
      <div className="add-thread-page__container">
        <header className="add-thread-page__header">
          <h2>Buat Diskusi baru</h2>
          <p>Ceritakan hal-hal yang ingin kamu diskusikan!</p>
        </header>

        <main className="add-thread-page__content">
          <form onSubmit={''} className="add-thread-page__form">
            <div className="form-group">
              <label htmlFor="judul">Judul</label>
              <input id="judul" type="text" placeholder="Judul diskusi" />
            </div>
            <div className="form-group">
              <label htmlFor="kategori">Kategori</label>
              <input
                id="kategori"
                type="text"
                placeholder="Masukan kategori yang sesuai"
              />
            </div>
            <div className="form-group">
              <label htmlFor="diskusi">Diskusi</label>
              <div className="add-thread-page__diskusi">
                <textarea
                  id="diskusi"
                  placeholder="Tulis Diskusi Anda di sini..."
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
