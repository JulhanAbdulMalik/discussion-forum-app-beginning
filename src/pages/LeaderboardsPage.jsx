import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateLeaderboard } from '../states/leaderboard/action';

const LeaderboardsPage = () => {
  const leaderboard = useSelector((states) => states.leaderboard);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboard());
  }, [dispatch]);

  return (
    <section className="leaderboards-page">
      <div className="leaderboards-page__container">
        <header className="leaderboards-page__header">
          <h2>🏆 Klasemen Pengguna Aktif</h2>
          <p>Pengguna dengan skor tertinggi berdasarkan kontribusi di forum.</p>
        </header>

        <main className="leaderboards-page__content">
          <div className="leaderboards-page__list-header">
            <p>Pengguna</p>
            <p>Skor</p>
          </div>

          <div className="leaderboards-page__list">
            {leaderboard.map((item, index) => (
              <div key={item.user.id} className="leaderboards-page__item">
                <div className="leaderboards-page__user-info">
                  <span className="leaderboards-page__user-rank">
                    {index + 1}
                  </span>
                  <img
                    className="leaderboards-page__user-avatar"
                    src={item.user.avatar}
                    alt={`Avatar of ${item.user.name}`}
                  />
                  <p className="leaderboards-page__user-name">
                    {item.user.name}
                  </p>{' '}
                </div>
                <p className="leaderboards-page__user-score">{item.score}</p>{' '}
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
