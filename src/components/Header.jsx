//import React from "react";
//function Header() {
//    return (
//        <div className="header-container">
//          <img src="images/igdtu.jpg" className="header-image" alt="IGDTUW Campus" />
//          <h1 className="header-title">IGDTUW's Biodiversity Documentation</h1>
//        </div>
//      );
//}
//export default Header;
import React, { useState } from "react";

function Header() {
  const [tiltDirection, setTiltDirection] = useState(null);

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const imageWidth = e.target.offsetWidth;

    if (x < imageWidth / 2) {
      setTiltDirection("left");
    } else {
      setTiltDirection("right");
    }
  };

  const handleMouseLeave = () => {
    setTiltDirection(null);
  };

  return (
    <div className="header-container">
      <img
        src="images/igdtu.jpg"
        className={`header-image ${
          tiltDirection === "left" ? "tilt-left" : tiltDirection === "right" ? "tilt-right" : ""
        }`}
        alt="IGDTUW Campus"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
     
      <h1 className="header-title">IGDTUW's Biodiversity Documentation</h1>
    </div>
  );
}

export default Header;
