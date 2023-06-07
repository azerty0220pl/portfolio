import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

//Redux:
const ADD_SESSION = "ADD_SESSION";
const SUBTRACT_SESSION = "SUBTRACT_SESSION";
const ADD_BREAK = "ADD_BREAK";
const SUBTRACT_BREAK = "SUBTRACT_BREAK";
const TICK = "TICK";
const RESET = "RESET";
const CHANGE = "CHANGE";
const PLAY = 'PLAY';

const DEFAULT = {
    sessionTime: 25 * 60,
    breakTime: 5 * 60,
    time: 0,
    current: 0,
    running: false
};

const addSession = () => {
    return { type: ADD_SESSION };
};
const subtractSession = () => {
    return { type: SUBTRACT_SESSION };
};
const addBreak = () => {
    return { type: ADD_BREAK };
};
const subtractBreak = () => {
    return { type: SUBTRACT_BREAK };
};
const tick = () => {
    return { type: TICK };
};
const reset = () => {
    return { type: RESET };
};
const change = () => {
    return { type: CHANGE };
};
const play = () => {
    return { type: PLAY };
};

const reducer = (state = DEFAULT, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_SESSION:
            if (newState.sessionTime < 60 * 60)
                newState.sessionTime = newState.sessionTime + 60;
            return newState;
        case SUBTRACT_SESSION:
            if (newState.sessionTime > 60) {
                newState.sessionTime = newState.sessionTime - 60;
            }
            return newState;
        case ADD_BREAK:
            if (newState.breakTime < 60 * 60)
                newState.breakTime = newState.breakTime + 60;
            return newState;
        case SUBTRACT_BREAK:
            if (newState.breakTime > 60)
                newState.breakTime = newState.breakTime - 60;
            return newState;
        case TICK:
            newState.time += 1;
            return newState;
        case PLAY:
            /*if(newState.running)
              newState.time -= 1;*/
            newState.running = !newState.running;
            return newState;
        case RESET:
            return DEFAULT;
        case CHANGE:
            newState.current = newState.current === 0 ? 1 : 0;
            newState.time = -1;
            return newState;
        default:
            return state;
    }
};

const store = createStore(reducer);

//React:
class TimeSetter extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add(event) {
        this.props.add();
    }

    subtract(event) {
        this.props.subtract();
    }

    render() {
        return (
            <div className="col" id={this.props.ids + '-label'}>
                <div>
                    <h4 className="text-center">{this.props.title}</h4>
                </div>
                <div className="row justify-content-evenly">
                    <button className="col-2 btn btn-secondary flex justify-content-center" id={this.props.ids + '-decrement'} onClick={this.subtract}>-</button>
                    <h3 className="text-center col-6" id={this.props.ids + '-length'}>{this.props.time / 60}</h3>
                    <button className="col-2 btn btn-secondary flex justify-content-center" id={this.props.ids + '-increment'} onClick={this.add}>+</button>
                </div>
            </div>
        );
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "25:00"
        };

        this.handlePlay = this.handlePlay.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    curTime() {
        if (this.state.time === "00:00") {
            playSound('beep');
            this.props.change();
        }
        if (this.props.running)
            this.props.tick();
        let result = ":";

        let x = 0;
        if (this.props.current === 0)
            x = this.props.sessionTime - this.props.time;
        else
            x = this.props.breakTime - this.props.time;

        result = (x < 600 ? '0' + Math.floor(x / 60) : Math.floor(x / 60)) + result;
        result += x % 60 >= 10 ? x % 60 : '0' + x % 60;

        this.setState({ time: result });
        if (this.state.time === "00:00") {
            playSound('beep');
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.curTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handlePlay(event) {
        this.props.play();
    }

    handleReset(event) {
        this.props.reset();
        this.setState({ time: "25:00" });
        stopSound('beep');
    }

    render() {
        return (
            <div id="timer-label">
                <div className="card-body">
                    <div>
                        <h2 className="text-center">25 + 5 Clock</h2>
                        <h3 className="text-center">{this.props.current === 0 ? 'Session' : 'Break'}</h3>
                    </div>
                    <div>
                        <h1 className="text-center" id='time-left'>{this.props.running || this.props.time !== 0 ? this.state.time : (this.props.sessionTime >= 600 ? this.props.sessionTime / 60 : '0' + this.props.sessionTime / 60) + ':00'}</h1>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row row-cols-1 row-cols-sm-3 gap-1 justify-content-evenly">
                        <button className="col btn btn-primary" id='start_stop' onClick={this.handlePlay}>Start/Pause</button>
                        <button className="col btn btn-danger" id='reset' onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="card w-50">
                <div className="card-header">
                    <div className="row row-cols-1 row-cols-sm-2 justify-content-evenly">
                        <TimeSetter
                            ids="session"
                            title="Session Time"
                            time={this.props.sessionTime}
                            add={this.props.sessionAdd}
                            subtract={this.props.sessionSubtract}
                        />
                        <TimeSetter
                            ids="break"
                            title="Break Time"
                            time={this.props.breakTime}
                            add={this.props.breakAdd}
                            subtract={this.props.breakSubtract}
                        />
                    </div>
                </div>
                <div>
                    <Timer
                        sessionTime={this.props.sessionTime}
                        breakTime={this.props.breakTime}
                        running={this.props.running}
                        current={this.props.current}
                        change={this.props.change}
                        reset={this.props.reset}
                        play={this.props.play}
                        tick={this.props.tick}
                        time={this.props.time}
                    />
                </div>
                <audio id="beep" src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' />
            </div>
        );
    }
}


function playSound(audio) {
    let a = document.getElementById(audio)
    a.play();
}

function stopSound(audio) {
    let a = document.getElementById(audio)
    a.pause();
    a.load();
}

//React-Redux:
const mapStateToProps = (state) => {
    return {
        sessionTime: state.sessionTime,
        breakTime: state.breakTime,
        current: state.current,
        running: state.running,
        time: state.time
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sessionAdd: () => {
            return dispatch(addSession());
        },
        sessionSubtract: () => {
            return dispatch(subtractSession());
        },
        breakAdd: () => {
            return dispatch(addBreak());
        },
        breakSubtract: () => {
            return dispatch(subtractBreak());
        },
        change: () => {
            return dispatch(change());
        },
        reset: () => {
            return dispatch(reset());
        },
        play: () => {
            return dispatch(play());
        },
        tick: () => {
            return dispatch(tick());
        }
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

function Clock() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
}
export default Clock;