import React from "react";

import "./workedWith.scss";
import { Col, Row, Container } from "../layout";
import Heading from "../heading";
import { WORKED_WITH } from "../../constants";

const WorkedWith = () => {
  return (
    <div className="workedWith">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="text-center">
            <Heading text="Worked On" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="list">
              {WORKED_WITH.map(ww => (
                <div key={ww.id}>
                  <img src={ww.imgSrc} alt="" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkedWith;
