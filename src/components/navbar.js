import React, { useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
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
      className="fixed w-full z-50 transition ease-out duration-350"
    >
      <div className="container xl h-28 flex justify-between items-center mx-auto xl:px-24 px-12">
        <div>
          <Link to="/">
            <img className="w-40 h-28" src={TracerLogo} alt="Tracer Logo" />
          </Link>
        </div>
        <div className="hidden sm:flex items-center">
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
          <div>
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
      </div>
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
