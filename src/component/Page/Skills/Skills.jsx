import { skilldata } from "~/utils/data";
import "./Skills.scss";
import SkillCard from "./SkillCard/SkillCard";
import { useState } from "react";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skilldata[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-container" id="skill">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skill">
          {skilldata.map((item, index) => (
            <SkillCard
              key={index}
              title={item.title}
              iconUrl={item.icon}
              isActive={selectedSkill.title === item.title}
              onClick={()=>{handleSelectSkill(item)}}
            />
          ))}
        </div>
        <div className="skill-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
