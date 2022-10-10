import React from "react";
import "./EventCard.css";

const EventCard = (props) => {
  return (
    <li>
      <div className="event-item">
        <div className="event-item_description">
          <div className="event-item_title">{props.title}</div>
          <div>{props.location}</div>
          <div>{props.timeSpan}</div>
          <div className="event-item_date">{"Date"}</div>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
