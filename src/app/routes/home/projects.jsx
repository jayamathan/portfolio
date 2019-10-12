import React from "react";
import { Row, Col, Container } from "../../components/layout";
import {
  PRO_DAUBLE as proDauble,
  PRO_MEDZIN as proMedzin,
  PRO_MM as proMM,
  PRO_PIT as proPIT,
  PRO_TT as proTT
} from "../../assets/imgs";
import Heading from "../../components/heading";
import ProjectCard from "../../components/projectCard";

const Projects = () => {
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
            <Col xs={12} sm={6} md={6} lg={6}>
              <ProjectCard
                className="text-white"
                name="PipeTrak IT"
                type="Mobile App"
                image={proPIT}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <ProjectCard
                className="text-white"
                name="MuscleMatics"
                type="Web App"
                image={proMM}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <ProjectCard
                name="Terrain Travellers"
                type="Web App"
                image={proTT}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <ProjectCard name="Dauble" type="Web App" image={proDauble} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <ProjectCard name="Medzin" type="Web App" image={proMedzin} />
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

export default Projects;
