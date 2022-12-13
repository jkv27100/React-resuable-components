import InputProps from "../../interfaces/InputProps";

import "./style.css";

const InputField = ({
  type = "input",
  placeholder = "eg: shanks k v",
  label = "First Name",
  onChange,
}: InputProps) => {
  return (
    <div className="input-container">
      <input
        className="input-element"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label className="input-label">{label}</label>
    </div>
  );
};

export default InputField;
