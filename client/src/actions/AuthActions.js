import { authLoginAxios } from "../API/memesAPI";

export const AUTH_IS_START = "AUTH_IS_START";
export const AUTH_IS_COMPLETE = "AUTH_IS_COMPLETE";
export const AUTH_IS_FAIL = "AUTH_IS_FAIL";
export const IS_LOGIN = "IS_LOGIN"

export const authIsStart = () => {
  console.log('authIsStart');
  return {
    type: AUTH_IS_START,
  };
};

export const authIsComplete = (data) => {
  return {
    type: AUTH_IS_COMPLETE,
    payload: data,
  };
};

export const authIsFail = (error) => {
  return {
    type: AUTH_IS_FAIL,
    payload: error,
  };
};

export const login = (data) => {
  localStorage.setItem(
    'userData',
    JSON.stringify({
      userId: data.userId,
      token: data.token,
      email: data.email,
    })
  );
  return {
    type: IS_LOGIN,
  }
}

export const authLogin = (credentials) => {
  console.log('authLogin credentials', credentials);
  return async function(dispatch) {
    dispatch(authIsStart());
    await authLoginAxios(credentials)
      .then((data) => dispatch(authIsComplete(data)))
      .then((data) => dispatch(login(data)))
      .catch((error) => dispatch(authIsFail(error)));
  };
}
