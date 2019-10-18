import React from "react";

import Page from "../../components/page";
import "./about.scss";
import { Container, Row, Col } from "../../components/layout";
import TestimonialServices from "../../components/testimonialAndServices";
import { PageHeading } from "../../components/heading";
import WorkTogether from "../../components/workTogether";
import Skills from "../../components/skills";
import Timeline from "../../components/timeline";
//import WorkedWith from "../../components/workedWith";
import jayamathan from "../../assets/imgs/jayamathan_s.png";
import Meta from "../../constants/meta";

const About = () => (
  <Page {...Meta.about}>
    <div className="about">
      <Container>
        <Row>
          <div className="about-heading">
            <PageHeading text="About me" />
          </div>
        </Row>
      </Container>
      <Container>
        <div className="about-content">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <h3>
                Hello! I'm{" "}
                <span className="name">
                  Jayamathan <b>Shanmugam</b>
                </span>
              </h3>
              <hr />
              <p>
                I am a Full Stack Developer, having more than 2 years of
                professional experience in the software development based in
                chennai(India).
              </p>
              <p>
                Currently, I'm working as a Senior System Engineer in Infosys
                Limited.
              </p>
              <p>
                My expertise includes both front end technologies such as
                Javascript, Angular, React, HTML, CSS and back end technologies
                includes Java, Python, Hibernate, NodeJs, Express.
              </p>
              <p>I am also comfortable with databases such as SQL, MongoDB</p>
              <p>
                And currently I'm in{" "}
                <span role="img" aria-label="heart-emoji">
                  💖
                </span>{" "}
                love with Javascript and ReactJs.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={jayamathan} className="img-fluid" alt="" />
            </Col>
          </Row>
          <Timeline />
        </div>
      </Container>
      <Skills />
      <TestimonialServices />
      <WorkTogether />
    </div>
  </Page>
);

export default About;
