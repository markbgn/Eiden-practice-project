import React from "react";
import "./EventsPanel.css";
import EventList from "./EventList";

const dummyEvents = [
  {
    id: "e1",
    title: "Ebsegély kutyasétáltatás",
    timeSpan: "10:00-14:00",
    location: "Kiskunlacháza",
    distance: "60",
    date: new Date(2022, 10, 16),
  },
  {
    id: "e2",
    title: "Faültetés",
    timeSpan: "09:00-17:00",
    location: "Kopaszi-gát",
    distance: "4",
    date: new Date(2022, 3, 14),
  },
  {
    id: "e3",
    title: "Dunapart szemétszedés",
    timeSpan: "11:00-15:00",
    location: "Szentendre",
    distance: "18",
    date: new Date(2022, 8, 26),
  },
  {
    id: "e4",
    title: "Tüzifaosztás",
    timeSpan: "11:30-16:00",
    location: "Citadella",
    distance: "6",
    date: new Date(2022, 11, 30),
  },
];

const EventsPanel = () => {
  return (
    <div className="events">
      <EventList events={dummyEvents}></EventList>
    </div>
  );
};

export default EventsPanel;
