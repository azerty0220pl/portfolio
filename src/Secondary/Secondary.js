import React from "react";
import QuoteBox from "./quote/QuoteBox";
import Clock from "./clock/Clock";
import Calc from "./calculator/Calc";
import DrumMachine from "./drumMachine/DrumMachine";
import { NavLink } from 'react-router-dom';
import CubeClimb from "./games/CubeClimb";
import FlappyCube from "./games/FlappyCube";
import NeonRide from "./games/NeonRide";
import NeonRideII from "./games/NeonRideII";
import SquareRun from "./games/SquareRun";

const APPS = [<QuoteBox />, <Clock />, <Calc />, <DrumMachine />, <CubeClimb />, <FlappyCube />, <NeonRide />, <NeonRideII />, <SquareRun />]


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
                    <button className="sec-button" onClick={() => { this.setState({ cur: 4 }) }}>Cube Climb</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 5 }) }}>Flappy Cube 2D</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 6 }) }}>Neon Ride</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 7 }) }}>Neon Ride II</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 8 }) }}>Square Run</button>
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