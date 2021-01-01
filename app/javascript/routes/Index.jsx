import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import NewWhiskey from "../components/NewWhiskey";
import Whiskeys from "../components/Whiskeys";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/whiskeys" exact component={Whiskeys} />
      <Route path="/whiskey/new" exact component={NewWhiskey} />
    </Switch>
  </Router>
);
