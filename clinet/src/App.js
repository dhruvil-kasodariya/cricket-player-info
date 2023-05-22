import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/Auth/auth.routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./routes/Home/home.routes";

function App() {
  return (
    <Fragment>
      <Routes>
        {["/", "/login", "/registration"].map((path, index) => (
          <Route path={path} element={<Auth />} key={index} />
        ))}
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
