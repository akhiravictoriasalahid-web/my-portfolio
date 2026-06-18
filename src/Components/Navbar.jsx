
import "./Navbar.css";

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="nav-content">
              <a href="#home" className="logo">Akhira.</a>

              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Work Experience</a></li>                 
              </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;