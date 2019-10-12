import React from "react";
import "./projectCard.scss";
const ProjectCard = ({ image, name, type, className }) => {
  return (
    <div className={`project-card ${className ? className : ""}`}>
      <img src={image} alt="" />
      <h3 className="name">{name}</h3>
      <p className="type">{type}</p>
    </div>
  );
};

export default ProjectCard;
