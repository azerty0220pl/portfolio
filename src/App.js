import Navbar from './Navbar.js';
import Link from './Link.js'
import GameDiv from './GameDiv.js';
import srIcon from './squareRun.png';
import nriiIcon from './neonRideII.png';
import nrIcon from './neonRide.png';
import fcIcon from './flappyCube.png';
import ccIcon from './cubeClimb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFreeCodeCamp, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="fluid-container">
      <header>
        <Navbar />
      </header>
      <main>
        <section id="home" className="vh-100 bg-light d-flex align-items-center justify-content-center">
          <div>
            <h1 className="text-center">Szymon Kokot</h1>
            <p className="text-center">Fullstack web developer and mobile game developer.</p>
            <div className="d-flex justify-content-evenly">
              <Link link="https://www.freecodecamp.org/SzymonKokot"><FontAwesomeIcon icon={ faFreeCodeCamp } /></Link>
              <Link link="https://github.com/azerty0220pl" target="_blank"><FontAwesomeIcon icon={ faGithub } /></Link>
              <Link href="https://www.linkedin.com/in/szymon-kokot-b3143b26a/"><FontAwesomeIcon icon={ faLinkedin } /></Link>
              <Link href="https://play.google.com/store/apps/developer?id=Azerty0220pl"><FontAwesomeIcon icon={ faGooglePlay } /></Link>
            </div>
          </div>
        </section>
        <section id="about" className="bg-primary p-5">
          <h1 className="text-center m-3">About me</h1>
          <div className="d-flex justify-content-center">
            <p className="text-center m-3 w-75">
              My name is Szymon and I am 20 years old. I am from Poland but I live in Spain. 
              Programming was my passion for quite some time. I started learning with Arduino and 
              Unity with C# all by myself. In the meantime I started a degree in computer science 
              at the Polytechnic University of Madrid. After two years I changed to the University of 
              Murcia were I abandoned my studies as I was not happy with them. It was then when I 
              decided to learn fullstack web development by
              earning <Link link="https://www.freecodecamp.org/">freeCodeCamp.org</Link> certifications.
            </p>
          </div>
        </section>
        <section id="certifications" className="bg-secondary p-5">
          <h1 className='text-center m-3'>Certifications</h1>
          <p className='text-center'>Certifications I earnd from <Link link="https://www.freecodecamp.org/">freeCodeCamp.org</Link></p>
          <h3 className='text-center m-5'><Link link="https://www.freecodecamp.org/certification/SzymonKokot/responsive-web-design">Responsive Web Design Certification</Link></h3>
          <h3 className='text-center m-5'><Link link="https://www.freecodecamp.org/certification/SzymonKokot/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures Certification</Link></h3>
          <h3 className='text-center m-5'><Link link="https://www.freecodecamp.org/certification/SzymonKokot/front-end-development-libraries">Front End Development libraries Certifications</Link></h3>
          <h3 className='text-center m-5'><Link link="https://www.freecodecamp.org/certification/SzymonKokot/back-end-development-and-apis">Back End Development and APIs Certification</Link></h3>
        </section>
        <section id="games" className='bg-primary p-5'>
          <h1 className='text-center m-3'>Games</h1>
          <p className="text-center">
            Mobile games I made with Unity3D, c#, blender and inkscape. All of them are published 
            on Play Store.
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

export default App;