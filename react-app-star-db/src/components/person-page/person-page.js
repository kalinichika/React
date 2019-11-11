import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";

import "./person-page.css";

export default class PersonPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 1
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { getPerson, getPersonImage } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
