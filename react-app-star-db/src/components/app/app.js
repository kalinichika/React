import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import PersonPage from "../person-page";
import StarshipPage from "../starship-page";
import PlanetPage from "../planet-page";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <PersonPage />
        <StarshipPage />
        <PlanetPage />
      </div>
    );
  }
}
