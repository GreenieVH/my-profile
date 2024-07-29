import React, { useRef } from "react";
import "./WorkExperience.scss";
import { workexdata } from "~/utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const WorkExperience = () => {
  const silderRef = useRef();
  const setting = {
    dost: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = ()=>{
    silderRef.current.slickNext();
  }
  const slideLeft = ()=>{
    silderRef.current.slickPrev();
  }
  return (
    <section className="experience-container">
      <h5>WorkExperience</h5>
      <div className="experience-content">
        <div className="arrow-left" onClick={slideLeft}>
          <IoIosArrowBack className="arrow-icon" />
        </div>
        <div className="arrow-right" onClick={slideRight}>
          <IoIosArrowForward className="arrow-icon" />
        </div>
        <Slider ref={silderRef} {...setting}>
          {workexdata.map((item, index) => (
            <ExperienceCard key={index} detail={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
