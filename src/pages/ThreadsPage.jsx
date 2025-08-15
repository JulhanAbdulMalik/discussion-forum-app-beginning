import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaPlus,
  FaRegCommentAlt,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import {
  asyncPopulateThreads,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';
import { asyncPopulateUsers } from '../states/users/action';

const ThreadsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Data dari Redux store
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateThreads());
    dispatch(asyncPopulateUsers());
  }, [dispatch]);

  const handleVote = (threadId, voteType, hasVoted) => {
    if (!authUser) {
      alert('Anda harus login untuk memberikan vote!');

      navigate('/login');
      return;
    }

    if (hasVoted) {
      dispatch(asyncNeutralizeVoteThread(threadId));
    } else if (voteType === 'up') {
      dispatch(asyncUpVoteThread(threadId));
    } else {
      dispatch(asyncDownVoteThread(threadId));
    }
  };

  // Menggabungkan data threads dengan data owner (user)
  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId) || {},
    hasVotedUp: authUser ? thread.upVotesBy.includes(authUser.id) : false,
    hasVotedDown: authUser ? thread.downVotesBy.includes(authUser.id) : false,
  }));

  // Membuat daftar kategori unik dari threads yang ada
  const uniqueCategories = [
    ...new Set(threads.map((thread) => thread.category)),
  ];

  // Filter threads berdasarkan kategori yang dipilih
  const filteredThreads = selectedCategory
    ? threadList.filter((thread) => thread.category === selectedCategory)
    : threadList;

  return (
    <section className="threads-page">
      <header className="threads-page__header">
        <h2>Kategori Populer</h2>
        <div className="threads-page__categories-list">
          <button
            type="button"
            className={`threads-page__category-item ${
              selectedCategory === '' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('')}
          >
            Semua
          </button>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`threads-page__category-item ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              #{category}
            </button>
          ))}
        </div>
      </header>

      <main className="threads-page__content">
        <h2>Diskusi Terbaru ({filteredThreads.length})</h2>
        <div className="threads-page__list">
          {filteredThreads.map((thread) => (
            <article key={thread.id} className="threads-page__item">
              <header className="threads-page__item-header">
                <span className="threads-page__item-category">
                  #{thread.category}
                </span>
                <Link
                  to={`/threads/${thread.id}`}
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
                  onClick={() => handleVote(thread.id, 'up', thread.hasVotedUp)}
                >
                  <FaRegThumbsUp
                    style={{ color: thread.hasVotedUp ? 'blue' : 'inherit' }}
                  />{' '}
                  {thread.upVotesBy.length} Like
                </button>
                <button
                  type="button"
                  className="threads-page__item-vote-button"
                  onClick={() =>
                    handleVote(thread.id, 'down', thread.hasVotedDown)
                  }
                >
                  <FaRegThumbsDown
                    style={{ color: thread.hasVotedDown ? 'red' : 'inherit' }}
                  />{' '}
                  {thread.downVotesBy.length} Dislike
                </button>
                <p className="threads-page__item-comments">
                  <FaRegCommentAlt /> {thread.totalComments} Komentar
                </p>
                <span className="threads-page__item-owner">
                  Dibuat oleh <b>{thread.owner.name}</b>
                </span>
                <span className="threads-page__item-created">
                  Dibuat pada:{' '}
                  {new Date(thread.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* Menampilkan "Tambah Thread" jika sudah login */}
        {authUser && (
          <div className="threads-page__add-thread">
            <Link to="/add-thread" className="threads-page__add-thread-button">
              <FaPlus />
            </Link>
          </div>
        )}
      </main>
    </section>
  );
};

export default ThreadsPage;
