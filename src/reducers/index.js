import { combineReducers } from "redux";
import githubAuth from "./githubAuth";
import aboutReducer from "./aboutReducer";

export default combineReducers({
  githubAuth,
  aboutReducer,
});
