import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";

import TracerLogo from "../../static/img/tracer-logo.svg";
import TracerLogoMobile from "../../static/img/general/mobile-logo.svg";
import Dropdown from "../../static/img/general/dropdown.svg";
import MobileHeader from "../../static/img/general/mobile-header.png";
import TracerBoxPurple from "../../static/img/tracer-icon-box-purple.svg";
import TracerBoxGreen from "../../static/img/tracer-icon-box-green.svg";
import TracerBoxBlue from "../../static/img/tracer-icon-box-blue.svg";
import DiscourseLogo from "../../static/img/discourse-white.svg";
import TwitterLogo from "../../static/img/twitter-white.svg";
import GitHubLogo from "../../static/img/github-white.svg";
import DiscordLogo from "../../static/img/discord-white.svg";
import Folder from "../../static/img/folder.svg";

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

  useEffect(() => {
    setActiveLink();
    setSolidNav();
    window.addEventListener("scroll", setSolidNav);
    window.addEventListener("resize", setSolidNav);
    return function () {
      window.removeEventListener("scroll", setSolidNav);
      window.removeEventListener("resize", setSolidNav);
    };
    // eslint-disable-next-line
  }, []);

  const Icons = [
    {
      text: "Website",
      href: "https://tracer.finance",
      logo: Folder,
    },
    {
      text: "Twitter",
      href: "https://twitter.com/TracerDAO",
      logo: TwitterLogo,
    },
    {
      text: "Discourse",
      href: "https://discourse.tracer.finance/",
      logo: DiscourseLogo,
    },
    {
      text: "Github",
      href: "https://github.com/tracer-protocol/",
      logo: GitHubLogo,
    },
    {
      text: "Discord",
      href: "https://discord.gg/7rhrmYkAJs",
      logo: DiscordLogo,
    },
  ];

  return (
    // eslint-disable-next-line
    <nav
      id="nav"
      className={
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 " +
        (transparentNav ? "bg-transparent" : "bg-navblue")
      }
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {/* <img className="absolute top-0 left-0 w-full lg:hidden block" src={MobileHeader} /> */}
      <div className="container h-16 flex justify-between items-center mx-auto xl:px-0 px-4">
        <div className="relative flex">
          <Link id="logo" className="cursor-pointer" to="/">
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
            <img className={"w-4 h-auto transition-all duration-500 transform " + (dropdownOpen ? "rotate-180" : "")} src={Dropdown} alt="Dropdown toggle" />
          </button>
          <div
            id="dropdown"
            className={
              "dropdown transition-all duration-700 sm:absolute fixed sm:p-8 px-4 bg-navblue block sm:rounded-lg sm:top-10 sm:w-80 left-0 top-16 box-border overflow-hidden " +
              (dropdownOpen
                ? "pointer-events-all opacity-100 active"
                : "pointer-events-none sm:opacity-0 inactive")
            }
          >
            <a
              className="flex mb-6 sm:mt-0 mt-4"
              href="https://pools-testing.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="h-12 mr-3"
                src={TracerBoxPurple}
                alt="Tracer Box"
              />
              <span className="block text-white font-normal my-auto">
                <p>Tracer</p>
                <p>
                  <b>Perpetual Pools</b>
                </p>
              </span>
            </a>
            <a
              className="flex mb-6"
              href="https://gov.tracer.finance"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="h-12 mr-3"
                src={TracerBoxGreen}
                alt="Tracer Box"
              />
              <span className="block text-white font-normal my-auto">
                <p>Tracer</p>
                <p>
                  <b>Governance</b>
                </p>
              </span>
            </a>
            <a
              className="flex mb-6"
              href="https://docs.tracer.finance"
              rel="noreferrer"
              target="_blank"
            >
              <img className="h-12 mr-3" src={TracerBoxBlue} alt="Tracer Box" />
              <span className="block text-white font-normal my-auto">
                <p>Tracer</p>
                <p>
                  <b>Documentation</b>
                </p>
              </span>
            </a>
            {Icons.map((icon, i) => (
              <a
                className="flex items-center mt-5 pl-2"
                href={icon.href}
                rel="noreferrer"
                target="_blank"
                key={i}
              >
                <span>
                  <img
                    className="w-5 mr-2 opacity-70"
                    src={icon.logo}
                    alt="Logo"
                  />
                </span>
                <span className="block text-white font-normal my-auto">
                  {icon.text}
                </span>
              </a>
            ))}
          </div>
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
              <span className="text-white font-normal">Radar</span>
            </Link>
          </div>
          <div>
            <Button
              className="mt-0"
              linkTo="https://pools-testing.netlify.app/"
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
          " fixed transition-all duration-700 h-screen w-full bg-navblue top-16 left-0 mt-0 pl-0" +
          (navOpen ? " left-0" : " left-full")
        }
      >
        <div className="flex flex-col justify-center w-60 mx-auto text-center pt-12">
          <div className="mt-6 w-full">
            <Link to="/learn">
              <span className="text-white font-normal text-lg">Learn</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Button
              className="h-12 w-full border border-white font-normal text-lg"
              linkTo="https://pools-testing.netlify.app/"
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
