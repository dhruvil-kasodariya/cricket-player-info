import { combineReducers } from "redux";
import { userReducer } from "./user/user.resucer";

export const rootReducers = combineReducers({
  user: userReducer,
});
