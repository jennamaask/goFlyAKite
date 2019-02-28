import React, { Component } from "react";
import "./Overlay.css";
import firebase from "./firebase";
import mapLocations from "./mapLocations.js";


class Overlay extends Component{
    constructor() {
        super();
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            const submissions= response.val();
            let tempArray = [];
            for (let entry in submissions){
                tempArray.push(submissions[entry].location)
            }
            this.setState({
                locations: tempArray
            })
            // console.log(this.state.locations);

        })
    }




    render(){
        return(
            <div className="overlay">
                {
                    this.state.locations.map((location)=> {
                        let randomRight = mapLocations[location].right[Math.floor(Math.random() * mapLocations[location].right.length)];
                        let randomTop = mapLocations[location].top[Math.floor(Math.random() * mapLocations[location].top.length)];
                        // console.log(right);
                        // console.log(top);
                        return (
                            <div className={"circle "} style={{top:randomTop, right: randomRight}} >

                            </div>
                        )
                    })

                }
            </div>
        )
    }

}

export default Overlay