import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

const SOUNDS = [
    {
        id: 'Q',
        name: 'heater 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        id: 'W',
        name: 'heater 2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
        id: 'E',
        name: 'heater 3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        id: 'A',
        name: 'heater 4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        id: 'S',
        name: 'clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        id: 'D',
        name: 'open hh',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        id: 'Z',
        name: 'kick n hat',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        id: 'X',
        name: 'kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        id: 'C',
        name: 'closed hh',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

function playSound(audio) {
    let a = document.getElementById(audio)
    if (a.paused)
        a.play();
    else {
        a.load();
        a.play();
    }
}

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: ''
        }
        this.playSound1 = this.playSound1.bind(this);
        this.playSound2 = this.playSound2.bind(this);
    }

    playSound1(event) {
        let x = 0;
        x = parseInt(event.target.value);
        playSound(SOUNDS[x].id);
        this.setState({ playing: SOUNDS[x].name });
    }

    playSound2(event) {
        let x = -1;
        console.log(event.key)
        switch (event.key) {
            case 'Q':
                x = 0;
                break;
            case 'W':
                x = 1;
                break;
            case 'E':
                x = 2;
                break;
            case 'A':
                x = 3;
                break;
            case 'S':
                x = 4;
                break;
            case 'D':
                x = 5;
                break;
            case 'Z':
                x = 6;
                break;
            case 'X':
                x = 7;
                break;
            case 'C':
                x = 8;
                break;
        }
        if (x >= 0) {
            playSound(SOUNDS[x].id);
            this.setState({ playing: SOUNDS[x].name });
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.playSound2);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.playSound2);
    }

    render() {
        return (
            <div className="card" id='drum-machine'>
                <div className="card-header">
                    <h2 className="text-center">Drum Machine</h2>
                </div>
                <div className="card-body align-items-center row-cols-3 gap-5" id="keys">
                    <button className="drum-pad col btn btn-light" id="heather1" value="0" onClick={this.playSound1}>
                        Q
                        <audio src={SOUNDS[0].url} class="clip" id="Q" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="heather2" value="1" onClick={this.playSound1}>
                        W
                        <audio src={SOUNDS[1].url} class="clip" id="W" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="heather3" value="2" onClick={this.playSound1}>
                        E
                        <audio src={SOUNDS[2].url} class="clip" id="E" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="heather4" value="3" onClick={this.playSound1}>
                        A
                        <audio src={SOUNDS[3].url} class="clip" id="A" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="clap" value="4" onClick={this.playSound1}>
                        S
                        <audio src={SOUNDS[4].url} class="clip" id="S" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="open" value="5" onClick={this.playSound1}>
                        D
                        <audio src={SOUNDS[5].url} class="clip" id="D" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="kick-hat" value="6" onClick={this.playSound1}>
                        Z
                        <audio src={SOUNDS[6].url} class="clip" id="Z" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="kick" value="7" onClick={this.playSound1}>
                        X
                        <audio src={SOUNDS[7].url} class="clip" id="X" />
                    </button>
                    <button className="drum-pad col btn btn-light" id="closed" value="8" onClick={this.playSound1}>
                        C
                        <audio src={SOUNDS[8].url} class="clip" id="C" url />
                    </button>
                </div>
                <div className="card-footer align-items-center" id="display">
                    <p className="text-center">{this.state.playing}</p>
                </div>
            </div>
        );
    }
}

export default DrumMachine;