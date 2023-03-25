import logo from './Azerty0220.png';

function App() {
  return (
    <div>
      <header className="fluid-container">
        <nav className="navbar navbar-light bg-light navbar-expand-lg justify-content-between fixed-top">
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
    </div>
  );
}

export default App;
