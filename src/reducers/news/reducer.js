import { GET_NEWS_ERROR, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from './actions';

const initialState = {
  news: {},
};

const initialAction = () => {};

export default (state = initialState, action = initialAction) => {
  const { type, data } = action;

  switch (type) {
    case GET_NEWS_REQUEST:
      return state;
    case GET_NEWS_SUCCESS:
      return { ...state, news: data };
    case GET_NEWS_ERROR:
      return { ...state, error: data };
    default:
      return state;
  }
};
