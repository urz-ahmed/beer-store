import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "../Alert";
const Layout = () => {
  const [Mode, setMode] = useState("light"); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#102456";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f0f0f0";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <div className="wrapper">
      <div className={`App ${Mode === "dark" ? "dark-mode" : ""}`}>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} className="navbar"/>
        <div className="my-3 outlet">
          <Alert alert={alert} />
          <Outlet/>
        </div>
        <Footer Mode={Mode}  className="footer"/>
      </div>
    </div>
  );
};

export default Layout;
