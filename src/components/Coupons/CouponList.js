import { useState } from "react";
import CouponCard from "./CouponCard";
import EventsFilter from "../Event Filter/EventsFilter";

import "../Events/EventList.css";

const CouponList = (props) => {
  const [filteredCoupons, setFilteredCoupons] = useState(props.coupons);

  let defaultPrice = localStorage.getItem("filterPrice");
  if (!defaultPrice) defaultPrice = "250";

  const filterHandler = (maxPrice) => {
    console.log("Filterprices");
    localStorage.setItem("filterPrice", maxPrice);
    defaultPrice = setFilteredCoupons(
      props.coupons.filter((coupon) => Number(coupon.price) <= Number(maxPrice))
    );
  };

  return (
    <ul className="event-list">
      <EventsFilter
        unit="€"
        step="10"
        min="10"
        max="1000"
        value={defaultPrice}
        onFilter={filterHandler}
      />
      {filteredCoupons.map((coupon) => (
        <CouponCard
          key={coupon.id}
          title={coupon.title}
          provider={coupon.provider}
          price={coupon.price}
        />
      ))}
    </ul>
  );
};

export default CouponList;
