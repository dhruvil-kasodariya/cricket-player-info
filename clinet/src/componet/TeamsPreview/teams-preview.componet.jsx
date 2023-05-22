import { TeamsPreviewContainer, TeamsPreviewCard } from "./teams-preview.style";
const TeamsPreview = ({ teamsData }) => {
  return (
    <TeamsPreviewContainer>
      {teamsData.map((team) => (
        <TeamsPreviewCard key={team._id}>
          <span>{team.teamSName}</span>
          <h5>{team.teamName}</h5>
        </TeamsPreviewCard>
      ))}
    </TeamsPreviewContainer>
  );
};

export default TeamsPreview;
