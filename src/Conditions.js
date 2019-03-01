import React, { Component } from "react";
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

    componentDidMount(){
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            let conditions = response.val();
            let tempArray=[];
            for(let entry in conditions){
                tempArray.push(conditions[entry]);
            }
            this.setState({
                submissions: tempArray
            })
        })
    }
    render(){
        return (
            <div className="conditions">
                <h2>Most Recent Conditions</h2>
                {
                    this.state.submissions.map((submission) => {
                        let currentDate = new Date().getDate()
                        currentDate = ('0' + currentDate).slice(-2)
                        let currentMonth = new Date().getMonth() + 1
                        currentMonth = ('0' + currentMonth).slice(-2)
                        const currentYear = new Date().getFullYear()
                        currentDate = currentDate + '/' + currentMonth + '/' + currentYear
                        if (currentDate === submission.date){
                            const convertedLocation = submission.location.replace(/([A-Z])/g, " $1")
                            let displayLocation = convertedLocation.charAt(0).toUpperCase() + convertedLocation.slice(1)
                        return (
                            <div>
                                <p>{submission.name}</p>
                                <p>{windDescription[submission.wind]}</p>
                                <p>{waveDescription[submission.waves]}</p>
                                <p>{displayLocation}</p>
                                <p>{submission.other}</p>
                            </div>
                        )
                    }
                })}
            </div>
        )

    }
}

export default Conditions