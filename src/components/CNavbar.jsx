import React from "react";
function CNavbar({ filterItem, diversityList }) {
  return (
    <nav className="navbar">
      <div className="navigation-bar">
        <div className="navbar-logo">
          {/* <img className="nav-logo" src=""/> */}
          <h1 className="heritage">HeritageBioscope</h1>
        </div>
        <div className="navbar-links">
          <div>Home</div>
          <div>About Us</div>
          <div>Blog</div>
          <div>Community</div>
        </div>
      </div>
      <div className="btn-group">
        {diversityList.map((curElem) => {
          return (
            <button
              className="btn-group__item"
              onClick={() => filterItem(curElem)}
            >
              {curElem}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
export default CNavbar;
