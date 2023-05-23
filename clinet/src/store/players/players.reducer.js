import { PLAYERS_ACTION_TYPE } from "./players.type";

const INITIAL_STATE = {
  playersData: [],
  playerData: {},
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
    case PLAYERS_ACTION_TYPE.FATCH_PLAYERS_DATA_FAILED:
    case PLAYERS_ACTION_TYPE.FATCH_PLAYER_DATA_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
