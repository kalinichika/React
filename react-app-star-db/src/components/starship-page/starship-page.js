import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";

export default class StarshipPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 1
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { getStarship, getStarshipImage } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllStarships}
      >
        {i => `${i.name} (${i.model})`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
    return <Row left={itemList} right={itemDetails} />;
  }
}
