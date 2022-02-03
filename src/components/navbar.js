import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";

// Images
import DropdownMenu from "./dropdown-menu";
import TracerLogo from "../../static/img/tracer-logo.svg";
import TracerLogoMobile from "../../static/img/general/mobile-logo.svg";
import Dropdown from "../../static/img/general/dropdown.svg";

const Navbar = () => {
  const [transparentNav, setTransparentNav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkerNav, setDarkerNav] = useState(false);

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
    if (!isCollapsed()) {
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
  const handleNavClick = () => {
    setNavOpen(!navOpen);
    setDropdownOpen(false);
  };
  const handleDropdownClick = () => {
    setNavOpen(false);
    setDropdownOpen(!dropdownOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };
  const checkPage = () => {
    const currentPage = window.location.pathname;
    const notHome =
      currentPage.includes("/learn") ||
      currentPage.includes("/radar") ||
      currentPage.includes("/privacy-policy");
    if (notHome) {
      setDarkerNav(true);
    }
  };

  useEffect(() => {
    setActiveLink();
    setSolidNav();
    checkPage();
    window.addEventListener("scroll", setSolidNav);
    window.addEventListener("resize", setSolidNav);
    return () => {
      window.removeEventListener("scroll", setSolidNav);
      window.removeEventListener("resize", setSolidNav);
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line
    <nav
      id="nav"
      className="fixed top-0 left-0 w-full z-50"
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div
        className={
          "backdrop absolute top-0 left-0 h-full w-full transition-all duration-300 " +
          (transparentNav ? "opacity-0" : "opacity-100") +
          (darkerNav ? " darker" : "")
        }
      />
      <div className="container h-16 flex justify-between items-center mx-auto xl:pl-2.5 lg:px-0 px-4 relative z-10">
        <div className="relative flex">
          <Link
            id="logo"
            className="cursor-pointer"
            to="/"
            onMouseEnter={() => {
              if (!isCollapsed()) handleDropdownClick();
            }}
          >
            <img
              className="sm:w-24 w-22 h-auto sm:block hidden"
              src={TracerLogo}
              alt="Tracer Logo"
            />
            <img
              className="w-12 h-10 sm:hidden"
              src={TracerLogoMobile}
              alt="Tracer Logo"
            />
          </Link>
          <button
            id="toggle"
            className="flex pl-3 w-22 h-22 left-0 top-0 z-0 justify-center items-center cursor-pointer"
            onMouseEnter={() => {
              if (!isCollapsed()) handleDropdownClick();
            }}
            onClick={() => handleDropdownClick()}
          >
            <img
              className={
                "w-4 h-auto transition-all duration-500 transform " +
                (dropdownOpen ? "rotate-180" : "")
              }
              src={Dropdown}
              alt="Dropdown toggle"
            />
          </button>
          <DropdownMenu dropdownOpen={dropdownOpen} darkerNav={darkerNav} />
        </div>
        <div className="hidden sm:flex items-center">
          <div className="mr-3">
            <Link
              className="nav-link transition-colors duration-700 py-2 px-4 rounded-lg"
              to="/"
            >
              <span className="text-white font-normal">Home</span>
            </Link>
          </div>
          <div className="mr-3">
            <Link
              id="learn-page"
              className="nav-link transition-colors duration-700 py-2 px-4 rounded-lg"
              to="/learn"
            >
              <span className="text-white font-normal">Learn</span>
            </Link>
          </div>
          <div className="mr-3">
            <Link
              className="nav-link transition-colors duration-700 py-2 px-4 rounded-lg"
              to="/radar"
            >
              <span className="text-white font-normal">Blog</span>
            </Link>
          </div>
          <div>
            <Button
              id="launch-pools"
              className="mt-0"
              href="https://pools.tracer.finance/"
              analytics='"LaunchPoolsNavCTA", {"props":{"plan":"Navigation"}}'
            >
              Launch Pools
            </Button>
          </div>
        </div>
        <button
          className={
            "sm:hidden block cursor-pointer menu-icon " +
            (navOpen ? "open" : "")
          }
          // eslint-disable-next-line
          onClick={() => {
            handleNavClick();
          }}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </button>
      </div>
      <menu
        className={
          "mobile-nav fixed transition-all duration-700 h-screen w-full top-16 left-0 mt-0 pl-0" +
          (navOpen ? " left-0 active" : " left-full")
        }
      >
        <div
          className={
            "backdrop absolute top-0 left-0 h-full w-full transition-opacity duration-300" +
            (darkerNav ? " darker" : "")
          }
        />
        <div className="flex flex-col justify-center w-60 mx-auto text-center pt-12">
          <div className="relative">
            <div className="mt-6 w-full">
              <Link
                onClick={() => closeNav()}
                className="mobile-link opacity-0 py-2 px-4 rounded-lg"
                to="/learn"
              >
                <span className="text-white font-normal text-lg">Learn</span>
              </Link>
            </div>
            <div className="mt-6 w-full">
              <Button
                onClick={() => closeNav()}
                className="h-12 w-full border border-white font-normal text-lg opacity-0"
                href="https://pools.tracer.finance/"
                analytics='"LaunchPoolsNavCTA", {"props":{"plan":"Navigation"}}'
              >
                Launch Pools
              </Button>
            </div>
            {/* <div className="mt-6 w-full">
            <Link to="/perpetuals">
              <span className="text-white font-normal text-lg">Perpetuals</span>
            </Link>
          </div> */}
            <div className="mt-6 w-full">
              <a
                onClick={() => closeNav()}
                className="mobile-link opacity-0 py-2 px-4 rounded-lg"
                href="https://vote.tracer.finance/#/"
              >
                <span className="text-white font-normal text-lg">Govern</span>
              </a>
            </div>
            <div className="mt-6 w-full">
              <Link
                onClick={() => closeNav()}
                className="mobile-link opacity-0 py-2 px-4 rounded-lg"
                to="/radar"
              >
                <span className="text-white font-normal text-lg">Blog</span>
              </Link>
            </div>
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
