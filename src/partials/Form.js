import React, { Component } from "react";
import firebase from "./firebase";
import Scrollchor from "react-scrollchor";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            location:"",
            wind: "strong",
            waves: "",
            fun:"mostFun",
            other: "",
            date:"",
            time: ""
        }
    }
    // create an object from this.state to push to the firebase database
    handleSubmit=(event) => {
        event.preventDefault();   
        const dbRef = firebase.database().ref();
        const entry = {
            name: this.state.name,
            location: this.state.location,
            wind: this.state.wind,
            waves: this.state.waves,
            fun: this.state.fun,
            other: this.state.other,
            date: this.state.date,
            time: this.state.time
        }
        dbRef.push(entry);
        this.setState({
            name: "",
            location: "alpena",
            wind: "strong",
            waves: "",
            fun: "mostFun",
            other: "",
        })
    }
    //get values for each input in the form when they change
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // get todays date and the current time
    componentDidMount() {
        let currentDate = new Date().getDate()
        currentDate = ('0' + currentDate).slice(-2)
        let month = new Date().getMonth() + 1
        month = ('0' + month).slice(-2)
        const year = new Date().getFullYear()
        let hour = new Date().getHours()
        hour = ('0' + hour).slice(-2)
        let minute = new Date().getMinutes()
        minute = ('0' + minute).slice(-2)
        this.setState({
            time: hour + ':' + minute,
            date: currentDate + '/' + month + '/' + year
        })
    }
    render(){
        return(
            <div className="intakeForm" id="intakeForm">
            <h2>Did You Kiteboard Today?</h2>
            <form action="submit" onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="visuallyHidden">Display Name</label>
                <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} placeholder="Display Name"required/>
                <label htmlFor="location" className="visuallyHidden">Where did you kite?</label>
                <select name="location" id="location" onChange={this.handleChange} value={this.state.location} required>
                    <option className="description" value="" disabled>Where did you Kiteboard?</option>
                    <option value="alpena">Alpena</option>
                    <option value="algoma">Algoma</option>
                    <option value="brestBay">Brest Bay</option>
                    <option value="caseville">Caseville</option>
                    <option value="catHeadBay">Cat Head Bay</option>
                    <option value="cherryStreetBeach">Cherry Street Beach</option>
                    <option value="cleveland">Cleveland</option>
                    <option value="coburgBeach">Coburg Beach</option>
                    <option value="conneaut">Conneaut</option>
                    <option value="duluth">Duluth</option>
                    <option value="escanaba">Escanaba</option>
                    <option value="goderich">Goderich</option>
                    <option value="grandHaven">Grand Haven</option>
                    <option value="greatSandBay">Great Sand Bay</option>
                    <option value="kettlePoint">Kettle Point</option>
                    <option value="kincardine">Kincardine</option>
                    <option value="kellysIsland">Kelly's Island</option>
                    <option value="lakeport">Lakeport</option>
                    <option value="ludington">Ludington</option>
                    <option value="longPoint">Long Point</option>
                    <option value="michiganCity">Michigan City</option>
                    <option value="milwaukee">Milwaukee</option>
                    <option value="montrose">Montrose Beach</option>
                    <option value="oliphant">Oliphant</option>
                    <option value="oshawaBeach">Oshawa Beach</option>
                    <option value="scarboroughBluffs">Scarborough Bluffs</option>
                    <option value="sheboygan">Sheboygan</option>
                    <option value="sherkston">Sherkston</option>
                    <option value="stCatherines">St Catherines</option>
                    <option value="stIgnace">St Ignace</option>
                    <option value="tawasPoint">Tawas Point</option>
                    <option value="wassagaBeach">Wasaga Beach</option>
                    <option value="waukegan">Waukegan</option>
                    <option value="whiteRock">White Rock</option>
                    <option value="woodbineBeach">Woodbine Beach</option>
                </select>
                <fieldset>
                    <legend>How was the wind?</legend>
                    <input type="radio" name="wind" value="none" id="none" onChange={this.handleChange} checked={this.state.wind === "none"} required/>
                    <label htmlFor="none">Non-Existent</label>
                    <input type="radio" name="wind" value="light" id="light" onChange={this.handleChange} checked={this.state.wind === "light"} required/>
                    <label htmlFor="light">Great for foiling (6-13 knots)</label>
                    <input type="radio" name="wind" value="mediumLight" id="mediumLight" onChange={this.handleChange} checked={this.state.wind === "mediumLight"} required/>
                    <label htmlFor="mediumLight">On the lighter side (13-17 knots)</label>
                    <input type="radio" name="wind" value="mediumStrong" id="mediumStrong" onChange={this.handleChange} checked={this.state.wind ==="mediumStrong"} required/>
                    <label htmlFor="mediumStrong">Solid (18-25 knots)</label>
                    <input type="radio" name="wind" value="strong" id="strong" onChange={this.handleChange} checked={this.state.wind === "strong"} required/>
                    <label htmlFor="strong">Very strong (25+ knots)</label>
                </fieldset>
                <fieldset>
                    <legend>How were the waves?</legend>
                    <input type="radio" name="waves" value="flat" id="flat" onChange={this.handleChange} checked={this.state.waves === "flat"}/>
                    <label htmlFor="flat">Nice and Flat</label>
                    <input type="radio" name="waves" value="swell" id="swell" onChange={this.handleChange} checked={this.state.waves === "swell"}/>
                    <label htmlFor="swell">Some Swell</label>
                    <input type="radio" name="waves" value="bigWaves" id="bigWaves" onChange={this.handleChange} checked={this.state.waves === "bigWaves"}/>
                    <label htmlFor="bigWaves">Big Waves!</label>
                </fieldset>
                <fieldset>
                    <legend>How much fun did you have?</legend>
                    <input type="radio" name="fun" value="ok" id="ok" onChange={this.handleChange} checked={this.state.fun === "ok"} required/>
                    <label htmlFor="ok">It was not great</label>
                    <input type="radio" name="fun" value="medFun" id="medFun" onChange={this.handleChange} checked={this.state.fun === "medFun"} required/>
                    <label htmlFor="medFun">So much fun</label>
                    <input type="radio" name="fun" value="mostFun" id="mostFun" onChange={this.handleChange} checked={this.state.fun === "mostFun"} required/>
                    <label htmlFor="mostFun">Best day of my life</label>
                </fieldset>
                <label htmlFor="other">Anything else you want to add?</label>
                <textarea name="other" id="other" cols="30" rows="3" onChange={this.handleChange} value={this.state.other}></textarea>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default Form