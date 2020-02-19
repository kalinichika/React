import React, { Component } from "react";
import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../row";

export default class PlanetPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PlanetList />}
        right={<PlanetDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}
