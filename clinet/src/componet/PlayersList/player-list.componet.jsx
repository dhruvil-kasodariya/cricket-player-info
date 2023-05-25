import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPlayersData } from "../../store/players/players.selector";
import { setplayerDataSuccess } from "../../store/players/players.action";
import { selectTeamData } from "../../store/teams/teams.selector";
import getTeamPlayersApi from "../../api/teamPlayer.api";
import CardView from "../CardView/card-view.componet";
import NavBar from "../navBar/navBar.componet";
import {
  selectPlayerSearchString,
  selectPlayerFilterOption,
} from "../../store/players/players.selector";

const PlayerList = () => {
  // const [data, setData] = useState([]);
  const [playerSearchFilterData, setPlayerSearchFilterData] = useState([]);
  const [playerOptionFilterData, setPlayerOptionFilterData] = useState([]);
  const searchPlayerString = useSelector(selectPlayerSearchString);
  const optionPlayer = useSelector(selectPlayerFilterOption);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const team = useSelector(selectTeamData);
  const data = useSelector(selectPlayersData);

  // const data = dataSelect.filter((player) => player.imageId !== 174146);
  useEffect(() => {
    getTeamPlayersApi(team.teamId, dispatch);
  }, []);

  useEffect(() => {
    if (data.length) {
      const filterData = data.filter((player) =>
        player.name.includes(searchPlayerString)
      );
      setPlayerSearchFilterData(filterData);
    }
  }, [searchPlayerString, data]);

  useEffect(() => {
    if (playerSearchFilterData.length) {
      if (!optionPlayer) {
        setPlayerOptionFilterData(playerSearchFilterData);
      } else {
        const optionData = playerSearchFilterData.filter((player) =>
          player.role.match(optionPlayer.label)
        );
        setPlayerOptionFilterData(optionData);
      }
    }
  }, [optionPlayer, playerSearchFilterData]);

  const handleClickPlayer = (player) => {
    dispatch(setplayerDataSuccess(player));
    navigate("/playerinfo");
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {playerOptionFilterData.map((player) => (
          <div key={player.id} onClick={() => handleClickPlayer(player)}>
            <CardView player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;

// const players = indiaTeam.filter((player) => player.imageId !== 174146);
// setData(players);
