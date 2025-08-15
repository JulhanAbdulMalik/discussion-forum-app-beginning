import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPlus,
  FaRegCommentAlt,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from 'react-icons/fa';

const ThreadsPage = () => {
  const threads = [
    {
      id: 'thread-1',
      title: 'Bagaimana cara state management terbaik di React?',
      body: 'Saya sedang bingung memilih antara Redux, Zustand, atau Context API untuk proyek besar. Masing-masing punya kelebihan dan kekurangan. Mungkin ada yang bisa berbagi pengalaman? Saya sedang bingung memilih antara Redux, Zustand, atau Context API untuk proyek besar. Masing-masing punya kelebihan dan kekurangan. Mungkin ada yang bisa berbagi pengalaman?',
      category: '#react',
      createdAt: '10 Hari yang lalu',
      owner: 'Julhan',
      totalComments: 12,
      upVotes: 25,
      downVotes: 2,
    },
    {
      id: 'thread-2',
      title: 'Terbaik di React?',
      body: 'Saya sedang bingung memilih antara Redux, Zustand, atau Context API untuk proyek besar. Masing-masing punya kelebihan dan kekurangan. Mungkin ada yang bisa berbagi pengalaman?',
      category: '#redux',
      createdAt: '10 Hari yang lalu',
      owner: 'Julhan',
      totalComments: 5,
      upVotes: 25,
      downVotes: 2,
    },
    {
      id: 'thread-3',
      title: 'Redux?',
      body: 'Saya sedang bingung memilih antara Redux, Zustand, atau Context API untuk proyek besar. Masing-masing punya kelebihan dan kekurangan. Mungkin ada yang bisa berbagi pengalaman?',
      category: '#redux',
      createdAt: '10 Hari yang lalu',
      owner: 'Julhan',
      totalComments: 3,
      upVotes: 25,
      downVotes: 2,
    },
  ];

  const popularCategories = ['#react', '#redux', '#ui-design', '#javascript'];

  return (
    <section className="threads-page">
      <header className="threads-page__header">
        <h2>Kategori Populer</h2>
        <div className="threads-page__categories-list">
          {popularCategories.map((category) => (
            <button
              key={category}
              type="button"
              className="threads-page__category-item"
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <main className="threads-page__content">
        <h2>Diskusi Terbaru</h2>
        <div className="threads-page__list">
          {threads.map((thread) => (
            <article key={thread.id} className="threads-page__item">
              <header className="threads-page__item-header">
                <span className="threads-page__item-category">
                  {thread.category}
                </span>
                <Link
                  href={`/threads/${thread.id}`}
                  className="threads-page__item-title"
                >
                  <h3>{thread.title}</h3>
                </Link>
              </header>
              <div
                className="threads-page__item-body"
                dangerouslySetInnerHTML={{ __html: thread.body }}
              />
              <footer className="threads-page__item-footer">
                <button
                  type="button"
                  className="threads-page__item-vote-button"
                >
                  <FaRegThumbsUp /> {thread.upVotes}
                </button>
                <button
                  type="button"
                  className="threads-page__item-vote-button"
                >
                  <FaRegThumbsDown /> {thread.downVotes}
                </button>
                <p className="threads-page__item-comments">
                  <FaRegCommentAlt /> {thread.totalComments} Komentar
                </p>
                <span className="threads-page__item-owner">
                  Dibuat oleh <b>{thread.owner}</b>
                </span>
                <span className="threads-page__item-created">
                  {thread.createdAt}
                </span>
              </footer>
            </article>
          ))}
        </div>

        <div className="threads-page__add-thread">
          <Link to="/add-thread" className="threads-page__add-thread-button">
            <FaPlus />
          </Link>
        </div>
      </main>
    </section>
  );
};

export default ThreadsPage;
