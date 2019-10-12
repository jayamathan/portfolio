import React from "react";
import "./home.scss";
import Page from "../../components/page";
import Landing from "./landing";
import Projects from "./projects";
import Skills from "../../components/skills";
import TestimonialServices from "../../components/testimonialAndServices";
import WorkTogether from "../../components/workTogether";
import Meta from "../../constants/meta";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page {...Meta.home}>
        <div className="home">
          <Landing />
          <Projects />
          <TestimonialServices />
          <Skills />
          <WorkTogether />
        </div>
      </Page>
    );
  }
}

export default Home;
