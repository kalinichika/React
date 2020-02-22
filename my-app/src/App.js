import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import MainNavigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <MainNavigation/>
            <MainContent/>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
