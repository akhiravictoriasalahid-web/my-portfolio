import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="nav-content">
              <Link to="/" className="logo">Akhira.</Link>

              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>
            </div>
        </nav>
        </>
    )
};

export default Navbar;