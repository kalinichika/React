import React, { Component } from "react";
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";

export default class PersonPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PersonList />}
        right={<PersonDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}
