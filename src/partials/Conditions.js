import React, { Component } from "react";
import "../styles/Conditions.css";
import firebase from "./firebase";
import waveDescription from "./waves.js";
import windDescription from "./wind.js";

class Conditions extends Component {
    constructor(){
        super();
        this.state = {
            submissions: []
        }
    }

    //get entries from firebase, but add the ones to this.state that are from "today"
    componentDidMount(){
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            let conditions = response.val();
            let tempArray=[];
            for(let entry in conditions){
                let currentDate = new Date().getDate()
                currentDate = ('0' + currentDate).slice(-2)
                let currentMonth = new Date().getMonth() + 1
                currentMonth = ('0' + currentMonth).slice(-2)
                const currentYear = new Date().getFullYear()
                currentDate = currentDate + '/' + currentMonth + '/' + currentYear
                if (currentDate === conditions[entry].date){
                    tempArray.push(conditions[entry]);
                }
            }
            this.setState({
                submissions: tempArray
            })
        })
    }
    render(){
        // if submissions array has items print the entries to the page
        if(this.state.submissions.length){
            return (
                <div className="conditions" id="conditions">
                    <div className="wrapper">
                        <h2>Today's Conditions</h2>
                        <div className="headings">
                            <h3 className="displayName">Name</h3>
                            <h3 className="displayDate">Date & Time</h3>
                            <h3 className="displayLocation">Location</h3>
                            <h3 className="displayWind">Wind</h3>
                            <h3 className="displayWave">Waves</h3>
                            <h3 className="displayOther">Comments</h3>
                        </div>
                        {
                            this.state.submissions.map((submission) => {
                                    const convertedLocation = submission.location.replace(/([A-Z])/g, " $1")
                                    let displayLocation = convertedLocation.charAt(0).toUpperCase() + convertedLocation.slice(1)
                                return (
                                    <div className="entry">
                                        <p className="displayName">{submission.name}</p>
                                        <p className="displayDate">{submission.date} {submission.time}</p>
                                        <p className="displayLocation">{displayLocation}</p>
                                        <p className="displayWind">{windDescription[submission.wind]}</p>
                                        <p className="displayWave">{waveDescription[submission.waves]}</p>
                                        <p className="displayOther">{submission.other}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )

        } else {
            //if submissions array is empty print a message saying we have no reports
            return(
                <div className="conditions" id="conditions">
                    <div className="wrapper">
                        <h2>Today's Conditions</h2>
                        <div className="noResults">
                            <p>Nobody has sent us any reports today :( </p>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default Conditions