import { useState } from "react";
import "./DistanceSlider.css";

const DistanceSlider = (props) => {
  // the width of the box
  const [width, setWidth] = useState(props.value);

  const changeWidth = (event) => {
    setWidth(event.target.value);
    props.setMaxDistance(event.target.value);
  };
  return (
    <div className="container">
      <input
        type="range"
        onChange={changeWidth}
        min={props.min}
        max={props.max}
        step={props.step}
        value={width}
        className="slider"
      ></input>
      <label
        style={{ color: "rgb(70, 85, 142)" }}
      >{`${width} ${props.unit}`}</label>
    </div>
  );
};

export default DistanceSlider;
