import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

//Redux:
const NUMBER = "NUMBER";
const OPERATOR = "OPERATOR";
const SUBSTRACT = "SUBSTRACT";
const EQUALS = "EQUALS";
const CLEAR = "CLEAR";

const DEFAULT = {
    memory: "",
    operator: "",
    input: "0",
    decimal: false,
    equals: false
};

const typeNumber = (x) => {
    return {
        type: NUMBER,
        number: x
    };
};

const typeOperator = (x) => {
    return {
        type: OPERATOR,
        operator: x
    };
};

const typeSubstract = () => {
    return {
        type: SUBSTRACT
    };
};

const typeEquals = () => {
    return {
        type: EQUALS
    };
};

const reset = () => {
    return {
        type: CLEAR
    };
};

const reducer = (state = DEFAULT, action) => {
    let newState = { ...state };
    switch (action.type) {
        case NUMBER:
            if (newState.equals) newState = { ...DEFAULT };

            if (action.number === "." && newState.decimal) return newState;
            if (newState.input === "0" && action.number !== ".") {
                newState.input = action.number;
                return newState;
            }
            if (action.number === ".") {
                newState.decimal = true;
            }
            newState.input += action.number;
            return newState;
        case OPERATOR:
            newState.equals = false;
            if (newState.input !== "0") {
                newState.memory += newState.operator + newState.input;
                newState.operator = action.operator;
                newState.input = "0";
                newState.decimal = false;
                return newState;
            }
            if (newState.memory !== "" && newState.input === "0") {
                newState.operator = action.operator;
                return newState;
            }
            return newState;
        case SUBSTRACT:
            newState.equals = false;
            if (newState.input !== "0") {
                newState.memory += newState.operator + newState.input;
                newState.operator = "-";
                newState.input = "0";
                newState.decimal = false;
                return newState;
            }
            if (
                newState.memory !== "" &&
                newState.input === "0" &&
                newState.operator.length < 2
            ) {
                newState.operator += "-";
                return newState;
            }
            return newState;
        case EQUALS:
            newState.memory += newState.operator + newState.input;
            newState.operator = "";
            newState.input = eval(newState.memory);
            newState.memory = "";
            newState.decimal = false;
            newState.equals = true;
            return newState;
        case CLEAR:
            return DEFAULT;
        default:
            return state;
    }
};

const store = createStore(reducer);

//React:
class CalcKey extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (/\d|\+|\*|\/|\./.test(this.props.code))
            this.props.click(this.props.code);
        else this.props.click();
    }

    render() {
        return (
            <div className={"g-1 col-" + this.props.size}>
                <button
                    className={"col-12 btn " + this.props.className}
                    id={this.props.ids}
                    onClick={this.handleClick}
                >
                    {this.props.code}
                </button>
            </div>
        );
    }
}

class CalcDisplay extends React.Component {
    render() {
        return (
            <div id="display" className="rounded bg-light">
                <div className="text-end fs-6">
                    {this.props.memory}
                    {this.props.operator}
                </div>
                <div className="text-end fs-4">{this.props.input}</div>
            </div>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div className="card w-50 border-light">
                <div className="card-body d-grid bg-dark rounded gap-2">
                    <div className="row">
                        <CalcDisplay
                            memory={this.props.memory}
                            input={this.props.input}
                            operator={this.props.operator}
                        />
                    </div>
                    <div className="d-grip g-2">
                        <div className="row">
                            <CalcKey
                                className="btn-danger"
                                ids="clear"
                                code="AC"
                                click={this.props.clear}
                                size="9"
                            />
                            <CalcKey
                                className="btn-secondary"
                                ids="add"
                                code="+"
                                click={this.props.operators}
                                size="3"
                            />
                        </div>
                        <div className="row">
                            <CalcKey
                                className="btn-light"
                                ids="seven"
                                code="7"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="eight"
                                code="8"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="nine"
                                code="9"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-secondary"
                                ids="subtract"
                                code="-"
                                click={this.props.substract}
                                size="3"
                            />
                        </div>
                        <div className="row">
                            <CalcKey
                                className="btn-light"
                                ids="four"
                                code="4"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="five"
                                code="5"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="six"
                                code="6"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-secondary"
                                ids="multiply"
                                code="*"
                                click={this.props.operators}
                                size="3"
                            />
                        </div>
                        <div className="row">
                            <CalcKey
                                className="btn-light"
                                ids="one"
                                code="1"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="two"
                                code="2"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="three"
                                code="3"
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-secondary"
                                ids="divide"
                                code="/"
                                click={this.props.operators}
                                size="3"
                            />
                        </div>
                        <div className="row">
                            <CalcKey
                                className="btn-light"
                                ids="zero"
                                code="0"
                                click={this.props.numbers}
                                size="6"
                            />
                            <CalcKey
                                className="btn-light"
                                ids="decimal"
                                code="."
                                click={this.props.numbers}
                                size="3"
                            />
                            <CalcKey
                                className="btn-success"
                                ids="equals"
                                code="="
                                click={this.props.equals}
                                size="3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//React-Redux:
const mapStateToProps = (state) => {
    return {
        memory: state.memory,
        operator: state.operator,
        input: state.input
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        numbers: (x) => {
            return dispatch(typeNumber(x));
        },
        operators: (x) => {
            return dispatch(typeOperator(x));
        },
        substract: (x) => {
            return dispatch(typeSubstract());
        },
        equals: (x) => {
            return dispatch(typeEquals());
        },
        clear: (x) => {
            return dispatch(reset());
        }
    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Calculator);

function Calc() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    )
}

export default Calc;