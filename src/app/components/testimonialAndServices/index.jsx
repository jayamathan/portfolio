import React from "react";

import { Row, Col, Container } from "../layout";

import {
  THIRD_PARTY_INTEGRATION,
  RESPONSIVE_DESIGN,
  UI_FRAMEWORKS,
  DOCUMENTED_CODE
} from "../../assets/imgs";

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
              There is one word that describes Abhishar - Commitment. His
              commitment towards his work is his strongest skill. And he does
              not do that because he has to, he does it because he wants to.
              Abhishar can handle multiple projects at once and one can always
              have an out of the box discussion with him. Abhishar is a real
              keeper.
            </p>
            <span>
              - ANKIT BHANGAR <i> Product Manager at Dauble</i>
            </span>
            <br />
            <span />
          </div>
          <div className="col-md-6">
            <p>
              Abhishar has wonderful implementation skills in terms of front end
              engineering , he has played a vital role in developing UI and UX
              for Medzin.
            </p>
            <span>
              - MADHAV SHANKAR <i> Product Manager at Medzin</i>
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
              image={RESPONSIVE_DESIGN}
              name="RESPONSIVE DESIGN"
              desc="I can design and develop a fully responsive website for different size devices (i.e Desktop, Tablet, Mobile)."
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className=""
              image={DOCUMENTED_CODE}
              name="DOCUMENTED CODE"
              desc="I believe that code should be wrriten in a such manner that another developer can easily understand it."
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className="border-left-0 border-bottom-0"
              image={THIRD_PARTY_INTEGRATION}
              name="THIRD PARTY INTEGRATION"
              desc="I have experience of integrating third party tools or libraries such as Branch, Adobe Creative SDK etc."
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className="border-right-0 border-bottom-0"
              image={UI_FRAMEWORKS}
              name="UI FRAMEWORKS"
              desc="I am familiar in using several frameworks like Bootstrap, Angular Material, Materialize CSS, Material UI etc."
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default TestimonialServices;
