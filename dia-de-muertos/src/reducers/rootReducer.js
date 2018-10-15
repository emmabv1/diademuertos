import {combineReducers} from "redux";
import users from "./userReducer";
import authState from "./authReducer";
import items from "./itemReducer"

const rootReducer = combineReducers({
    users,
    authState,
    items
  });
  
  export default rootReducer;