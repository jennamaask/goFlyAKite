import React, { Component } from "react";
import "./styles/App.css";
import Header from "./partials/Header.js";
import Main from "./partials/Main.js";
import Conditions from "./partials/Conditions.js";
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  // function to scroll to ref of conditions section on submit of form in main
  scrollTo = () => {
    return scrollToComponent(this.conditionRef, {
      align: "top",
      duration: "2000",
      ease: "inOutQuad"
    });
  };
  render() {
    console.log(this);
    return (
      <div className="App">
        <Header />
        {/* passing scrollTo function to use on submit of form */}
        <Main scrollTo={this.scrollTo} />
        {/* getting ref for the conditions section */}
        <Conditions conditionsRef={e => (this.conditionRef = e)} />
      </div>
    );
  }
}

export default App;
