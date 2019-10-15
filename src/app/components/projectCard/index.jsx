import React from "react";
import "./projectCard.scss";
const ProjectCard = ({ image, name, type, className, onClick }) => {
  return (
    <div className={`project-card ${className ? className : ""}`}>
      <img src={image} alt="" onClick={onClick} />
      <h3 className="name" onClick={onClick}>
        {name}{" "}
      </h3>
      <p className="type" onClick={onClick}>
        {type}
      </p>
    </div>
  );
};

export default ProjectCard;
