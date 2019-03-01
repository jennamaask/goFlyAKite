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
            time: this.state.time
        }
        dbRef.push(entry);
        this.setState({
            name: "",
            location: "",
            wind: "",
            waves: "",
            fun: "",
            other: "",
        })


    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        const date = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const hour = new Date().getHours()
        let minute = new Date().getMinutes()
        console.log(minute.length)
        this.setState({
            time: date + '/' + month + '/' + year + ' ' + hour + ':' + minute,
        })
    }
    

    render(){
        return(
            <form action="submit" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Display Name</label>
                <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                <label htmlFor="location">Where did you kite?</label>
                <select name="location" id="location" onChange={this.handleChange} value={this.state.location}>
                    <option value="goderich">Goderich</option>
                    <option value="kincardine">Kincardine</option>
                    <option value="montrose">Montrose Beach, Illinois</option>
                    <option value="waukegan">Waukegan, Illinois</option>
                </select>
                <fieldset>
                    <legend>How was the wind</legend>
                    <label htmlFor="light">Great for foiling (0-13 knots)</label>
                    <input type="radio" name="wind" value="light" id="light" onChange={this.handleChange} checked={this.state.wind === "light"}/>
                    <label htmlFor="mediumLight">On the lighter side (13 - 17 knots)</label>
                    <input type="radio" name="wind" value="mediumLight" id="mediumLight" onChange={this.handleChange} checked={this.state.wind === "mediumLight"}/>
                    <label htmlFor="mediumStrong">Solid (18 - 25 knots)</label>
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
                    <label htmlFor="ok">A bad day on the water is better than a good day at the office</label>
                    <input type="radio" name="fun" value="ok" id="ok" onChange={this.handleChange} checked={this.state.fun === "ok"}/>
                    <label htmlFor="medFun">So Much Fun</label>
                    <input type="radio" name="fun" value="medFun" id="medFun" onChange={this.handleChange} checked={this.state.fun === "medFun"}/>
                    <label htmlFor="mostFun">Best day of my life</label>
                    <input type="radio" name="fun" value="mostFun" id="mostFun" onChange={this.handleChange} checked={this.state.fun === "medFun"}/>
                </fieldset>
                <label htmlFor="other">Anything else you want to add?</label>
                <textarea name="other" id="other" cols="30" rows="10" onChange={this.handleChange} value={this.state.other}></textarea>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form