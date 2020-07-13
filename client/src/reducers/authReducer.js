import {
  AUTH_IS_COMPLETE,
  AUTH_IS_START,
  AUTH_IS_FAIL,
  IS_LOGIN,
} from '../actions/AuthActions';

const initialState = {
  authData: {},
  authIsStart: false,
  authIsComplete: false,
  authIsFail: null,
  isLogin: false
};

export default function reducer(state = initialState, action) {
  console.log("State: ", state);

  switch (action.type) {
    case AUTH_IS_START: {
      return { ...state, authIsStart: true };
    }

    case AUTH_IS_COMPLETE: {
      return {
        ...state,
        authIsStart: false,
        authIsComplete: true,
        authData: action.payload,
      };
    }

    case AUTH_IS_FAIL: {
      return {
        ...state,
        authIsStart: false,
        authIsComplete: false,
        authIsFail: action.error,
      };
    }

    case IS_LOGIN: {
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: state.authData.id,
          token: state.authData.jwtToken,
          email: state.authData.userEmail,
        })
      );
      return {
        ...state,
        isLogin: true,
      };
    }

    default:
      return state;
  }
}
