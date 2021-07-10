import { login } from '../api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  data: error,
});

export const connectUser = ({ name, password }) => {
  return (dispatch) => {
    dispatch(loginRequest());
    login({ name, password })
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginError(error.message));
      });
  };
};
