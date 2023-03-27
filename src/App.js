import logo from './Azerty0220.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFreeCodeCamp, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="fluid-container">
      <header>
        <nav className="navbar bg-primary navbar-expand-lg justify-content-between fixed-top">
          <a href="#home" className="navbar-brand">
            <img className="img-fluid mx-2" style={{ 'height': '2rem' }} src={logo} alt=""/>
            Szymon Kokot
          </a>
          <ul className="navbar-nav mx-2">
            <li className="nav-item"><a className="nav-link" href="#about">About me</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#games">Games</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="vh-100 bg-secondary d-flex align-items-center justify-content-center">
          <div>
            <h1 className="text-center">Szymon Kokot</h1>
            <p className="text-center">Fullstack web developer and mobile game developer.</p>
            <div className="d-flex justify-content-evenly">
              <a href="https://www.freecodecamp.org/SzymonKokot" target="_blank"><FontAwesomeIcon className="text-dark" icon={ faFreeCodeCamp } /></a>
              <a href="https://github.com/azerty0220pl" target="_blank"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a href="https://www.linkedin.com/in/szymon-kokot-b3143b26a/" target="_blank"><FontAwesomeIcon className="text-dark" icon={ faLinkedin } /></a>
            </div>
          </div>
        </section>
        <section id="about" className="bg-light p-4">
          <h1 className="text-center m-3">About me</h1>
          <div className="d-flex justify-content-center">
            <p className="text-center m-3 w-75">
              My name is Szymon and I am 20 years old. I am from Poland but I live in Spain. 
              Programming was my passion for quite some time. I started learning with Arduino and 
              Unity with C# all by myself. In the meantime I started a degree in computer science 
              at the Polytechnic University of Madrid. After two years I changed to the University of 
              Murcia were I abandoned my studies as I was not happy with them. It was then when I 
              decided to learn fullstack web development by
              earning <a className="text-dark" href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp.org</a> certifications.
            </p>
          </div>
        </section>
        <section id="certifications" className="bg-light p-1">
          <h1 className='text-center m-3'>Certifications</h1>
          <p className='text-center'>Certifications I earnd from <a className="text-dark" href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp.org</a></p>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/responsive-web-design" target="_blank">Responsive Web Design Certification</a></h3>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures Certification</a></h3>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/front-end-development-libraries" target="_blank">Front End Development libraries Certifications</a></h3>
          <h3 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/back-end-development-and-apis" target="_blank">Back End Development and APIs Certification</a></h3>
        </section>
        <section id="games" className='bg-light p-1'>
          <h1 className='text-center m-3'>Games</h1>
          <p className="text-center">
            Mobile games I made with Unity3D, c#, blender and inkscape. All of them are published 
            on Play Store.
          </p>
          <div className='d-flex justify-content-evenly m-4'>
            <img className="rounded" src="https://play-lh.googleusercontent.com/0rPcTliU7j7UNpHSwMGuYuI3K5LSINBbxw_TvFsuRrxZI3Ofo7jbRIhuA26CZhAO9Q=w240-h480-rw" alt='Square Run Icon' />
            <div className='w-75 d-flex flex-column justify-content-center align-items-center'>
              <h3 className='text-center'>Square Run</h3>
              <p className='text-center'>Avoid obstacles, climb, find the entrance, climb, avoid obstacles, climb, climb, climb...</p>
              <div className='w-50 d-flex justify-content-evenly'>
                <a className="text-dark" target="_blank" href="https://github.com/azerty0220pl/VerticalFlappyCube"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
                <a className="text-dark" target="_blank" href="https://play.google.com/store/apps/details?id=com.azerty0220pl.climbingsquare"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
              </div>
            </div>
        </div>
        <div className='d-flex justify-content-evenly m-4'>
          <img className="rounded" src="https://play-lh.googleusercontent.com/YrJkd8h1WaQ6pJxpgYfP6_7R5ZKG4Ke8cBBtIoc0qYGVq4pb1rsGWLLqWWdjhBhafyc=w240-h480-rw" alt='Neon Ride II Icon' />
          <div className='w-75 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Neon Ride II</h3>
            <p className='text-center'>Second part of Neon Ride, will you be able to go even further?</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" href="https://github.com/azerty0220pl/Neon_Ride_II"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" href="https://play.google.com/store/apps/details?id=com.azerty0220pl.neonrideii"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-evenly m-4'>
          <img className="rounded" src="https://play-lh.googleusercontent.com/TrMoCrluSaEtwFE7aHLKP51RBYVrqrSqb5PZWi2l1Kp8V3n0-1y4bSrmMQLJYBp-3r8=w240-h480-rw" alt='Neon Ride Icon' />
          <div className='w-75 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Neon Ride</h3>
            <p className='text-center'>Go as fast and as far as you can. Will you be able to avoid all obstacles in your way?</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" href="https://github.com/azerty0220pl/Neon_Ride"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" href="https://play.google.com/store/apps/details?id=com.Azerty0220pl.NeonRide"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-evenly m-4'>
          <img className="rounded" src="https://play-lh.googleusercontent.com/6OTDWhgWwbyQyDJmiHPadXHrk3gw7nn9hUurNQCtEvWjWeVT4NBKY_nZIAApOMiH-Q=w300" alt='Flappy Cube 2D Icon' />
          <div className='w-75 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Flappy Cube 2D</h3>
            <p className='text-center'>Try to get as high as you can without touching the black walls on both sides! Tap the screen and try to get to the end of the journey.</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" href="https://github.com/azerty0220pl/Flappy-Cube"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" href="https://play.google.com/store/apps/details?id=com.Azerty0220pl.FlappyCube"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-evenly m-4'>
          <img className="rounded" src="https://play-lh.googleusercontent.com/2Kdr0aqBE-YeHGfm9usYtF0ltoPPUsZji3SagvLNZzxeP8W2jlZXn_Yn52nfJmCCIHg=w240-h480-rw" alt='Cube Climb Icon' />
          <div className='w-75 d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center'>Cube Climb</h3>
            <p className='text-center'>Avoid obstacles, choose your favourite skin and enjoy this endless runner. Get as high as you can, are you ready for the challenge?</p>
            <div className='w-50 d-flex justify-content-evenly'>
              <a className="text-dark" target="_blank" href="https://github.com/azerty0220pl/Cube-Run"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a className="text-dark" target="_blank" href="https://play.google.com/store/apps/details?id=com.azerty0220pl.CubeRun"><FontAwesomeIcon className="text-dark" icon={ faGooglePlay } /></a>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}

export default App;