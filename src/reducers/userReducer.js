import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './userActions';

const initialState = {
  user: { name: '' },
};
const initialAction = () => {};

export default (state = initialState, action = initialAction) => {
  const { type, data } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return { ...state, user: { name: data.username } };
    case LOGIN_ERROR:
      return { ...state, error: data };
    default:
      return state;
  }
};
