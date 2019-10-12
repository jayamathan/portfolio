import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home"),
  loading: () => null
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./about"),
  loading: () => null
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "contact" */ "./contact"),
  loading: () => null
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notfound" */ "./notfound"),
  loading: () => null
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
