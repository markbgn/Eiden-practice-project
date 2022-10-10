import React from "react";
import "../Events/EventCard.css";

const CouponCard = (props) => {
  return (
    <li>
      <div className="event-item">
        <div className="event-item_description">
          <div className="event-item_title">{props.title}</div>
          <div>{props.provider}</div>
          <div>{props.price}€</div>
        </div>
      </div>
    </li>
  );
};

export default CouponCard;
