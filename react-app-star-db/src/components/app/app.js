import React, { Component } from "react";
import Header from "../header";
import ErrorButton from "../error-button";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import "./app.css";
import PersonPage from "../person-page/person-page";

export default class App extends Component {
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
        <PersonPage />
        <PersonPage />
      </div>
    );
  }
}
