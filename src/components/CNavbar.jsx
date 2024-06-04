import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Router> {/* Wrap your Navbar component with Router */}
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img className="nav_logo" src="images/logo.png" />
          <h1 className="app__navbar-logo-bigg">Heritage </h1>
          <h1 className="app__navbar-logo-bigg">Bioscope</h1>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link to="https://heritagebioscope.netlify.app/">Home</Link>
          </li>
          <li className="p__opensans">
            <Link to="https://heritagebioscope.netlify.app/AboutUs">About Us</Link>
          </li>
          <li className="p__opensans">
            <Link to="/"> Documentation </Link>
          </li>
          <li className="p__opensans">
            <Link to="https://heritagebioscope.netlify.app/Blog">Blog </Link>
          </li>
          <li className="p__opensans">
            <Link to="https://heritagebioscope.netlify.app/Community">Community</Link>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <AiOutlineClose
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    <Link to="/AboutUs">About Us</Link>
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={() => setToggleMenu(false)}>
                    <Link to="/Blog">Blog </Link>
                  </a>
                </li>
                <li>
                  <a href="#awards" onClick={() => setToggleMenu(false)}>
                    <Link to="/Community">Community</Link>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
