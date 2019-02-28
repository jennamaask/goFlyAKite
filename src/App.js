import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Conditions from "./Conditions.js";

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
