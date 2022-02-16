import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
import Container from "./container";

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
      className="fixed top-0 left-0 z-50 w-full"
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div
        className={
          "backdrop absolute top-0 left-0 h-full w-full transition-all duration-300 " +
          (transparentNav ? "opacity-0" : "opacity-100") +
          (darkerNav ? " darker" : "")
        }
      />
      <Container className="flex h-16 items-center justify-between">
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
              className="w-22 hidden h-auto sm:block sm:w-24"
              src={TracerLogo}
              alt="Tracer Logo"
            />
            <img
              className="h-10 w-12 sm:hidden"
              src={TracerLogoMobile}
              alt="Tracer Logo"
            />
          </Link>
          <button
            id="toggle"
            className="w-22 h-22 left-0 top-0 z-0 flex cursor-pointer items-center justify-center pl-3"
            onMouseEnter={() => {
              if (!isCollapsed()) handleDropdownClick();
            }}
            onClick={() => handleDropdownClick()}
          >
            <img
              className={
                "h-auto w-4 transform transition-all duration-500 " +
                (dropdownOpen ? "rotate-180" : "")
              }
              src={Dropdown}
              alt="Dropdown toggle"
            />
          </button>
          <DropdownMenu dropdownOpen={dropdownOpen} darkerNav={darkerNav} />
        </div>
        <div className="hidden items-center sm:flex">
          <div className="mr-3">
            <Link
              className="nav-link rounded-lg py-2 px-4 transition-colors duration-700"
              to="/"
            >
              <span className="font-normal text-white">Home</span>
            </Link>
          </div>
          <div className="mr-3">
            <Link
              id="learn-page"
              className="nav-link rounded-lg py-2 px-4 transition-colors duration-700"
              to="/learn"
            >
              <span className="font-normal text-white">Learn</span>
            </Link>
          </div>
          <div className="mr-3">
            <Link
              className="nav-link rounded-lg py-2 px-4 transition-colors duration-700"
              to="/radar"
            >
              <span className="font-normal text-white">Blog</span>
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
            "menu-icon block cursor-pointer sm:hidden " +
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
      </Container>
      <menu
        className={
          "mobile-nav fixed top-16 left-0 mt-0 h-screen w-full pl-0 transition-all duration-700" +
          (navOpen ? " active left-0" : " left-full")
        }
      >
        <div
          className={
            "backdrop absolute top-0 left-0 h-full w-full transition-opacity duration-300" +
            (darkerNav ? " darker" : "")
          }
        />
        <div className="mx-auto flex w-60 flex-col justify-center pt-12 text-center">
          <div className="relative">
            <div className="mt-6 w-full">
              <Link
                onClick={() => closeNav()}
                className="mobile-link rounded-lg py-2 px-4 opacity-0"
                to="/learn"
              >
                <span className="text-lg font-normal text-white">Learn</span>
              </Link>
            </div>
            <div className="mt-6 w-full">
              <Button
                onClick={() => closeNav()}
                className="h-12 w-full border border-white text-lg font-normal opacity-0"
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
                className="mobile-link rounded-lg py-2 px-4 opacity-0"
                href="https://vote.tracer.finance/#/"
              >
                <span className="text-lg font-normal text-white">Govern</span>
              </a>
            </div>
            <div className="mt-6 w-full">
              <Link
                onClick={() => closeNav()}
                className="mobile-link rounded-lg py-2 px-4 opacity-0"
                to="/radar"
              >
                <span className="text-lg font-normal text-white">Blog</span>
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
