import React from "react";
import "./TransitionCard.css";

function TransitionCard(props) {
  const classes = "fade-in-div " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default TransitionCard;
