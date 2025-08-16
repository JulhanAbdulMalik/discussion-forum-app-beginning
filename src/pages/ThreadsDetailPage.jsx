import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  asyncAddComment,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from '../states/threadDetail/action';

const ThreadsDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const threadDetail = useSelector((states) => states.threadDetail);
  const authUser = useSelector((states) => states.authUser);

  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));

    return () => {
      dispatch(clearThreadDetailActionCreator());
    };
  }, [id, dispatch]);

  // Fungsi untuk menambah komentar
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (!authUser) {
      alert('Anda harus login untuk berkomentar!');
      navigate('/login');
      return;
    }
    dispatch(asyncAddComment({ threadId: id, content: commentContent }));
    setCommentContent(''); // Mengosongkan textarea setelah submit
  };

  // Fungsi terpadu untuk menangani semua jenis vote
  const handleVote = (voteType, entity, entityId = null) => {
    if (!authUser) {
      alert('Anda harus login untuk memberikan vote!');
      navigate('/login');
      return;
    }

    const hasVotedUp = entity.upVotesBy.includes(authUser.id);
    const hasVotedDown = entity.downVotesBy.includes(authUser.id);
    const isComment = !!entityId; // Cek apakah ini vote untuk comment

    if (voteType === 'up') {
      if (hasVotedUp)
        dispatch(
          isComment
            ? asyncNeutralizeVoteComment(entityId)
            : asyncNeutralizeVoteThreadDetail()
        );
      else
        dispatch(
          isComment ? asyncUpVoteComment(entityId) : asyncUpVoteThreadDetail()
        );
    } else if (voteType === 'down') {
      if (hasVotedDown)
        dispatch(
          isComment
            ? asyncNeutralizeVoteComment(entityId)
            : asyncNeutralizeVoteThreadDetail()
        );
      else
        dispatch(
          isComment
            ? asyncDownVoteComment(entityId)
            : asyncDownVoteThreadDetail()
        );
    }
  };

  // Tampilkan loading jika data belum siap
  if (!threadDetail) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Sedang memuat data...</p>
      </div>
    );
  }

  const hasVotedUpThread = authUser
    ? threadDetail.upVotesBy.includes(authUser.id)
    : false;
  const hasVotedDownThread = authUser
    ? threadDetail.downVotesBy.includes(authUser.id)
    : false;

  return (
    <section className="threads-detail-page">
      {/* Konten Utama Thread */}
      <article className="thread-detail">
        <header className="thread-detail__header">
          <span className="thread-detail__category">
            #{threadDetail.category}
          </span>
          <h1 className="thread-detail__title">{threadDetail.title}</h1>
          <div className="thread-detail__owner-info">
            <img
              src={threadDetail.owner.avatar}
              alt={threadDetail.owner.name}
            />
            <span>
              {threadDetail.owner.name} •{' '}
              {new Date(threadDetail.createdAt).toLocaleDateString('id-ID')}
            </span>
          </div>
        </header>
        <div
          className="thread-detail__body"
          dangerouslySetInnerHTML={{ __html: threadDetail.body }}
        />
        <footer className="thread-detail__footer">
          <button
            type="button"
            className="vote-button"
            onClick={() => handleVote('up', threadDetail)}
          >
            <FaRegThumbsUp
              style={{ color: hasVotedUpThread ? 'blue' : 'inherit' }}
            />{' '}
            {threadDetail.upVotesBy.length}
          </button>
          <button
            type="button"
            className="vote-button"
            onClick={() => handleVote('down', threadDetail)}
          >
            <FaRegThumbsDown
              style={{ color: hasVotedDownThread ? 'red' : 'inherit' }}
            />{' '}
            {threadDetail.downVotesBy.length}
          </button>
        </footer>
      </article>

      {/* Bagian Komentar */}
      <div className="thread-comments">
        {authUser ? (
          <>
            <h2 className="thread-comments__title">Beri Komentar</h2>
            <form
              className="thread-comments__form"
              onSubmit={handleCommentSubmit}
            >
              <textarea
                placeholder="Tulis komentar Anda di sini..."
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
              />
              <button type="submit">Kirim Komentar</button>
            </form>
          </>
        ) : (
          <p className="login-prompt-text">
            <Link to="/login">Login</Link> untuk memberi komentar.
          </p>
        )}
        <div className="thread-comments__list-header">
          <h3>Komentar ({threadDetail.comments.length})</h3>
        </div>
        <div className="thread-comments__list">
          {threadDetail.comments.map((comment) => {
            const hasVotedUpComment = authUser
              ? comment.upVotesBy.includes(authUser.id)
              : false;
            const hasVotedDownComment = authUser
              ? comment.downVotesBy.includes(authUser.id)
              : false;
            return (
              <div key={comment.id} className="comment-item">
                <header className="comment-item__header">
                  <div className="comment-item__owner-info">
                    <img src={comment.owner.avatar} alt={comment.owner.name} />
                    <b>{comment.owner.name}</b>
                  </div>
                  <span>
                    {new Date(comment.createdAt).toLocaleDateString('id-ID')}
                  </span>
                </header>
                <div
                  className="comment-item__body"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
                <footer className="comment-item__footer">
                  <button
                    type="button"
                    className="vote-button"
                    onClick={() => handleVote('up', comment, comment.id)}
                  >
                    <FaRegThumbsUp
                      style={{ color: hasVotedUpComment ? 'blue' : 'inherit' }}
                    />{' '}
                    {comment.upVotesBy.length}
                  </button>
                  <button
                    type="button"
                    className="vote-button"
                    onClick={() => handleVote('down', comment, comment.id)}
                  >
                    <FaRegThumbsDown
                      style={{ color: hasVotedDownComment ? 'red' : 'inherit' }}
                    />{' '}
                    {comment.downVotesBy.length}
                  </button>
                </footer>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreadsDetailPage;
