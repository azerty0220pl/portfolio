import React from "react";
import Link from './Link.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

class GameDiv extends React.Component {
  render() {
    return (
      <div className='game'>
        <img className='game-icon' src={this.props.icon} alt='' />
        <div className='game-info'>
          <h3 className='game-title'>{this.props.gameName}</h3>
          <p className='sec-paragraph'>{this.props.des}</p>
          <div className='links'>
            <Link link={this.props.git}><FontAwesomeIcon className="text-dark" icon={faGithub} /></Link>
            <Link link={this.props.play}><FontAwesomeIcon className="text-dark" icon={faGooglePlay} /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameDiv;