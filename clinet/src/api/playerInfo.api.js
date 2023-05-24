import axios from "axios";
import {
  setplayerBattingStateDataSuccess,
  setplayerBowlingStateDataSuccess,
  setplayertInfoDataSuccess,
  setplayertInfoDataFailed,
  setplayertBattingStateDataFailed,
  setplayertBowlingStateDataFailed,
} from "../store/players/players.action";
export const key1 = "5fe94861c7msh0a9ce1add0bb8bdp1771b1jsn5675709465d7";
export const key2 = "6b05ecea36msh09c96e711c866dep1b42b0jsn14d8613e7884";
export const key3 = "a5b2a2e8f0mshae3ff1fae75dc84p115ebejsn89dab5e8f5ca";

export const getPlayerInfoApi = async (id, dispatch) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`,
    headers: {
      "X-RapidAPI-Key": key3,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const temp = response.data;
    dispatch(setplayertInfoDataSuccess(temp));
  } catch (error) {
    dispatch(setplayertInfoDataFailed(error));
    console.error(error);
  }
};

//bating
export const getPlayerBattingStateApi = async (id, dispatch) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/batting`,
    headers: {
      "X-RapidAPI-Key": key3,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const temp = response.data;
    dispatch(setplayerBattingStateDataSuccess(temp));
  } catch (error) {
    dispatch(setplayertBattingStateDataFailed(error));
    console.error(error);
  }
};

//bowing

export const getPlayerBowlingStateApi = async (id, dispatch) => {
  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/bowling`,
    headers: {
      "X-RapidAPI-Key": key3,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const temp = response.data;
    dispatch(setplayerBowlingStateDataSuccess(temp));
  } catch (error) {
    dispatch(setplayertBowlingStateDataFailed(error));
    console.error(error);
  }
};
