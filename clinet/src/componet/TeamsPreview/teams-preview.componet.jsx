import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTeamDataSuccess } from "../../store/teams/teams.action";
import { TeamsPreviewContainer, TeamsPreviewCard } from "./teams-preview.style";
const TeamsPreview = ({ teamsData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (team) => {
    dispatch(setTeamDataSuccess(team));
    navigate(`/teams/${team.teamId}`);
  };
  return (
    <TeamsPreviewContainer>
      {teamsData.map((team) => (
        <TeamsPreviewCard
          key={team._id}
          imgUrl={team.imageUrl}
          onClick={() => handleClick(team)}
        >
          <span>{team.teamSName}</span>
          <h5>{team.teamName}</h5>
        </TeamsPreviewCard>
      ))}
    </TeamsPreviewContainer>
  );
};

export default TeamsPreview;
