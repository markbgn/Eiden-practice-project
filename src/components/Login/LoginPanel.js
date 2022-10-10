import React from "react";

import "./LoginPanel.css";

const LoginPanel = (props) => {
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    props.onLogin();
  };

  return (
    <div className="login">
      <p>Welcome back, Márk!</p>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default LoginPanel;
