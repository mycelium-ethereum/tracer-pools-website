import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
import TracerLogo from "../../static/img/tracer-logo.svg";
import Dropdown from "../../static/img/general/dropdown.svg";
import MenuIcon from "../../static/img/general/menu.svg";
import MenuCloseIcon from "../../static/img/general/menu-close.svg";

const Navbar = () => {
  const [transparentNav, setTransparentNav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isCollapsed = () => {
    const width = window.innerWidth;
    return width < 640;
  };
  const setSolidNav = () => {
    const scrollHeight = document.documentElement.scrollTop;
    if (scrollHeight > 1 || isCollapsed()) {
      setTransparentNav(false);
    } else if (!isCollapsed() && scrollHeight < 1) {
      setTransparentNav(true);
    }
    if (isCollapsed()) {
      setNavOpen(false);
    }
  };
  const setActiveLink = () => {
    const path = window.location.pathname;
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    navLinks.forEach((e) => {
      const href = e.getAttribute("href");
      if (href === path) {
        e.classList.add("active");
      }
    });
  };

  useEffect(() => {
    setActiveLink();
    setSolidNav();
    window.addEventListener("scroll", setSolidNav);
    window.addEventListener("resize", setSolidNav);
    return function () {
      window.removeEventListener("scroll", setSolidNav);
      window.removeEventListener("resize", setSolidNav);
    };
  }, []);

  return (
    <nav
      id="nav"
      className={
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 cursor-pointer " +
        (transparentNav ? "bg-transparent" : "bg-navblue")
      }
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="container h-16 flex justify-between items-center mx-auto xl:px-0 px-4">
        <div
          className="relative flex"
          onMouseEnter={() => setDropdownOpen(true)}
        >
          <Link to="/">
            <img
              className="sm:w-24 w-22 h-auto"
              src={TracerLogo}
              alt="Tracer Logo"
            />
          </Link>
          <div
            className="sm:flex hidden ml-3 w-22 h-22 left-0 top-0 z-0 justify-center items-center"
            onClick={() => setDropdownOpen(true)}
          >
            <img className="w-4 h-auto" src={Dropdown} alt="Dropdown toggle" />
          </div>
          {/* <div
            className={
              "dropdown absolute top-14 w-40 p-4 border border-white rounded-lg sm:block hidden transition-opacity duration-500 " +
              (dropdownOpen
                ? "pointer-events-all opacity-100"
                : "pointer-events-none opacity-0")
            }
          >
            <Link to="/perpetuals">
              <span className="block text-white font-normal mb-4">
                Perpetuals
              </span>
            </Link>
            <Link to="/radar">
              <span className="block text-white font-normal">Blog</span>
            </Link>
          </div> */}
        </div>
        <div className="hidden sm:flex items-center">
          <div className="mr-7">
            <Link className="nav-link transition-colors duration-700 p-2 rounded-lg" to="/">
              <span className="text-white font-normal">Home</span>
            </Link>
          </div>
          <div className="mr-7">
            <Link className="nav-link transition-colors duration-700 p-2 rounded-lg" to="/learn">
              <span className="text-white font-normal">Learn</span>
            </Link>
          </div>
          <div className="mr-7">
            <Link className="nav-link transition-colors duration-700 p-2 rounded-lg" to="/radar">
              <span className="text-white font-normal">Radar</span>
            </Link>
          </div>
          <div>
            <Button
              className="sm:mt-0"
              linkTo="https://pools-testing.netlify.app/"
            >
              Launch Pools
            </Button>
          </div>
        </div>
        <div
          className="sm:hidden block"
          onClick={() => setNavOpen((wasOpen) => !wasOpen)}
        >
          <img className="w-6 h-6" src={MenuIcon} alt="Menu" />
        </div>
      </div>
      <menu
        className={
          " fixed transition-all duration-700 h-screen w-full bg-tracerblue top-0 left-0 mt-0 pl-0" +
          (navOpen ? " left-0" : " left-full")
        }
      >
        <button
          className="absolute top-7 right-4 w-6 h-6"
          onClick={() => setNavOpen((wasOpen) => !wasOpen)}
        >
          <img className="w-6 h-6" src={MenuCloseIcon} alt="Menu" />
        </button>
        <div className="flex flex-col justify-center w-60 mx-auto text-center pt-12">
          <div className="mt-6 w-full">
            <Link to="/learn">
              <span className="text-white font-normal text-lg">Learn</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Button
              className="h-12 w-full border border-white font-normal text-lg"
              linkTo="/"
            >
              Launch Pools
            </Button>
          </div>
          <div className="mt-6 w-full">
            <Link to="/perpetuals">
              <span className="text-white font-normal text-lg">Perpetuals</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Link to="/govern">
              <span className="text-white font-normal text-lg">Govern</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Link to="/radar">
              <span className="text-white font-normal text-lg">Blog</span>
            </Link>
          </div>
        </div>
      </menu>
    </nav>
  );
};

Navbar.propTypes = {
  type: PropTypes.string,
};

export default Navbar;
