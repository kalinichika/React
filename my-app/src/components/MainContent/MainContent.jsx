import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Main from "../../containers/pages/Main";
import About from "../../containers/pages/About";
import Photo from "../../containers/pages/Photo";
import Video from "../../containers/pages/Video";

class MainContent extends Component {
  renderContent = () => (
    <div className="page">
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/photo" component={Photo} />
        <Route path="/video" component={Video} />
      </Switch>
    </div>
  );

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainContent);
