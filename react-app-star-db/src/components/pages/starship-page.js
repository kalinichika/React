import React, { Component } from "react";
import { StarshipList, StarshipDetails } from "../sw-components";
import Row from "../row";

export default class StarshipPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<StarshipList />}
        right={<StarshipDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}
