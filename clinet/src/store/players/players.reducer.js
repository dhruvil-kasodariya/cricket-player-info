import { PLAYERS_ACTION_TYPE } from "./players.type";

const INITIAL_STATE = {
  playersData: [],
  playerData: {},
  playerInfo: {},
  playerBattingState: {},
  playerBowlingState: {},
  error: null,
};

export const playersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_SUCCESS:
      return {
        ...state,
        playersData: payload,
      };
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_SUCCESS:
      return {
        ...state,
        playerData: payload,
      };
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_INFO_DATA_SUCCESS:
      return {
        ...state,
        playerInfo: payload,
      };
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_BATTING_STATE_DATA_SUCCESS:
      return {
        ...state,
        playerBattingState: payload,
      };
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_BOWLING_STATE_DATA_SUCCESS:
      return {
        ...state,
        playerBowlingState: payload,
      };
    case PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_FAILED:
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_FAILED:
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_BATTING_STATE_DATA_FAILED:
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_BOWLING_STATE_DATA_FAILED:
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_INFO_DATA_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
