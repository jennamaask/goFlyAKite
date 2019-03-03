import React, { Component } from "react";
// import "./setup.css";
import "./Main.css";
import lakes from "./greatLakes.svg";
import Form from "./Form.js";
import Overlay from "./Overlay.js";
import "./Overlay.css";

class Main extends Component {
    render() {
        return (
            <main>
                <div className="map" >
                    <div className="lakes">
                        <img src={lakes} alt=""/>
                        <Overlay />
                    </div>
                    <div className="legend">
                        <div className="yellow"></div>
                        <p> = Not so good</p>
                        <div className="pink"></div>
                        <p> = Great</p>
                        <div className="blue"></div>
                        <p> = Amazing</p>
                    </div>
                </div>
                <Form />
            </main>

        )
    }
}

export default Main