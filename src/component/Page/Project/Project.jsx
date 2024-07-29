import React, { useRef } from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectdata } from "~/utils/data";
import Slider from "react-slick";

const Project = () => {
  const silderRef = useRef();
  const setting = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="project-container" id="project">
      <h5>Project</h5>
      <div className="project-content">
        <Slider ref={silderRef} {...setting}>
          {projectdata.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
