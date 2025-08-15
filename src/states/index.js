import { configureStore } from '@reduxjs/toolkit';

// reducers
import { threadsReducer } from './threads/reducer';
import { threadDetailReducer } from './threadDetail/reducer';
import { authUserReducer } from './authUser/reducer';
import { usersReducer } from './users/reducer';
import { isPreloadReducer } from './isPreload/reducer';
import { leaderboardReducer } from './leaderboard/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    authUser: authUserReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
    leaderboard: leaderboardReducer,
  },
});

export default store;
