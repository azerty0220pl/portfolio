import logo from './Azerty0220.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFreeCodeCamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
          <h2 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/responsive-web-design" target="_blank">Responsive Web Design Certification</a></h2>
          <h2 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures Certification</a></h2>
          <h2 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/front-end-development-libraries" target="_blank">Front End Development libraries Certifications</a></h2>
          <h2 className='text-center m-5'><a className="text-dark" href="https://www.freecodecamp.org/certification/SzymonKokot/back-end-development-and-apis" target="_blank">Back End Development and APIs Certification</a></h2>
        </section>
      </main>
    </div>
  );
}

export default App;