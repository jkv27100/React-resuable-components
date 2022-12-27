import TextLoaderProps from "../../../interfaces/TextLoaderProps";
import "./style.css";

const TextLoading = ({ text }: TextLoaderProps) => {
  return (
    <div className="loader">
      <span>{text}</span>
    </div>
  );
};

export default TextLoading;
