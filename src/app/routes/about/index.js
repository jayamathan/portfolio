import React from "react";

import Page from "../../components/page";
import "./about.scss";
import { Container, Row, Col } from "../../components/layout";
import TestimonialServices from "../../components/testimonialAndServices";
import { PageHeading } from "../../components/heading";
import WorkTogether from "../../components/workTogether";
import Skills from "../../components/skills";
import Timeline from "../../components/timeline";
import WorkedWith from "../../components/workedWith";
import { ABHISHAR } from "../../assets/imgs";
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
                  Abhishar <b>JANGIR</b>
                </span>
              </h3>
              <hr />
              <p>
                I am a Gurugram(India) based Front End Developer, having more
                than 3 years of professional experience in the web development.
              </p>
              <p>
                Currently, I'm working as a System Analyst with a US client in
                Gurugram, India.
              </p>
              <p>
                I design & develop websites in latest technologies. I specialize
                in front-end development, and sometimes I also works on back-end
                technology (NodeJs).
              </p>
              <p>
                And currently I'm in{" "}
                <span role="img" aria-label="heart-emoji">
                  💖
                </span>{" "}
                love with Javascript.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={ABHISHAR} className="img-fluid" alt="" />
            </Col>
          </Row>
          <Timeline />
          <WorkedWith />
        </div>
      </Container>
      <Skills />
      <TestimonialServices />
      <WorkTogether />
    </div>
  </Page>
);

export default About;
