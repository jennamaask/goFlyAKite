import React, { Component } from 'react';
import "./styles/setup.css";
import './styles/App.css';
import Header from "./partials/Header.js";
import Main from "./partials/Main.js";
import Conditions from "./partials/Conditions.js";
import scrollToComponent from "react-scroll-to-component"; 


class App extends Component {
  scrollTo = () => {
    return scrollToComponent(this.conditionRef, {align: "top", duration: "2000", ease: "inOutQuad"})
  }
  render() {
    console.log(this)
    return (
      <div className="App">
        <Header />
        <Main scrollTo={this.scrollTo}/>
        <Conditions conditionsRef={e => (this.conditionRef = e)}/>
      </div>
    );
  }
}

export default App;
