import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";
import Form from "./Form";

//import { connect } from "./actions/tracks";
import Menu from "./Menu";

import "./App.css";

const menu = [
  {
    link: "/articles",
    label: "Articles"
  },
  {
    link: "/contacts",
    label: "Contacts"
  },
  {
    link: "/posts",
    label: "Posts"
  }
];

class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }
  findTrack() {
    this.props.onFindTrack(this.searchInput.value);
  }
  render() {
    return (
      <div className="container">
        <Menu />
        Hello world!
        <Dropdown />
        <Header items={menu} />
        <RegistrationForm />
        <Form />
        <div>
          <input
            type="text"
            ref={input => {
              this.trackInput = input;
            }}
          />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input
            type="text"
            ref={input => {
              this.searchInput = input;
            }}
          />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        
      </div>
    );
  }
}
export default App;
