import { React, Fragment } from "react";
import DistanceSlider from "./DistanceSlider";

import "./FilterForm.css";

const FilterForm = (props) => {
  let maxDistance = 15;
  const maxDistanceHandler = (distance) => {
    maxDistance = distance;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onFilter(maxDistance);
  };

  return (
    <form onSubmit={submitHandler}>
      <DistanceSlider
        unit={props.unit}
        step={props.step}
        min={props.min}
        max={props.max}
        value={props.value}
        setMaxDistance={maxDistanceHandler}
      />
      <button onClick={props.onCancel}>Cancel</button>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;
