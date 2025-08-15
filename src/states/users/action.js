// import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

// Function Thunks

function asyncPopulateUsers() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
      // re-throw the error to be caught by the component if needed
      throw error;
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncPopulateUsers,
  asyncRegisterUser,
};
