import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <h1 className="logo">JavaScript30</h1>
      <div className="header">
        <Link className="link" to="/">
          Projects
        </Link>
        <Link className="link" to="/keypoints">
          Key Points
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </>
  );
}

export default Header;
