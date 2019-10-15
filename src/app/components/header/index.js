import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { HEADER_LINKS } from "../../constants";
import { Row, ContainerFluid } from "../layout";
import Hamburger from "../hamburger";
import logo from "../../assets/imgs/logo.png";
import resume from "../../assets/JAYAMATHAN Resume.pdf";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  renderLogo = () => {
    return (
      <div className="logo col-6">
        <Link to="/">
          <img src={logo} className="img-fluid" alt="wwww.imabhi.in" />
        </Link>
      </div>
    );
  };

  renderMenu = () => {
    const { isOpen } = this.state;
    return (
      <div className="col-6 p-0">
        <div className="menu">
          <a
            href="https://github.com/jayamathan"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/jayamathan-s/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href={resume} download>
            CV
          </a>
          <Hamburger isOpen={isOpen} toggle={this.toggle} />
        </div>
      </div>
    );
  };

  renderMenuList = () => {
    const { isOpen } = this.state;
    return (
      <div className="menu-list-wrapper">
        <div className={isOpen ? "menu-list-open" : "menu-list"}>
          {HEADER_LINKS.map((link, index) => (
            <Link
              className="effect-3"
              onClick={this.toggle}
              key={link.id}
              to={link.to}
            >
              <span> {link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <header id="header" className="header-white">
        <ContainerFluid>
          <Row>
            {this.renderLogo()}
            {this.renderMenu()}
          </Row>
        </ContainerFluid>
        <ContainerFluid>
          <Row>{this.renderMenuList()}</Row>
        </ContainerFluid>
      </header>
    );
  }
}

export default Header;
