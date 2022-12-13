import "./style.css";
import ButtonProps from "../../interfaces/ButtonProps";

const Button = ({
  type = "filled",
  onClick,
  title = "click me",
}: ButtonProps) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
