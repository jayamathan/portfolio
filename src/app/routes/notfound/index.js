import React from "react";
import Page from "../../components/page";
import "./notfound.scss";
import Meta from "../../constants/meta";

export default () => (
  <Page {...Meta.notfound} noCrawl>
    <div className="notfound">
      <h2>oops! 404</h2>
      <p>This is not the web page you are lokking for.</p>
    </div>
  </Page>
);
