import { useState, Fragment } from "react";
import DistanceSlider from "./DistanceSlider";
import FilterForm from "./FilterForm";

import "./EventsFilter.css";

const EventsFilter = (props) => {
  // const [maxDistance, setMaxDistance] = useState("10");
  const [isAdjusting, setIsAdjusting] = useState(false);

  const filterEventsHandler = (distance) => {
    // setMaxDistance(distance);
    props.onFilter(distance);
    setIsAdjusting(false);
  };

  const openFilterFormHandler = () => {
    setIsAdjusting(true);
  };

  const cloeFilterFormHandler = () => {
    setIsAdjusting(false);
  };

  return (
    <div className="filter">
      {!isAdjusting && (
        <button onClick={openFilterFormHandler}>Filter &#xFFEC;</button>
      )}
      {isAdjusting && (
        <Fragment>
          <button onClick={cloeFilterFormHandler}>Filter&#xFFEA;</button>
          <FilterForm
            unit={props.unit}
            step={props.step}
            min={props.min}
            max={props.max}
            value={props.value}
            onCancel={cloeFilterFormHandler}
            onFilter={filterEventsHandler}
          />
        </Fragment>
      )}
    </div>
  );
};

export default EventsFilter;
