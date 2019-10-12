import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ label, type, onClick }) => {
  return (
    <button className={`button ${type ? type : ""}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export const LinkButton = ({ label, to }) => {
  return (
    <Link to={to} className={`link-button`}>
      <span>{label}</span>
    </Link>
  );
};

export default Button;
