import React from "react";

import "./timeline.scss";
import { EXPERIENCE } from "../../constants";
import { Col, Row } from "../layout";
import Heading from "../heading";
const Timeline = () => {
  return (
    <div className="experience">
      <Row className="mt-4">
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <Heading text="Experience" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="timeline-wrapper">
            <div className="timeline">
              {EXPERIENCE.map((exp, expi) => {
                return (
                  <div
                    key={exp.id}
                    className={`timeline-container ${
                      expi % 2 === 0 ? "left" : "right"
                    }`}
                  >
                    <div className="timeline-content">
                      <h3>{exp.time}</h3>
                      <h4>
                        {exp.designation} <span>at {exp.title}</span>
                      </h4>
                      <p>{exp.descriptiion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Timeline;
