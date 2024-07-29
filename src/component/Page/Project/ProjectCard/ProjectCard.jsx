import React from "react";
import "./ProjectCard.scss";
import Button from "~/component/Button/Button";

const ProjectCard = ({item}) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={item.img} alt="" className="w-56 h-64 object-cover rounded"/>
        <button className="hidden-btn">Preview</button>
      </div>
      <h6>{item.title}</h6>
    </div>
  );
};

export default ProjectCard;
