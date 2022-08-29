import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";

function Header(props) {
  const showMenu = useRef();
  const hideMenu = useRef();
  const navbar = useRef();

  function toggleShowMenu() {
    showMenu.current.children[0].classList.remove("show-menu");
    hideMenu.current.children[0].classList.add("hide-menu");
    navbar.current.classList.add("responsive-navbar");
  }

  function toggleHideMenu() {
    showMenu.current.children[0].classList.add("show-menu");
    hideMenu.current.children[0].classList.remove("hide-menu");
    navbar.current.classList.remove("responsive-navbar");
  }

  return (
    <div className="header">
      <h1 className="logo">JavaScript30</h1>
      <nav ref={navbar}>
        <Link className="link" to="/">
          Projects
        </Link>
        <Link className="link" to="/keypoints">
          Key Points
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
      <div ref={showMenu}>
        <CgMenu onClick={toggleShowMenu} className="menu-btn show-menu" />
      </div>

      <div ref={hideMenu}>
        <CgClose onClick={toggleHideMenu} className="menu-btn" />
      </div>
    </div>
  );
}

export default Header;
