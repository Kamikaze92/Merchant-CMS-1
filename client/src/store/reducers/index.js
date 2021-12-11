import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({
  users,
  // add more here.
});

export default rootReducer;