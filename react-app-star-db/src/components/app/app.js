import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";

import "./app.css";
import PersonPage from "../person-page";
import PlanetPage from "../planet-page";
import StarshipPage from "../starship-page";

export default class App extends Component {
  swapiService = new SwapiService();

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

    /*
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
*/

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          {planet}
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
          <PersonPage />
          <StarshipPage />
          <PlanetPage />
        </div>
      </ErrorBoundry>
    );
  }
}

/*

*/
