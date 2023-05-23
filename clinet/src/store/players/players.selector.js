import { createSelector } from "reselect";
export const selectPlayersDataObj = (state) => state.playersDataReducer;

export const selectPlayersData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playersData
);

export const selectPlayerData = createSelector(
  [selectPlayersDataObj],
  (playersDataObjSlice) => playersDataObjSlice.playerData
);
