import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Routes from "./routes";

import "./styles/main.scss";
import ScrollToTop from "./components/scrolltotop";

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <div id="app">
          <Header />
          <div id="content" className="content">
            <Routes />
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    );
  }
}

export default App;
