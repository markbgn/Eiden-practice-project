import React from "react";
import "./NavPanel.css";
import NavElement from "./NavElement";

const NavPanel = (props) => {
  const navButtonHandler = (event) => {
    props.buttonClicked(event.target.innerText);
  };

  return (
    <div className="navbar" onClick={navButtonHandler}>
      <NavElement text={"Account"} />
      <NavElement text={"Events"} />
      <NavElement text={"Coupons"} />
    </div>
  );
};

export default NavPanel;
