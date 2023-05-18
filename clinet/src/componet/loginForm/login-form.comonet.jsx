import { useState } from "react";
import FormInput from "../FormInput/form-input.componet";
import { toast } from "react-toastify";
const intialUserData = {
  useremail: "",
  password: "",
};
const LoginForm = () => {
  const [userData, setUserData] = useState(intialUserData);
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.useremail || !userData.password) {
      if (!userData.useremail) {
        toast.error("Pleace,Enter Name", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
      if (!userData.password) {
        toast.error("Pleace,Enter Email", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    } else {
      console.log(userData);
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          labelName="UserEmail"
          name="useremail"
          onChange={handleChange}
        />
        <FormInput
          type="password"
          labelName="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="sumbit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
