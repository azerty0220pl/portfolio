import React from 'react';

import Link from './Components/Link.js'
import GameDiv from './Components/GameDiv.js';
import CertificationDiv from './Components/CertificationDiv.js';

import en from './Languages/en.json';
import pl from './Languages/pl.json';
import es from './Languages/es.json';

import logo from './Icons/Azerty0220.png';
import srIcon from './Icons/squareRun.png';
import nriiIcon from './Icons/neonRideII.png';
import nrIcon from './Icons/neonRide.png';
import fcIcon from './Icons/flappyCube.png';
import ccIcon from './Icons/cubeClimb.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFreeCodeCamp, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: en,
      langDd: false
    }

    this.changeLanguage = this.changeLanguage.bind(this);
    this.langDropdown = this.langDropdown.bind(this);
  }

  changeLanguage(event) {
    switch (event.target.value) {
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

  langDropdown() {
    this.setState({ langDd: !this.state.langDd });
  }

  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <a href="#home" className="logo">
              <img className="img-fluid mx-2" style={{ 'height': '2rem' }} src={logo} alt="" />
              <p>{this.state.lang.name}</p>
            </a>
            <div className="menu relative inline-block text-left">
              <a className="menu-button" href="#about">{this.state.lang.aboutMe}</a>
              <a className="menu-button" href="#certifications">{this.state.lang.certifications}</a>
              <a className="menu-button" href="#games">{this.state.lang.games}</a>
              <a className="menu-button" href="#projects">{this.state.lang.projects}</a>
              <button className="menu-button" onClick={this.langDropdown}>
                {this.state.lang.lang}
                <div className={this.state.langDd ? "langT" : "langF"}>
                  <button className="menu-button" value="pl" onClick={this.changeLanguage}>Polski</button>
                  <button className="menu-button" value="en" onClick={this.changeLanguage}>English</button>
                  <button className="menu-button" value="es" onClick={this.changeLanguage}>Español</button>
                </div>
              </button>
            </div>
          </nav>
        </header>
        <main>
          <section id="home">
            <h1 className="main-title">{this.state.lang.name}</h1>
            <p className="text">{this.state.lang.shortDes}</p>
            <div className="links">
              <Link link="https://www.freecodecamp.org/SzymonKokot"><FontAwesomeIcon icon={faFreeCodeCamp} /></Link>
              <Link link="https://github.com/azerty0220pl"><FontAwesomeIcon icon={faGithub} /></Link>
              <Link link="https://www.linkedin.com/in/szymon-kokot-b3143b26a/"><FontAwesomeIcon icon={faLinkedin} /></Link>
              <Link link="https://play.google.com/store/apps/developer?id=Azerty0220pl"><FontAwesomeIcon icon={faGooglePlay} /></Link>
            </div>
            <svg className="decoration" height="25vh" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,100 0,100" />
            </svg>
          </section>
          <section id="about">
            <h1 className="sec-title">{this.state.lang.aboutMe}</h1>
            <p className="sec-paragraph">
              {this.state.lang.longDes}
            </p>
            <svg className="odd-decoration" height="4rem" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="100,0 100,100 0,100" />
            </svg>
          </section>
          <section id="certifications">
            <h1 className="sec-title">{this.state.lang.certifications}</h1>
            <p className="sec-paragraph">{this.state.lang.certParagraph}</p>
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/responsive-web-design"
              certificationTitle="Responsive Web Design Certification" />
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/javascript-algorithms-and-data-structures"
              certificationTitle="JavaScript Algorithms and Data Structures Certification"
            />
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/front-end-development-libraries"
              certificationTitle="Front End Development libraries Certification"
            />
            <CertificationDiv
              certificationLink="https://www.freecodecamp.org/certification/SzymonKokot/back-end-development-and-apis"
              certificationTitle="Back End Development and APIs Certification"
            />
            <svg className="even-decoration" height="4rem" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,100 0,100" />
            </svg>
          </section>
          <section id="games">
            <h1 className="sec-title">{this.state.lang.games}</h1>
            <p>
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
            <svg className="odd-decoration" height="4rem" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="100,0 100,100 0,100" />
            </svg>
          </section>
          <section id="projects">
            <h1 className="sec-title">{this.state.lang.projects}</h1>
            <p>{this.state.lang.projectsParagraph}</p>
            <Link link='/projects'><FontAwesomeIcon icon={faGamepad} /></Link>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;