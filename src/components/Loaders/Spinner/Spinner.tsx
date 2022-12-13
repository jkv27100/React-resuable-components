import "./style.css";

import SpinnerProps from "../../../interfaces/SpinnerProps";

const Spinner = ({ width, height }: SpinnerProps) => {
  return (
    <div
      className="spinner"
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
};

export default Spinner;
