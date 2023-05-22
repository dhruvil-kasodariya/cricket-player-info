import { styled } from "styled-components";

export const TeamsPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TeamsPreviewCard = styled.div`
  flex: 0 0 23%;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    margin-bottom: 5px;
  }
`;
//backgroundImage: `url(${team.imageUrl})`
