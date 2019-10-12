import React from "react";
import "./skills.scss";
import { Row, Container } from "../layout";
import { TOP_SKILLS } from "../../constants";
import Heading from "../heading";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.imgSrc} alt={skill.name} />
      <p>{skill.name}</p>
    </div>
  );
};

class Skills extends React.Component {
  render() {
    return (
      <section className="skills">
        <Container>
          <Row>
            <div className="col-md-12 text-center">
              <Heading text="Skill Set" />
              <Row>
                <div className="skill-list">
                  {TOP_SKILLS.map((skill, sid) => (
                    <SkillCard key={sid} skill={skill} />
                  ))}
                </div>
              </Row>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Skills;
