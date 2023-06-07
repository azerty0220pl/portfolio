import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

import quotes from "./quotes.json"

const QUOTES = quotes.quotes;
const AUTHORS = quotes.authors;

class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quoteNum: Math.floor(Math.random() * QUOTES.length)
		};
		this.newQuote = this.newQuote.bind(this);
	}

	newQuote() {
		let x = Math.floor(Math.random() * QUOTES.length);
		while (x === this.state.quoteNum)
			x = Math.floor(Math.random() * QUOTES.length);

		this.setState({ quoteNum: x });
	}

	render() {
		return (
			<div className="card center w-50 bg-light.bg-gradient" id="quote-box">
				<div className="card-body" style={{ margin: 'auto 0' }}>
					<p className="blockquote text-center" id="text">{QUOTES[this.state.quoteNum]}</p>
					<p className="w-75 center blockquote-footer text-end" id="author">{AUTHORS[this.state.quoteNum]}</p>
				</div>
				<div className="card-footer">
					<div className="flex justify-content-around row">
						<a id="tweet-quote" className="col-auto center" href='https://twitter.com/intent/tweet' rel="noreferrer" target="_blank">Share on Twitter</a>
						<button className="btn col-auto center btn-primary" id="new-quote" onClick={this.newQuote}>New Quote</button>
					</div>
				</div>
			</div>
		);
	}
}

export default QuoteBox;