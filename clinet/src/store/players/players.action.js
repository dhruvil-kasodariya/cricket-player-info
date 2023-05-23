import { PLAYERS_ACTION_TYPE } from "./players.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setplayersDataSuccess = (playersData) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_SUCCESS, playersData);

export const setplayersDataFailed = (error) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_FAILED, error);

export const setplayerDataSuccess = (playerData) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_SUCCESS, playerData);

export const setplayerDataFailed = (error) =>
  createAction(PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_FAILED, error);
