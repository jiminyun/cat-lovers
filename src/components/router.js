import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "page/Home";
import Fav from "page/Fav";
import Nav from "components/Nav";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/fav" exact component={Fav} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);
