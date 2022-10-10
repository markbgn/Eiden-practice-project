import { Fragment } from "react";
import EventCard from "../Events/EventCard";

import "./MyEventsPanel.css";

const myDummyEvents = [
  {
    id: "m1",
    title: "Tüzifaosztás",
    timeSpan: "11:30-16:00",
    location: "Citadella",
    distance: "6",
    date: new Date(2022, 11, 30),
  },
];

const MyEventsPanel = (props) => {
  return (
    <Fragment>
      <div className="hr-lines">
        <p>My Events</p>
      </div>
      {/* {myDummyEvents.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          timeSpan={event.timeSpan}
          location={event.location}
          time={event.date}
        />
      ))} */}
    </Fragment>
  );
};

export default MyEventsPanel;
