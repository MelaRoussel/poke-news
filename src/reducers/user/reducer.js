import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';

const initialState = {
  user: { name: '' },
};
const initialAction = () => {};

export default (state = initialState, action = initialAction) => {
  const { type, data } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, user: { name: data.username }, loading: false, error: '' };
    case LOGIN_ERROR:
      return { ...state, error: data, loading: false };
    default:
      return state;
  }
};
