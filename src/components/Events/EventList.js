import { useState } from "react";
import EventCard from "./EventCard";
import EventsFilter from "../Event Filter/EventsFilter";

import "./EventList.css";

const EventList = (props) => {
  const [filteredEvents, setFilteredEvents] = useState(props.events);

  let defaultDistance = localStorage.getItem("filterDistance");
  if (!defaultDistance) defaultDistance = "15";

  const filterHandler = (maxDistance) => {
    localStorage.setItem("filterDistance", maxDistance);
    defaultDistance = setFilteredEvents(
      props.events.filter(
        (event) => Number(event.distance) <= Number(maxDistance)
      )
    );
  };

  return (
    <ul className="event-list">
      <EventsFilter
        unit="km"
        step="1"
        min="1"
        max="100"
        value={defaultDistance}
        onFilter={filterHandler}
      />
      {filteredEvents.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          timeSpan={event.timeSpan}
          location={event.location}
          time={event.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
