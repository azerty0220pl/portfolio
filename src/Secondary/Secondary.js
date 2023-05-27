import React from "react";
import QuoteBox from "./quote/QuoteBox";
import Clock from "./clock/Clock";
import Calc from "./calculator/Calc";
import DrumMachine from "./drumMachine/DrumMachine";
import { NavLink } from 'react-router-dom';

const APPS = [<QuoteBox />, <Clock />, <Calc />, <DrumMachine />]


class Secondary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cur: 0
        };
    }

    render() {
        return (
            <div className="secondary">
                <div className="secondary-1">
                    <a className="sec-button" href="/portfolio">Back</a>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 0 }) }}>Quote Box</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 1 }) }}>25+5 Clock</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 2 }) }}>Calculator</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 3 }) }}>Drum Machine</button>
                    <NavLink className="sec-button" to="/cubeclimb" target="_blank">Cube Climb</NavLink>
                    <NavLink className="sec-button" to="/flappycube2d" target="_blank">Flappy Cube 2D</NavLink>
                    <NavLink className="sec-button" to="/neonride" target="_blank">Neon Ride</NavLink>
                    <NavLink className="sec-button" to="/neonrideii" target="_blank">Neon Ride II</NavLink>
                    <NavLink className="sec-button" to="/squarerun" target="_blank">Square Run</NavLink>
                </div>
                <div className="secondary-2">
                    {
                        APPS[this.state.cur]
                    }
                </div>
            </div>
        );
    }
}

export default Secondary;