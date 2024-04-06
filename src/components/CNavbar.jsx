import React from "react";
function CNavbar() {
  return (
    <nav className="navbar">
      <div className="navigation-bar">
        <div className="navbar-logo">
          {/* <img className="nav-logo" src=""/> */}
          <a href="https://heritagebioscope.netlify.app/" className="heritage">HeritageBioscope</a>
        </div>
        <div className="navbar-links">
          <a href="https://heritagebioscope.netlify.app/Blog" className="navbar-link"> Home</a>
          <a href="https://heritagebioscope.netlify.app/AboutUs" className="navbar-link">About Us</a>
          <a href="https://heritagebioscope.netlify.app/Blog" className="navbar-link">Blog</a>
          <a href="https://heritagebioscope.netlify.app/Community" className="navbar-link">Community</a>
        </div>
      </div>
     
    </nav>
  );
}
export default CNavbar;
