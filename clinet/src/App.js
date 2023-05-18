import Login from "./routes/Login/login.routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
