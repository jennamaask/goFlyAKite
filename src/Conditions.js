import React, { Component } from "react";
import firebase from "./firebase";

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
                <h2>Current Conditions</h2>
                {
                    this.state.submissions.map((submission) => {
                    return (
                        <div>
                            <p>{submission.name}</p>
                            <p>{submission.wind}</p>
                            <p>{submission.waves}</p>
                            <p>{submission.fun}</p>
                            <p>{submission.other}</p>
                        </div>

                    )
                })}
            </div>
        )

    }
}

export default Conditions