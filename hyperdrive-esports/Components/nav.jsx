import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './nav.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="glass">
      <div className="nav-content">
        <Link to="/" className="logo">
          <FontAwesomeIcon icon={faGamepad} className="logo-icon" />
          <span>HyperDrive</span>
        </Link>

        <div className="mobile-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/teams" onClick={toggleMenu}>Teams</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/history" onClick={toggleMenu}>History</Link></li>
          <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;