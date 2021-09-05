import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
import TracerLogo from "../../static/img/tracer-logo.svg";
import MenuIcon from "../../static/img/general/menu.svg";
import MenuCloseIcon from "../../static/img/general/menu-close.svg";

const Navbar = () => {
  const isMobile = () => {
    const width = window.innerWidth;
    return width < 1024;
  };
  const setSolidNav = () => {
    const scrollHeight = document.documentElement.scrollTop;
    const navbar = document.getElementById("nav");
    const mobile = isMobile();
    if (scrollHeight > 50 || mobile) {
      navbar.style.backgroundColor = "#011772";
    } else if (!mobile && scrollHeight < 50) {
      navbar.style.backgroundColor = "transparent";
    }
  };
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setSolidNav();
    window.addEventListener("scroll", function () {
      setSolidNav();
    });
    window.addEventListener("resize", function () {
      setSolidNav();
      if (isMobile()) {
        setOpen(false);
      }
    });
  });

  return (
    <nav
      id="nav"
      className="fixed w-full z-50 transition ease-out duration-500"
    >
      <div className="lg:h-24 h-20 flex justify-between items-center mx-auto xl:px-24 sm:px-12 px-4">
        <div>
          <Link to="/">
            <img
              className="sm:w-24 w-22 h-auto"
              src={TracerLogo}
              alt="Tracer Logo"
            />
          </Link>
        </div>
        <div className="hidden sm:flex items-center">
          <div className="mr-7">
            <Link to="/learn">
              <span className="text-white font-semibold">Learn</span>
            </Link>
          </div>
          <div className="mr-7">
            <Link to="/govern">
              <span className="text-white font-semibold">Govern</span>
            </Link>
          </div>
          <div className="mr-7">
            <Button
              className="h-12 w-32 border border-white font-semibold"
              linkTo="/"
            >
              Launch Pools
            </Button>
          </div>
        </div>
        <div
          className="sm:hidden block"
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          <img className="w-6 h-6" src={MenuIcon} alt="Menu" />
        </div>
      </div>
      <menu
        className={
          "fixed transition-opacity duration-700 h-screen w-full background-tracerblue top-0 left-0 mt-0 pl-0" +
          (isOpen
            ? " opacity-100 pointer-events-auto"
            : " opacity-0 pointer-events-none")
        }
      >
        <button
          className="absolute top-7 right-4 w-6 h-6"
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          <img className="w-6 h-6" src={MenuCloseIcon} alt="Menu" />
        </button>
        <div className="flex flex-col justify-center w-60 mx-auto text-center pt-12">
          <div className="mt-6 w-full">
            <Link to="/learn">
              <span className="text-white font-semibold text-lg">Learn</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Button
              className="h-12 w-full border border-white font-semibold text-lg"
              linkTo="/"
            >
              Launch Pools
            </Button>
          </div>
          <div className="mt-6 w-full">
            <Link to="/perpetuals">
              <span className="text-white font-semibold text-lg">
                Perpetuals
              </span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Link to="/govern">
              <span className="text-white font-semibold text-lg">Govern</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Link to="/radar">
              <span className="text-white font-semibold text-lg">Blog</span>
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
