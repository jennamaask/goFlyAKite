import "../styles/Header.css";
import React, { Component } from "react";


class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>Go Fly a Kite</h1>
          <p>Your daily guide to kitesurfing on the great lakes</p>
        </div>
      </header>
    );
  }
}

export default Header;
