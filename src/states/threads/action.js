// import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

// Function Thunks

function asyncPopulateThreads() {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    // dispatch(showLoading());
    // Optimistic update
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      // Revert if API call fails
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
    // dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    // dispatch(showLoading());
    // Optimistic update
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      // Revert if API call fails
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
    // dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    // dispatch(showLoading());
    // Optimistic update
    dispatch(
      neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id })
    );
    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      // Revert if API call fails
      dispatch(
        neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
    // dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncPopulateThreads,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
