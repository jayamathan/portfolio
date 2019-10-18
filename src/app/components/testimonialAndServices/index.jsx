import React from "react";

import { Row, Col, Container } from "../layout";
import doccode from "../../assets/imgs/DOCUMENTED_CODE.png";
import resdesign from "../../assets/imgs/RESPONSIVE_DESIGN.png";
import thirdparty from "../../assets/imgs/THIRD_PARTY INTEGRATI_N.png";
import UIFrame from "../../assets/imgs/UI_FRAMEWOKS.png";

import "./testimonialAndServices.scss";

const TestimonialServices = () => {
  return (
    <React.Fragment>
      <Testimonial />
      <Services />
    </React.Fragment>
  );
};

const Testimonial = () => {
  return (
    <Container>
      <div className="testimonial">
        <Row className="flex">
          <div className="col-md-6">
            <p>
              Jayamathan has excellent commitment and unwavering dedication to
              his work. He has genuine intellectual curiosity and an innovative
              mind-set to learn and implement novel concepts.
            </p>
            <span>
              - Annamol Alex <i> Lead Engineer at HTIC, IIT Madras</i>
            </span>
            <br />
            <span />
          </div>
          <div className="col-md-6">
            <p>
              Jayamathan has wonderful implementation skills in terms of front
              end, he learns everything quickly and great in exploring new
              skills.
            </p>
            <span>
              - Chitra Gurumoorthy <i> Technology Analyst at Infosys</i>
            </span>
          </div>
        </Row>
      </div>
    </Container>
  );
};

const ServiceCard = ({ image, name, desc, className }) => {
  return (
    <div className={`service-card ${className ? className : ""}`}>
      <div className="serivce-icon">
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Container>
      <section className="services">
        <Row className="m-0">
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className=""
              image={resdesign}
              name="Full stack development"
              desc="I can handle both front end and back end development. I also comfortable in working with databases and github version control."
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className=""
              image={doccode}
              name="DOCUMENTED CODE"
              desc="I believe that code should be written in such a manner that another developer can easily understand it."
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className="border-left-0 border-bottom-0"
              image={thirdparty}
              name="Responsibility"
              desc="I take ownership for my code and I can write pure functions in functional programming style.I test my code with testing tools before deploying."
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className="border-right-0 border-bottom-0"
              image={UIFrame}
              name="Continuous Learning"
              desc="I constantly update my skills with current trends in technologies.I develop side projects and write articles to keep me updated.   "
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default TestimonialServices;
