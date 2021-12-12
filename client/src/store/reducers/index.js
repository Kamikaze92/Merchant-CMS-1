import { combineReducers } from "redux";
import users from "./users";
import categoryReducer from "./category";
const rootReducer = combineReducers({
  users,
  category: categoryReducer,
  // add more here.
});

export default rootReducer;
