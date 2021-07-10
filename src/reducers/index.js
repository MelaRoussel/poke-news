import newsReducer from './news/reducer';
import userReducer from './user/reducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  newsReducer,
  userReducer,
});

export default appReducer;
