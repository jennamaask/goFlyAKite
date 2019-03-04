import React, { Component } from "react";
import "../styles/Overlay.css";
import firebase from "./firebase";
import mapLocations from "./mapLocations.js";
import colors from "./colors.js"


class Overlay extends Component{
    constructor() {
        super();
        this.state = {
            info: [],
        }
    }
    // get the location, date and rating from each entry in the database
    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            const submissions= response.val();
            let tempArray = [];
            for (let entry in submissions){
                let tempObject = {
                    location:"",
                    fun:"",
                    date:""
                }
                tempObject.location = submissions[entry].location
                tempObject.fun = submissions[entry].fun
                tempObject.date = submissions[entry].date
                tempArray.push(tempObject);
            }
            this.setState({
                info: tempArray
            })

        })
    }

    render(){
        return(
            <div className="overlay">
                {
                    this.state.info.map((entry)=> {
                        // only print the map icons for the entries that are from today
                        let currentDate = new Date().getDate()
                        currentDate = ('0' + currentDate).slice(-2)
                        let month = new Date().getMonth() + 1
                        month = ('0' + month).slice(-2)
                        const year = new Date().getFullYear()
                        currentDate = currentDate + '/' + month + '/' + year
                        if (currentDate === entry.date) {
                            let entryLocation = entry.location
                            let entryFun = entry.fun
                            // get a random top and right value from the respective mapLocations values to determine the location of the icon on the page
                            let randomRight = mapLocations[entryLocation].right[Math.floor(Math.random() * mapLocations[entryLocation].right.length)];
                            let randomTop = mapLocations[entryLocation].top[Math.floor(Math.random() * mapLocations[entryLocation].top.length)];
                            // from the fun rating get corresponding color
                            let circleColor = colors[entryFun]
                            return (
                                // print map icon with location as class name and determined top, right, and background color values
                                <div className={"circle " + entry.location} style={{top:randomTop, right: randomRight, background: circleColor}} >
                                </div>
                            )
                        }
                    })

                }
            </div>
        )
    }

}

export default Overlay