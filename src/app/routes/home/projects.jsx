import React from "react";
import { Row, Col, Container } from "../../components/layout";
import youtube from "../../assets/imgs/youtube.PNG";
import crown from "../../assets/imgs/crown.PNG";
import monstersilk from "../../assets/imgs/monstersilk.png";
import Heading from "../../components/heading";
import ProjectCard from "../../components/projectCard";
import Button from "../../components/button";
import styled from "styled-components";

const Projects = () => {
  const click1 = () => {
    window.open("http://crwn-store.herokuapp.com/", "_blank");
  };
  const click2 = () => {
    window.open("https://monsters-and-silk.web.app/", "_blank");
  };
  const click3 = () => {
    window.open("https://youtube-jm.netlify.com/", "_blank");
  };
  const click4 = () => {
    window.open("https://github.com/jayamathan/V2-crwn-clothing", "_blank");
  };
  const click5 = () => {
    window.open("https://github.com/jayamathan/Digital-Agency", "_blank");
  };
  const click6 = () => {
    window.open("https://github.com/jayamathan/Youtube_Clone", "_blank");
  };

  return (
    <section className="projects">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <Heading text="Recent Work" className="text-white" />
            </div>
          </Col>
        </Row>
        <div className="list">
          <Row className="m-0">
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectCard
                className="text-white"
                name="Crown Store"
                type="E-commerce"
                image={crown}
                onClick={click1}
              />
              <Buttonstyle>
                <Button label="View Github &#8594;" onClick={click4} />
              </Buttonstyle>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectCard
                name="Monster & Silk"
                type="Web App"
                image={monstersilk}
                onClick={click2}
              />
              <Buttonstyle>
                <Button label="View Github &#8594;" onClick={click5} />
              </Buttonstyle>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectCard
                name="Youtube Clone"
                type="Web App"
                image={youtube}
                onClick={click3}
              />
              <Buttonstyle>
                <Button label="View Github &#8594;" onClick={click6} />
              </Buttonstyle>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={12}>
            <div className="text-center">
              {/* <LinkButton to='/work' label="See All Work &#8594;" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Buttonstyle = styled.div`
  position: relative;
  margin: 15px 0;
  width: 100%;
  text-align: center;
`;

export default Projects;
