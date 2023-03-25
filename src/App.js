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
              <a href="https://www.freecodecamp.org/SzymonKokot"><FontAwesomeIcon className="text-dark" icon={ faFreeCodeCamp } /></a>
              <a href="https://github.com/azerty0220pl"><FontAwesomeIcon className="text-dark" icon={ faGithub } /></a>
              <a href="https://www.linkedin.com/in/szymon-kokot-b3143b26a/"><FontAwesomeIcon className="text-dark" icon={ faLinkedin } /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;