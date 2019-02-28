import React, { Component } from "react";
import lakes from "./greatLakes.svg";
import Form from "./Form.js";
import Overlay from "./Overlay.js";
import "./Overlay.css";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="map">
                    <img src={lakes} alt=""/>
                    <Overlay />
                </div>
                <Form />
            </div>
        )
    }
}

export default Main