import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { teamNameFetchApi } from "../../api/teamNames.api";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  const navogate = useNavigate();
  const navigation = () => {
    navogate("/");
  };
  teamNameFetchApi();
  return (
    <div>
      <button onClick={navigation}></button>
    </div>
  );
};

export default Home;
