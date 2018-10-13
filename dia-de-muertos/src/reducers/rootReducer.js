import {combineReducers} from "redux";
import users from "./userReducer";
import authState from "./authReducer";
import modalState from "./modalReducer"

const rootReducer = combineReducers({
    users,
    authState,
    modalState
  });
  
  export default rootReducer;