import React from 'react';

const LeaderboardsPage = () => {
  const leaderboardData = [
    {
      id: 'user-1',
      name: 'Julhan',
      score: 55,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 'user-2',
      name: 'Andini',
      score: 48,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 'user-3',
      name: 'Bagas',
      score: 42,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 'user-4',
      name: 'Citra',
      score: 35,
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 'user-5',
      name: 'Dewi',
      score: 21,
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  ];

  return (
    <section className="leaderboards-page">
      <div className="leaderboards-page__container">
        <header className="leaderboards-page__header">
          <h2>Klasemen Pengguna Aktif</h2>
          <p>Pengguna dengan skor tertinggi berdasarkan kontribusi di forum.</p>
        </header>

        <main className="leaderboards-page__content">
          <div className="leaderboards-page__list-header">
            <p>Pengguna</p>
            <p>Skor</p>
          </div>

          <div className="leaderboards-page__list">
            {leaderboardData.map((user, index) => (
              <div key={user.id} className="leaderboards-page__item">
                <div className="leaderboards-page__user-info">
                  <span className="leaderboards-page__user-rank">
                    {index + 1}
                  </span>
                  <img
                    className="leaderboards-page__user-avatar"
                    src={user.avatar}
                    alt={`Avatar of ${user.name}`}
                  />
                  <p className="leaderboards-page__user-name">{user.name}</p>
                </div>
                <p className="leaderboards-page__user-score">{user.score}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
