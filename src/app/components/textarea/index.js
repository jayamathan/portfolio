import React from "react";
import "./textarea.scss";

const Textarea = ({ id, label, name, value, className, onChange, error }) => {
  return (
    <div className="label-input-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
      />
      <div className="error">
        {error && error[name] && <span>{error.msg}</span>}
      </div>
    </div>
  );
};

export default Textarea;
