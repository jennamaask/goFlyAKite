import "../styles/Header.css"
import React, { Component } from "react";
import Scrollchor from 'react-scrollchor';



class Header extends Component {
    render(){
        return (
            <header>
                <div className="wrapper">
                    <h1>Go Fly a Kite</h1>
                    <p>Your daily guide to kitesurfing on the great lakes</p>
                    <nav>
                        <ul>
                            <li>
                                {/* plugin for smooth scroll to intakeForm on click of link */}
                                <Scrollchor
                                    to="intakeForm"
                                >Tell us about your kiting today
                                </Scrollchor>
                            </li>
                            <li>
                                {/* plugin for smooth scroll to conditions on click of link */}
                                <Scrollchor
                                    to="conditions"
                                >See the most recent conditions
                                </Scrollchor>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;