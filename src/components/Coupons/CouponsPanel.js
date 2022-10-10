import React from "react";
import "../Events/EventsPanel.css";
import CouponList from "./CouponList";

const dummyCoupons = [
  {
    id: "c1",
    title: "20%-os kedvezmény kupon",
    provider: "Decathlon",
    price: "220",
  },
  {
    id: "c2",
    title: "Ajándék cappucchino",
    provider: "Zoska Kávézó",
    price: "35",
  },
  {
    id: "c3",
    title: "10%-os kedvezmény kupon",
    provider: "Wolt",
    price: "99",
  },
  {
    id: "c4",
    title: "5%-os kedvezmény kupon",
    provider: "Intersport",
    price: "120",
  },
];

const CouponsPanel = () => {
  return (
    <div className="events">
      <CouponList coupons={dummyCoupons}></CouponList>
    </div>
  );
};

export default CouponsPanel;
