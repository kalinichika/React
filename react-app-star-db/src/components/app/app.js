import React, { Component } from "react";
import Header from "../header";
import ErrorButton from "../error-button";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PersonPage from "../person-page/person-page";
import ItemList from "../item-list/";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  };
  toggleRandomPlanet = () => {
    this.setState({
      showRandomPlanet: !this.state.showRandomPlanet
    });
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const { showRandomPlanet } = this.state;
    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {randomPlanet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />

        <PersonPage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPlanetSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={item => (
                <span>
                  {item.name}
                  <button>!</button>
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPlanet} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onStarshipSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={item => (
                <span>
                  {item.name}
                  <button>!</button>
                </span>
              )}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedStarship} />
          </div>
        </div>
      </div>
    );
  }
}
