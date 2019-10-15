import React, { Component } from "react";
import "./footer.scss";
import { ContainerFluid } from "../layout";
import logo from "../../assets/imgs/logo.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let date = new Date();
    return (
      <div className="footer">
        <ContainerFluid>
          &copy; <img src={logo} height={25} alt="logo-ab" />{" "}
          {date.getFullYear()}
          <span className="float-none" />
          <span className="float-right">
            Made with{" "}
            <span role="img" aria-label="heart-emoji">
              💖
            </span>
            .
          </span>
        </ContainerFluid>
      </div>
    );
  }
}

export default Footer;
