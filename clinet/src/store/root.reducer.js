import { combineReducers } from "redux";
import { userReducer } from "./user/user.resucer";
import { teamsReducer } from "./teams/teams.reducer";

export const rootReducers = combineReducers({
  user: userReducer,
  teamsDataReducer: teamsReducer,
});
