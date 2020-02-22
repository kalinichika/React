import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import mainMenu from "../../conf/menu";

import "../../style/css/nav.css";

class MainNavigation extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="navigation">
        {mainMenu.map(({ index, name, href }) => {
          const active = pathname === href ? "nav-tabs--active" : "";
          return (
            <Link
              to={href}
              key={index}
              className={`main-navigation__nav-tabs ${active}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(MainNavigation);
