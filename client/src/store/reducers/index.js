import { combineReducers } from "redux";
import users from "./users";
import categoryReducer from "./category";
import roleReducer from "./roles";
import userGroupReducer from "./userGroups";

const rootReducer = combineReducers({
  users,
  category: categoryReducer,
  roles: roleReducer,
  userGroups: userGroupReducer, 
  // add more here.
});

export default rootReducer;
