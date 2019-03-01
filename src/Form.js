import React, { Component } from "react";
import firebase from "./firebase";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            location:"",
            wind: "",
            waves: "",
            fun:"",
            other: "",
            date:"",
            time: ""
        }
    }

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
            location: "",
            wind: "",
            waves: "",
            fun: "",
            date:"",
            time:"",
            other: "",
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        let currentDate = new Date().getDate()
        currentDate = ('0' + currentDate).slice(-2)
        // if (currentDate.length < 2) {
        //     console.log("the date is less than zero")
        //     currentDate = "0" + currentDate
        // }
        let month = new Date().getMonth() + 1
        month = ('0' + month).slice(-2)
        const year = new Date().getFullYear()
        let hour = new Date().getHours()
        hour = ('0' + hour).slice(-2)
        let minute = new Date().getMinutes()
        minute = ('0' + minute).slice(-2)
        console.log(minute.length)
        this.setState({
            time: hour + ':' + minute,
            date: currentDate + '/' + month + '/' + year
        })
    }
    

    render(){
        return(
            <form action="submit" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Display Name</label>
                <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                <label htmlFor="location">Where did you kite?</label>
                <select name="location" id="location" onChange={this.handleChange} value={this.state.location}>
                    <option value="cherryStreetBeach">Cherry Street Beach</option>
                    <option value="coburgBeach">Coburg Beach</option>
                    <option value="duluth">Duluth</option>
                    <option value="goderich">Goderich</option>
                    <option value="grandHaven">Grand Haven</option>
                    <option value="greatSandBay">Great Sand Bay</option>
                    <option value="kettlePoint">Kettle Point</option>
                    <option value="kincardine">Kincardine</option>
                    <option value="longPoint">Long Point</option>
                    <option value="michiganCity">Michigan City</option>
                    <option value="milwaukee">Milwaukee</option>
                    <option value="montrose">Montrose Beach, Illinois</option>
                    <option value="oliphant">Oliphant</option>
                    <option value="oshawaBeach">Oshawa Beach</option>
                    <option value="scarboroughBluffs">Scarborough Bluffs</option>
                    <option value="sherkston">Sherkston</option>
                    <option value="stCahterines">St Cahterines</option>
                    <option value="tawasPoint">Tawas Point</option>
                    <option value="wassagaBeach">Wasaga Beach</option>
                    <option value="waukegan">Waukegan</option>
                    <option value="woodbineBeach">Woodbine Beach</option>
                </select>
                <fieldset>
                    <legend>How was the wind</legend>
                    <label htmlFor="none">Non-Existent</label>
                    <input type="radio" name="wind" value="none" id="none" onChange={this.handleChange} checked={this.state.wind === "none"} />
                    <label htmlFor="light">Great for foiling (6-13 knots)</label>
                    <input type="radio" name="wind" value="light" id="light" onChange={this.handleChange} checked={this.state.wind === "light"}/>
                    <label htmlFor="mediumLight">On the lighter side (13-17 knots)</label>
                    <input type="radio" name="wind" value="mediumLight" id="mediumLight" onChange={this.handleChange} checked={this.state.wind === "mediumLight"}/>
                    <label htmlFor="mediumStrong">Solid (18-25 knots)</label>
                    <input type="radio" name="wind" value="mediumStrong" id="mediumStrong" onChange={this.handleChange} checked={this.state.wind ==="mediumStrong"}/>
                    <label htmlFor="strong">Very Strong (25+ knots)</label>
                    <input type="radio" name="wind" value="strong" id="strong" onChange={this.handleChange} checked={this.state.wind === "strong"} />
                </fieldset>
                <fieldset>
                    <legend>How were the waves</legend>
                    <label htmlFor="flat">flat</label>
                    <input type="radio" name="waves" value="flat" id="flat" onChange={this.handleChange} checked={this.state.waves === "flat"}/>
                    <label htmlFor="swell">Some Swell</label>
                    <input type="radio" name="waves" value="swell" id="swell" onChange={this.handleChange} checked={this.state.waves === "swell"}/>
                    <label htmlFor="bigWaves">Big Waves</label>
                    <input type="radio" name="waves" value="bigWaves" id="bigWaves" onChange={this.handleChange} checked={this.state.waves === "bigWaves"}/>
                </fieldset>
                <fieldset>
                    <legend>How much fun did you have?</legend>
                    <label htmlFor="ok">A bad day on the kitesurfing is better than a good day at the office</label>
                    <input type="radio" name="fun" value="ok" id="ok" onChange={this.handleChange} checked={this.state.fun === "ok"}/>
                    <label htmlFor="medFun">So Much Fun</label>
                    <input type="radio" name="fun" value="medFun" id="medFun" onChange={this.handleChange} checked={this.state.fun === "medFun"}/>
                    <label htmlFor="mostFun">Best day of my life</label>
                    <input type="radio" name="fun" value="mostFun" id="mostFun" onChange={this.handleChange} checked={this.state.fun === "mostFun"}/>
                </fieldset>
                <label htmlFor="other">Anything else you want to add?</label>
                <textarea name="other" id="other" cols="30" rows="10" onChange={this.handleChange} value={this.state.other}></textarea>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form