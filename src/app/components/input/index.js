import React from "react";
import "./input.scss";

const Input = ({
  id,
  label,
  type,
  name,
  value,
  className,
  onChange,
  error
}) => {
  return (
    <div className="label-input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
      />
      <div className="error">{error && error[name] && error.msg}</div>
    </div>
  );
};

export default Input;
