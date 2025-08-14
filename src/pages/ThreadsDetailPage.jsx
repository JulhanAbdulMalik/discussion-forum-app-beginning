import React from 'react';

import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const ThreadsDetailPage = () => {
  const threadDetail = {
    id: 'thread-1',
    title: 'Bagaimana cara state management terbaik di React?',
    body: 'Saya sedang bingung memilih antara Redux, Zustand, atau Context API untuk proyek besar. Masing-masing punya kelebihan dan kekurangan. Mungkin ada yang bisa berbagi pengalaman? <br> Sejauh ini, saya merasa Redux terlalu banyak boilerplate, sementara Context API bisa menyebabkan re-render yang tidak perlu. Zustand tampaknya menjadi jalan tengah yang baik. Bagaimana menurut kalian?',
    category: '#react',
    createdAt: '10 Hari yang lalu',
    owner: {
      id: 'user-1',
      name: 'Julhan',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    upVotes: 25,
    downVotes: 2,
  };

  const comments = [
    {
      id: 'comment-1',
      content:
        'Menurut saya, Zustand adalah pilihan terbaik untuk proyek baru. Sangat ringan dan intuitif!',
      createdAt: '9 Hari yang lalu',
      owner: {
        id: 'user-2',
        name: 'Andini',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      upVotes: 5,
      downVotes: 0,
    },
  ];

  return (
    <section className="threads-detail-page">
      {/* Konten Utama Thread */}
      <article className="thread-detail">
        <header className="thread-detail__header">
          <span className="thread-detail__category">
            {threadDetail.category}
          </span>
          <h1 className="thread-detail__title">{threadDetail.title}</h1>
          <div className="thread-detail__owner-info">
            <img
              src={threadDetail.owner.avatar}
              alt={threadDetail.owner.name}
            />
            <span>
              Dibuat oleh <b>{threadDetail.owner.name}</b> •{' '}
              {threadDetail.createdAt}
            </span>
          </div>
        </header>

        <div
          className="thread-detail__body"
          dangerouslySetInnerHTML={{ __html: threadDetail.body }}
        />

        <footer className="thread-detail__footer">
          <button type="button" className="vote-button">
            <FaRegThumbsUp /> {threadDetail.upVotes}
          </button>
          <button type="button" className="vote-button">
            <FaRegThumbsDown /> {threadDetail.downVotes}
          </button>
        </footer>
      </article>

      {/* Bagian Komentar */}
      <div className="thread-comments">
        <h2 className="thread-comments__title">Beri Komentar</h2>
        <form className="thread-comments__form">
          <textarea placeholder="Tulis komentar Anda di sini..." />
          <button type="submit">Kirim Komentar</button>
        </form>

        <div className="thread-comments__list-header">
          <h3>Komentar ({comments.length})</h3>
        </div>
        <div className="thread-comments__list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <header className="comment-item__header">
                <div className="comment-item__owner-info">
                  <img src={comment.owner.avatar} alt={comment.owner.name} />
                  <b>{comment.owner.name}</b>
                </div>
                <span>{comment.createdAt}</span>
              </header>
              <div
                className="comment-item__body"
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
              <footer className="comment-item__footer">
                <button type="button" className="vote-button">
                  <FaRegThumbsUp /> {comment.upVotes}
                </button>
                <button type="button" className="vote-button">
                  <FaRegThumbsDown /> {comment.downVotes}
                </button>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreadsDetailPage;
