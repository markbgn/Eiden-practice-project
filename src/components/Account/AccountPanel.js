import React, { Fragment } from "react";
import "./AccountPanel.css";
import ProfilePanel from "./ProfilePanel";
import BalancePanel from "./BalancePanel";
import MyEventsPanel from "./MyEventsPanel";

const AccountPanel = () => {
  return (
    <div className="account">
      <ProfilePanel />
      <BalancePanel />
      <MyEventsPanel />
    </div>
  );
};

export default AccountPanel;
