import React from "react";
import "./workTogether.scss";
import { Col, Row, Container } from "../layout";
import Heading from "../heading";
import { LinkButton } from "../button";

const WorkTogether = () => {
  return (
    <section className="worktogether">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Heading text="Get in Touch" />
            <p>Let's talk about your project and work together.</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="button-wrapper">
            <LinkButton to="/contact" label="Contact Me &#8594;" type="white" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTogether;
