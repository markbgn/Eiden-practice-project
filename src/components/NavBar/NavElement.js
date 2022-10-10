import React from "react";
import "./NavElement.css";
const NavElement = (props) => {
  return (
    <>
      <button>{props.text}</button>
    </>
  );
};

export default NavElement;
