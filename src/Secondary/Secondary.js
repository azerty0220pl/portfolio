import React from "react";
import QuoteBox from "./quote/QuoteBox";
import Clock from "./clock/Clock";
import Calc from "./calculator/Calc";
import DrumMachine from "./drumMachine/DrumMachine";

class Secondary extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cur = 1
        }
    }

    render(){
        return (
            <div>
                <div>
                    <button>Quote Box</button>
                    <button>25+5 Clock</button>
                    <button>Calculator</button>
                    <button>Drum Machine</button>
                </div>
                <div>
                    <QuoteBox />
                    <Clock />
                    <Calc />
                    <DrumMachine />
                </div>
            </div>
        );
    }
}

export default Secondary;