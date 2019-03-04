import React, { Component } from 'react';
import "./styles/setup.css";
import './styles/App.css';
import Header from "./partials/Header.js";
import Main from "./partials/Main.js";
import Conditions from "./partials/Conditions.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Conditions />
      </div>
    );
  }
}

export default App;
