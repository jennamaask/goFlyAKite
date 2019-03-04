import React, { Component } from "react";
import "../styles/Main.css";
import lakes from "../assets/greatLakes.svg";
import Form from "./Form.js";
import Overlay from "./Overlay.js";
import "../styles/Overlay.css";

class Main extends Component {
    render() {
        return (
            <main>
                <div className="wrapper">
                    <div className="map" >
                        <div className="lakes">
                            <img src={lakes} alt=""/>
                            <Overlay />
                        </div>
                        <div className="legend">
                            <div className="legendContainer">
                                <div className="yellow"></div>
                                <p> = Not so good</p>
                            </div>
                            <div className="legendContainer">
                                <div className="pink"></div>
                                <p> = Great</p>
                            </div>
                            <div className="legendContainer">
                                <div className="blue"></div>
                                <p> = Amazing</p>
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
            </main>

        )
    }
}

export default Main