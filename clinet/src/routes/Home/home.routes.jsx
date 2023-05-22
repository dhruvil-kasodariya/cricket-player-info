import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectTeamsData } from "../../store/teams/teams.selector";
import { useNavigate } from "react-router-dom";
import { teamNameFetchApi } from "../../api/teamNames.api";
import TeamsPreview from "../../componet/TeamsPreview/teams-preview.componet.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const teamsData = useSelector(selectTeamsData);
  const navogate = useNavigate();

  useEffect(() => {
    teamNameFetchApi(dispatch);
  }, [dispatch]);

  return <TeamsPreview teamsData={teamsData} />;
};

export default Home;
