import React from "react";
import "./hamburger.scss";

class Hamburger extends React.PureComponent {
  render() {
    const { isOpen, toggle } = this.props;
    return (
      <React.Fragment>
        <div
          onClick={() => toggle()}
          className={
            isOpen
              ? "hamburger hamburger--spin is-active"
              : "hamburger hamburger--spin"
          }
        >
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hamburger;
