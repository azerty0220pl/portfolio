import React from 'react';

import Link from './Link.js'
import GameDiv from './GameDiv.js';
import CertificationDiv from './CertificationDiv.js';

import en from './en.json';
import pl from './pl.json';
import es from './es.json';

import logo from './Azerty0220.png';
import srIcon from './squareRun.png';
import nriiIcon from './neonRideII.png';
import nrIcon from './neonRide.png';
import fcIcon from './flappyCube.png';
import ccIcon from './cubeClimb.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFreeCodeCamp, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: en
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(event){
    switch(event.target.value) {
      case 'en':
        this.setState({ lang: en });
        break;
      case 'pl':
        this.setState({ lang: pl });
        break;
      case 'es':
        this.setState({ lang: es });
        break;
      default:
        this.setState({ lang: pl });
    }
  }

  render() {
    return (
      <div className="fluid-container">
        <header>
          <nav className="navbar navbar-expand-sm justify-content-between fixed-top" style={{"backgroundColor": "#20c997"}}>
            <a href="#home" className="navbar-brand">
              <img className="img-fluid mx-2" style={{ 'height': '2rem' }} src={logo} alt=""/>
              {this.state.lang.name}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="collapse">
              <ul className="navbar-nav mx-2">
                <li className="nav-item"><a className="nav-link" href="#about">{this.state.lang.aboutMe}</a></li>
                <li className="nav-item"><a className="nav-link" href="#certifications">{this.state.lang.certifications}</a></li>
                <li className="nav-item"><a className="nav-link" href="#games">{this.state.lang.games}</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.state.lang.lang }
                  </a>
                  <ul className="dropdown-menu " style={{"backgroundColor": "#20c997"}} aria-labelledby="dropdownMenuLink">
                    <li><button className="dropdown-item" value="pl" onClick={this.changeLanguage}>Polski</button></li>
                    <li><button className="dropdown-item" value="en" onClick={this.changeLanguage}>English</button></li>
                    <li><button className="dropdown-item" value="es" onClick={this.changeLanguage}>Español</button></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <section id="home" className="vh-100 bg-light d-flex align-items-center justify-content-center">
            <div>
              <h1 className="text-center">{this.state.lang.name}</h1>
              <p className="text-center">{this.state.lang.shortDes}</p>
              <div className="d-flex justify-content-evenly">
                <Link link="https://www.freecodecamp.org/SzymonKokot"><FontAwesomeIcon icon={ faFreeCodeCamp } /></Link>
                <Link link="https://github.com/azerty0220pl"><FontAwesomeIcon icon={ faGithub } /></Link>
                <Link link="https://www.linkedin.com/in/szymon-kokot-b3143b26a/"><FontAwesomeIcon icon={ faLinkedin } /></Link>
                <Link link="https://play.google.com/store/apps/developer?id=Azerty0220pl"><FontAwesomeIcon icon={ faGooglePlay } /></Link>
              </div>
            </div>
          </section>
          <section id="about" className="bg-primary p-5">
            <h1 className="text-center m-3">{this.state.lang.aboutMe}</h1>
            <div className="d-flex justify-content-center">
              <p className="text-center m-3 w-75">
              {this.state.lang.longDes}
              </p>
            </div>
          </section>
          <section id="certifications" className="bg-secondary p-5">
            <h1 className='text-center m-3'>{this.state.lang.certifications}</h1>
            <p className='text-center'>{this.state.lang.certParagraph}</p>
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/responsive-web-design"
              certificationTitle="Responsive Web Design Certification"
            />
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/javascript-algorithms-and-data-structures"
              certificationTitle="JavaScript Algorithms and Data Structures Certification"
            />
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/front-end-development-libraries"
              certificationTitle="Front End Development libraries Certifications"
              project1Link="https://codepen.io/azerty0220pl/pen/vYzpzoX"
              project1Title="Random Quote Machine"
              project2Link="https://codepen.io/azerty0220pl/pen/GRXyzVG"
              project2Title="Markdown Previewer"
              project3Link="https://codepen.io/azerty0220pl/full/ZEMrNPd"
              project3Title="Drum Machine"
              project4Link="https://codepen.io/azerty0220pl/full/vYzRZjj"
              project4Title="JavaScript Calculator"
              project5Link="https://codepen.io/azerty0220pl/pen/WNgzMmK"
              project5Title="25 + 5 Clock"
            />
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/back-end-development-and-apis"
              certificationTitle="Back End Development and APIs Certification"
              project1Link="https://timestamp-microservice-szymonkokot.onrender.com/"
              project1Title="Timestamp Microservice"
              project2Link="https://request-header-parser-microservice-bjyg.onrender.com/"
              project2Title="Request Header Parser Microservice"
              project3Link="https://url-shortener-microservice-szymonkokot.onrender.com/"
              project3Title="URL Shortener Microservice"
              project4Link="https://exercise-tracker-szymonkokot.onrender.com/"
              project4Title="Exercise Tracker"
              project5Link="https://file-metadata-microservice-szymonkokot.onrender.com/"
              project5Title="File Metadata Microservice"
            />
          </section>
          <section id="games" className='bg-primary p-5'>
            <h1 className='text-center m-3'>{this.state.lang.games}</h1>
            <p className="text-center">
            {this.state.lang.gamesParagraph}
            </p>
            <GameDiv
              icon={srIcon}
              gameName='Square Run'
              des='Avoid obstacles, climb, find the entrance, climb, avoid obstacles, climb, climb, climb...'
              git="https://github.com/azerty0220pl/VerticalFlappyCube"
              play="https://play.google.com/store/apps/details?id=com.azerty0220pl.climbingsquare" />
            <GameDiv
              icon={nriiIcon}
              gameName='Neon Ride II'
              des='Second part of Neon Ride, will you be able to go even further?'
              git="https://github.com/azerty0220pl/Neon_Ride_II"
              play="https://play.google.com/store/apps/details?id=com.azerty0220pl.neonrideii" />
            <GameDiv
              icon={nrIcon}
              gameName='Neon Ride'
              des='Go as fast and as far as you can. Will you be able to avoid all obstacles in your way?'
              git="https://github.com/azerty0220pl/Neon_Ride"
              play="https://play.google.com/store/apps/details?id=com.Azerty0220pl.NeonRide" />
            <GameDiv
              icon={fcIcon}
              gameName='Flappy Cube 2D'
              des='Try to get as high as you can without touching the black walls on both sides! Tap the screen and try to get to the end of the journey.'
              git="https://github.com/azerty0220pl/Flappy-Cube"
              play="https://play.google.com/store/apps/details?id=com.Azerty0220pl.FlappyCube" />
            <GameDiv
              icon={ccIcon}
              gameName='Cube Climb'
              des='Avoid obstacles, choose your favourite skin and enjoy this endless runner. Get as high as you can, are you ready for the challenge?'
              git="https://github.com/azerty0220pl/Cube-Run"
              play="https://play.google.com/store/apps/details?id=com.azerty0220pl.CubeRun" />
          </section>
        </main>
      </div>
    );
  }
}

export default App;