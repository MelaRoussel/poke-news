import newsReducer from './newsReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  newsReducer,
  userReducer,
});

export default appReducer;
