import Navbar from './Navbar.js';
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
              <a href="https://www.freecodecamp.org/SzymonKokot" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-dark" icon={ faFreeCodeCamp } /></a>
              <a href="https://github.com/azerty0220pl" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a href="https://www.linkedin.com/in/szymon-kokot-b3143b26a/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-dark" icon={ faLinkedin } /></a>
              <a href="https://play.google.com/store/apps/developer?id=Azerty0220pl" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
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
              earning <a className="text-dark" href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp.org</a> certifications.
            </p>
          </div>
        </section>
        <section id="certifications" className="bg-secondary p-5">
          <h1 className='text-center m-3'>Certifications</h1>
          <p className='text-center'>Certifications I earnd from <a className="text-dark" href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp.org</a></p>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/responsive-web-design" target="_blank" rel="noreferrer">Responsive Web Design Certification</a></h3>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">JavaScript Algorithms and Data Structures Certification</a></h3>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/front-end-development-libraries" target="_blank" rel="noreferrer">Front End Development libraries Certifications</a></h3>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/back-end-development-and-apis" target="_blank" rel="noreferrer">Back End Development and APIs Certification</a></h3>
        </section>
        <section id="games" className='bg-primary p-5'>
          <h1 className='text-center m-3'>Games</h1>
          <p className="text-center">
            Mobile games I made with Unity3D, c#, blender and inkscape. All of them are published 
            on Play Store.
          </p>
          <div className='row my-4'>
            <img className="rounded col-sm-4" src={srIcon} alt='Square Run Icon' />
            <div className='col-sm-8 d-flex flex-column justify-content-center align-items-center'>
              <h3 className='text-center'>Square Run</h3>
              <p className='text-center'>Avoid obstacles, climb, find the entrance, climb, avoid obstacles, climb, climb, climb...</p>
              <div className='w-50 d-flex justify-content-evenly'>
                <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/azerty0220pl/VerticalFlappyCube"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
                <a className="text-dark" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.azerty0220pl.climbingsquare"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
              </div>
            </div>
        </div>
        <div className='row my-4'>
          <img className="rounded col-sm-4" src={nriiIcon} alt='Neon Ride II Icon' />
          <div className='col-sm-8 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Neon Ride II</h3>
            <p className='text-center'>Second part of Neon Ride, will you be able to go even further?</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/azerty0220pl/Neon_Ride_II"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.azerty0220pl.neonrideii"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        <div className='row my-4'>
          <img className="rounded col-sm-4" src={nrIcon} alt='Neon Ride Icon' />
          <div className='col-sm-8 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Neon Ride</h3>
            <p className='text-center'>Go as fast and as far as you can. Will you be able to avoid all obstacles in your way?</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/azerty0220pl/Neon_Ride"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.Azerty0220pl.NeonRide"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        <div className='row my-4'>
          <img className="rounded col-sm-4" src={fcIcon} alt='Flappy Cube 2D Icon' />
          <div className='col-sm-8 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Flappy Cube 2D</h3>
            <p className='text-center'>Try to get as high as you can without touching the black walls on both sides! Tap the screen and try to get to the end of the journey.</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/azerty0220pl/Flappy-Cube"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.Azerty0220pl.FlappyCube"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        <div className='row my-4'>
          <img className="rounded col-sm-4" src={ccIcon} alt='Cube Climb Icon' />
          <div className='col-sm-8 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Cube Climb</h3>
            <p className='text-center'>Avoid obstacles, choose your favourite skin and enjoy this endless runner. Get as high as you can, are you ready for the challenge?</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/azerty0220pl/Cube-Run"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.azerty0220pl.CubeRun"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}

export default App;