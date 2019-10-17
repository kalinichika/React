import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import "./person-page.css";

export default class PersonPage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  };
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
