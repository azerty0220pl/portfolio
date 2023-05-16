import React from "react";

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="text-dark" target="_blank" rel="noreferrer">{this.props.children}</a>
        );
    }
}

export default Link;