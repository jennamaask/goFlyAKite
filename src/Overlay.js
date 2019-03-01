import React, { Component } from "react";
import "./Overlay.css";
import firebase from "./firebase";
import mapLocations from "./mapLocations.js";
import colors from "./colors.js"


class Overlay extends Component{
    constructor() {
        super();
        this.state = {
            locationsAndFun: [],
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            const submissions= response.val();
            let tempArray = [];
            for (let entry in submissions){
                let tempObject = {
                    location:"",
                    fun:""
                }
                tempObject.location = submissions[entry].location
                tempObject.fun = submissions[entry].fun
                tempArray.push(tempObject);
            }
            this.setState({
                locationsAndFun: tempArray
            })

        })
    }

    render(){
        return(
            <div className="overlay">
                {
                    this.state.locationsAndFun.map((entry)=> {
                        let entryLocation = entry.location
                        let entryFun = entry.fun
                        let randomRight = mapLocations[entryLocation].right[Math.floor(Math.random() * mapLocations[entryLocation].right.length)];
                        let randomTop = mapLocations[entryLocation].top[Math.floor(Math.random() * mapLocations[entryLocation].top.length)];
                        let circleColor = colors[entryFun]
                        return (
                            <div className={"circle "} style={{top:randomTop, right: randomRight, background: circleColor}} >

                            </div>
                        )
                    })

                }
            </div>
        )
    }

}

export default Overlay