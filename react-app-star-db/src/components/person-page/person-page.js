import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/item-details.js";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

import "./person-page.css";

export default class PersonPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 3
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const { getPerson, getPersonImage } = this.swapiService;

    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}
        >
          {i => `${i.name} (${i.birthYear})`}
        </ItemList>
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={1}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundry>
    );
    return <Row left={itemList} right={itemDetails} />;
  }
}
