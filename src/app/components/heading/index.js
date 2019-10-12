import React from "react";
import "./heading.scss";

const Heading = ({ text, className }) => {
  return (
    <div className={`heading ${className ? className : ""}`}>
      {text}
      <span>.</span>
    </div>
  );
};

export const PageHeading = ({ text }) => {
  return (
    <h1 className="page-heading">
      {text}
      <span>.</span>
    </h1>
  );
};

export default Heading;
