import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";

import TracerLogo from "../../static/img/tracer-logo.svg";
import Dropdown from "../../static/img/general/dropdown.svg";
import MenuIcon from "../../static/img/general/menu.svg";
import MenuCloseIcon from "../../static/img/general/menu-close.svg";
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
    <nav
      id="nav"
      className={
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 " +
        (transparentNav ? "bg-transparent" : "bg-navblue")
      }
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="container h-16 flex justify-between items-center mx-auto xl:px-0 px-4">
        <div className="relative flex">
          <Link
            id="logo"
            className="cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            to="/"
          >
            <img
              className="sm:w-24 w-22 h-auto"
              src={TracerLogo}
              alt="Tracer Logo"
            />
          </Link>
          <div
            id="toggle"
            className="sm:flex hidden pl-3 w-22 h-22 left-0 top-0 z-0 justify-center items-center cursor-pointer"
            onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
          >
            <img className="w-4 h-auto" src={Dropdown} alt="Dropdown toggle" />
          </div>
          <div
            id="dropdown"
            className={
              "dropdown absolute top-10 w-80 p-8 bg-blue-1100 rounded-lg sm:block hidden transition-opacity duration-500 " +
              (dropdownOpen
                ? "pointer-events-all opacity-100"
                : "pointer-events-none opacity-0")
            }
          >
            <a
              className="flex mb-6"
              href="/"
              target="_blank"
              rel="noreferrer noopener"
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
              target="_blank"
              rel="noreferrer noopener"
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
              target="_blank"
              rel="noreferrer noopener"
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
                target="_blank"
                rel="noreferrer"
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
            <Button className="mt-0" linkTo="https://pools-testing.netlify.app/">
              Launch Pools
            </Button>
          </div>
        </div>
        <div className="sm:hidden block" onClick={() => setNavOpen(!navOpen)}>
          <img className="w-6 h-6" src={MenuIcon} alt="Menu" />
        </div>
      </div>
      <menu
        className={
          " fixed transition-all duration-700 h-screen w-full bg-tracerblue top-16 left-0 mt-0 pl-0" +
          (navOpen ? " left-0" : " left-full")
        }
      >
        <div className="flex flex-col justify-center w-60 mx-auto text-center pt-12">
          <div className="mt-6 w-full">
            <Link to="/learn">
              <span className="text-white font-normal text-lg">Learn</span>
            </Link>
          </div>
          <div className="w-full">
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
