import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPlayersData } from "../../store/players/players.selector";
import { setplayerDataSuccess } from "../../store/players/players.action";
import { selectTeamData } from "../../store/teams/teams.selector";
import getTeamPlayersApi from "../../api/teamPlayer.api";
import CardView from "../CardView/card-view.componet";

const PlayerList = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const team = useSelector(selectTeamData);
  const dataSelect = useSelector(selectPlayersData);

  const data = dataSelect.filter((player) => player.imageId !== 174146);

  useEffect(() => {
    getTeamPlayersApi(team.teamId, dispatch);
  }, []);

  const handleClickPlayer = (player) => {
    dispatch(setplayerDataSuccess(player));
    navigate("/playerinfo");
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {data.map((player) => (
        <div key={player.id} onClick={() => handleClickPlayer(player)}>
          <CardView player={player} />
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
// const players = indiaTeam.filter((player) => player.imageId !== 174146);
// setData(players);
// const fetchData = async () => {
//   const datas = await getTeamPlayersApi(teamId,dispatch);
//   const players = datas.filter((player) => player.imageId !== 174146);
//   setData(players);
// };
//  fetchData();
