import React, { useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
// const routes = [
//   { to: '/learn', label: 'Learn' },
//   { to: '/govern', label: 'Govern' },
//   { to: '/launch-pools', label: 'Launch Pools' },
// ];

import TracerLogo from "../../static/img/tracer-logo.svg";

const Navbar = () => {
  const setSolidNav = () => {
    const scrollHeight = document.documentElement.scrollTop;
    const navbar = document.getElementById("nav");
    if (scrollHeight > 50) {
      navbar.style.backgroundColor = "#0000B0";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    setSolidNav();
    window.addEventListener("scroll", function () {
      setSolidNav();
    });
  });

  return (
    <nav
      id="nav"
      className="fixed h-20 w-full flex justify-between items-center z-10"
    >
      <div className="ml-5">
        <Link to="/">
          <img className="w-40 h-32" src={TracerLogo} alt="Tracer Logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="mr-5">
          <Link to="/learn">
            <div className="text-white">Learn</div>
          </Link>
        </div>
        <div className="mr-5">
          <Link to="/govern">
            <div className="text-white">Govern</div>
          </Link>
        </div>
        <div className="mr-5">
          <Button linkTo="/">Launch Pools</Button>
        </div>
      </div>
      <span className="menu-toggle">
        <button className="nav-btn">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </span>
      {/* <menu className="mobile-nav">
        <span className="menu-text">Menu</span>
        <button className="close-btn">
          <img alt="Close button" src={close_btn}/>
        </button>
        <div className="mobile-nav__items">
          <ul>
            {links()}
            <li className="nav-item">
            </li>
          </ul>
          <div className="mobile-socials">
            <a className="social-link" target="_blank" rel="noreferrer" href="">
              <picture>
                <img alt="LinkedIn icon" src={linkedin_icon}/>
              </picture>
            </a>
            <a className="social-link" target="_blank" rel="noreferrer" href="">
              <picture>
                <img alt="Telegram icon" src={telegram_icon}/>
              </picture>
            </a>
            <a className="social-link" target="_blank" rel="noreferrer" href="">
              <picture>
                <img alt="Twitter icon" src={twitter_icon}/>
              </picture>
            </a>
          </div>
        </div>
      </menu> */}
    </nav>
  );
};

Navbar.propTypes = {
  type: PropTypes.string,
};

export default Navbar;
