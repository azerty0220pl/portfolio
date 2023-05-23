import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

const QUOTES = ['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote10', 'quote11', 'quote12'];
const AUTHORS = ['author1', 'author2', 'author3', 'author4', 'author5', 'author6', 'author7', 'author8', 'author9', 'author10', 'author11', 'author12'];

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
		while (x == this.state.quoteNum)
			x = Math.floor(Math.random() * QUOTES.length);

		this.setState({ quoteNum: x });
	}

	render() {
		return (
			<div class="card center w-25 bg-light.bg-gradient" id="quote-box">
				<div class="card-body" style={{ margin: 'auto 0' }}>
					<p class="blockquote text-center" id="text">{QUOTES[this.state.quoteNum]}</p>
					<p class="w-25 center blockquote-footer text-end" id="author">{AUTHORS[this.state.quoteNum]}</p>
				</div>
				<div class="card-footer">
					<div class="center w-50 row">
						<a id="tweet-quote" class="col-auto center" href='https://twitter.com/intent/tweet' target="_blank">Share on Twitter</a>
						<button class="btn col-auto center btn-primary" id="new-quote" onClick={this.newQuote}>New Quote</button>
					</div>
				</div>
			</div>
		);
	}
}

export default QuoteBox;