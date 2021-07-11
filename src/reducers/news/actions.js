import { getAllNewArticles } from '../../api';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';

export const getNews = () => ({
  type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (data) => ({
  type: GET_NEWS_SUCCESS,
  data,
});

export const getNewsError = (error) => ({
  type: GET_NEWS_ERROR,
  data: error,
});

export const getNewsFromAPI = () => {
  return (dispatch) => {
    dispatch(getNews());
    getAllNewArticles()
      .then((response) => {
        dispatch(getNewsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getNewsError(error.message));
      });
  };
};
