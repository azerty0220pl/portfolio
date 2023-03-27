import logo from './Azerty0220.png';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-sm justify-content-between fixed-top" style={{"backgroundColor": "#20c997"}}>
          <a href="#home" className="navbar-brand">
            <img className="img-fluid mx-2" style={{ 'height': '2rem' }} src={logo} alt=""/>
            Szymon Kokot
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapse">
            <ul className="navbar-nav mx-2">
              <li className="nav-item"><a className="nav-link" href="#about">About me</a></li>
              <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
              <li className="nav-item"><a className="nav-link" href="#games">Games</a></li>
            </ul>
          </div>
        </nav>
    );
};

export default Navbar;