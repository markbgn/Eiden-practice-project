import React from "react";
import BalancePanel from "./BalancePanel";

import "./ProfilePanel.css";

const ProfilePanel = () => {
  return (
    <div className="profilepanel">
      <img src={require("./dumdum.png")} alt="Avatar" className="profileimg" />
      <h2>Bogan Márk</h2>
    </div>
  );
};

export default ProfilePanel;
