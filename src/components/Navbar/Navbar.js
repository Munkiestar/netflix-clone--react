import React, { useEffect, useState } from "react";
import "./Navbar.css";

import netflix_logo from "../../assets/netflix.svg";
import netflix_avatar from "../../assets/netflix-avatar.png";

function Navbar() {
  const [showNavBar, handleShowNavBar] = useState(false);

  let handleScroll = () => {
    if (window.scrollY > 100) {
      handleShowNavBar(true);
    } else {
      handleShowNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${showNavBar && "nav__black"}`}>
      <img className="nav__logo" src={netflix_logo} alt="Netflix Logo" />

      <img className="nav__avatar" src={netflix_avatar} alt="Netflix Avatar" />
    </div>
  );
}

export default Navbar;
