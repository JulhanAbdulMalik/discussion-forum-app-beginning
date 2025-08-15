import { hideLoading, showLoading } from 'redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

// Function Thunks

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      // Coba untuk mendapatkan profil pengguna yang sudah login
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));

      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Jika gagal (misalnya token tidak valid), set authUser menjadi null
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // Apapun hasilnya, set isPreload menjadi false untuk menandakan proses selesai
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
