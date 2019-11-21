import React, { Component } from "react";
import { StarshipList, StarshipDetails } from "../sw-components";
import Row from "../row";

export default class StarshipPage extends Component {
  state = {
    selectedItem: 1
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row left={<StarshipList />} right={<StarshipDetails itemId={11} />} />
    );
  }
}
