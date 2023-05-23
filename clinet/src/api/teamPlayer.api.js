import {
  setplayersDataSuccess,
  setplayersDataFailed,
} from "../store/players/players.action";
const getTeamPlayersApi = async (teamId, dispatch) => {
  const url = `https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${teamId}/players`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5fe94861c7msh0a9ce1add0bb8bdp1771b1jsn5675709465d7",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  //
  //6b05ecea36msh09c96e711c866dep1b42b0jsn14d8613e7884
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = await result.player;
    dispatch(setplayersDataSuccess(data));
  } catch (error) {
    dispatch(setplayersDataFailed(error));
  }
};

export default getTeamPlayersApi;
