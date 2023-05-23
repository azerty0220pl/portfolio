import React from "react";
import QuoteBox from "./quote/QuoteBox";
import Clock from "./clock/Clock";
import Calc from "./calculator/Calc";
import DrumMachine from "./drumMachine/DrumMachine";

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
                    <a className="sec-button" href="/">Back</a>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 0 }) }}>Quote Box</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 1 }) }}>25+5 Clock</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 2 }) }}>Calculator</button>
                    <button className="sec-button" onClick={() => { this.setState({ cur: 3 }) }}>Drum Machine</button>
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