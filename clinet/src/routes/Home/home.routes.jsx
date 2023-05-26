import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTeamsData } from "../../store/teams/teams.selector";
import { teamNameFetchApi } from "../../api/teamNames.api";
import TeamsPreview from "../../componet/TeamsPreview/teams-preview.componet.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const teamsData = useSelector(selectTeamsData);

  useEffect(() => {
    teamNameFetchApi(dispatch);
  }, [dispatch]);

  return (
    <Fragment>
      <TeamsPreview teamsData={teamsData} />
    </Fragment>
  );
};

export default Home;
