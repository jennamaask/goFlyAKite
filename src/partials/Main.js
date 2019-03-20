import React, { Component } from "react";
import "../styles/Main.css";
import lakes from "../assets/greatLakes.svg";
import Form from "./Form.js";
import Overlay from "./Overlay.js";
import "../styles/Overlay.css";
import Scrollchor from "react-scrollchor";


class Main extends Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="map">
            <div className="lakes">
              <img src={lakes} alt="" />
              <Overlay />
            </div>
            <div className="legend">
              <div className="legendContainer">
                <div className="yellow" />
                <p> = Not so good</p>
              </div>
              <div className="legendContainer">
                <div className="pink" />
                <p> = Great</p>
              </div>
              <div className="legendContainer">
                <div className="blue" />
                <p> = Amazing</p>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                {/* plugin for smooth scroll to intakeForm on click of link */}
                <Scrollchor to="intakeForm">
                  Tell us about your kiting today
                </Scrollchor>
              </li>
              <li>
                {/* plugin for smooth scroll to conditions on click of link */}
                <Scrollchor to="conditions">
                  See the most recent conditions
                </Scrollchor>
              </li>
            </ul>
          </nav>
          {/* passing down scrollTo function to form, to use for onSubmit */}
          <Form scrollTo={this.props.scrollTo} />
        </div>
      </main>
    );
  }
}

export default Main;
