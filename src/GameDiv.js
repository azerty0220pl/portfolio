import React from "react";
import Link from './Link.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

class GameDiv extends React.Component {
    render () {
        return (
            <div className='row m-5'>
              <div className="col-sm-4 d-flex align-items-center">
                <img className='rounded img-fluid' src={this.props.icon} alt='' />
              </div>
              <div className='col-sm-8 d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center mt-3'>{this.props.gameName}</h3>
                <p className='text-center'>{this.props.des}</p>
                <div className='w-50 d-flex justify-content-evenly'>
                  <Link link={this.props.git}><FontAwesomeIcon className="text-dark" icon={ faGithub } /></Link>
                  <Link link={this.props.play}><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></Link>
                </div>
              </div>
            </div>
        );
    }
}

export default GameDiv;