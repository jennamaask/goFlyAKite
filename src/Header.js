import "./header.css"
import React, { Component } from "react";
import Scrollchor from 'react-scrollchor';



class Header extends Component {
    
    render(){
        return (
            <header>
                <h1>Go Fly a Kite</h1>
                <p>Your daily guide to kitesurfing on the great lakes</p>
                <nav>
                    <ul>
                        <li>
                            <Scrollchor
                                to="intakeForm"
                            >Tell us about your kiting today
                            </Scrollchor>
                        </li>
                        <li>
                            <Scrollchor
                                to="conditions"
                            >See the most conditions</Scrollchor>
                        </li>
                    </ul>
                </nav>
               
                
            </header>
        )
    }
}

export default Header;