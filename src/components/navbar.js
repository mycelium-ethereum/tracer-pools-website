import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
import Container from "./container";
import MobileNav from "./mobile-nav";

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
  const [poolsBtnId, setPoolsBtnId] = useState("");

  const isCollapsed = () => {
    const width = window.innerWidth;
    return width < 1024;
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
      currentPage.includes("/brand") ||
      currentPage.includes("/privacy-policy");
    if (notHome) {
      setDarkerNav(true);
    }
  };

  useEffect(() => {
    const page = window.location.pathname.split("/")[1];
    setActiveLink();
    setSolidNav();
    checkPage();
    setPoolsBtnId(
      "launch-pools-nav" +
        (page.length ? "-" + window.location.pathname.split("/")[1] : "")
    );
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
        <div className="hidden items-center lg:flex">
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
              <span className="font-normal text-white">News</span>
            </Link>
          </div>
          <div className="mr-3">
            <a
              className="nav-link rounded-lg py-2 px-4 transition-colors duration-700"
              target="_blank"
              href="https://jobs.lever.co/Mycelium/?department=Tracer%20DAO"
            >
              <span className="font-normal text-white">Careers</span>
            </a>
          </div>
          <div>
            <Button
              className="mt-0"
              href="https://pools.tracer.finance/"
              id={poolsBtnId}
              analytics='"LaunchPoolsNavCTA", {"props":{"plan":"Navigation"}}'
            >
              Launch Pools
            </Button>
          </div>
        </div>
        <button
          className={
            "menu-icon block cursor-pointer lg:hidden " +
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
      <MobileNav navOpen={navOpen} darkerNav={darkerNav} closeNav={closeNav} />
    </nav>
  );
};

Navbar.propTypes = {
  type: PropTypes.string,
};

export default Navbar;
