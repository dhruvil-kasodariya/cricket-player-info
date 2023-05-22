import { loginUrl } from "./apiUrl.api";
import { signInSuccess, signInFailed } from "../store/user/user.action";

export const loginFetchApi = async (userData, dispatch) => {
  const data = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(userData),
  })
    .then(async (response) => {
      let temp = await response.json();
      if (response.status === 200) {
        dispatch(signInSuccess(temp));
        return temp;
      }
      dispatch(signInFailed(temp));
      return false;
    })
    .catch((e) => {
      console.log(e);
    });
  // console.log(await data.json());
  return data;
};
