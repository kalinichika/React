import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router} from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./About";


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById("root")
);
