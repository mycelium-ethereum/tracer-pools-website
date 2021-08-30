import React, { useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "./button";
import TracerLogo from "../../static/img/tracer-logo.svg";
import SubscribeButton from "../components/subscribe-button";
import MenuIcon from "../../static/img/general/menu.svg";

const Navbar = () => {
  const isMobile = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      return true;
    } else {
      return false;
    }
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

  useEffect(() => {
    setSolidNav();
    window.addEventListener("scroll", function () {
      setSolidNav();
    });
  });

  return (
    <nav
      id="nav"
      className="fixed w-full z-50 transition ease-out duration-500"
    >
      <div className="container xl lg:h-24 h-20 flex justify-between items-center mx-auto xl:px-24 sm:px-12 px-4">
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
              <div className="text-white font-semibold">Learn</div>
            </Link>
          </div>
          <div className="mr-7">
            <Link to="/govern">
              <div className="text-white font-semibold">Govern</div>
            </Link>
          </div>
          <div className="mr-7">
            <Button className="h-12 w-32 border border-white font-semibold" linkTo="/">Launch Pools</Button>
          </div>
          <div className="mr-7">
            <SubscribeButton className="h-12 w-32 text-white rounded-2xl font-semibold font-medium flex items-center justify-center bg-blue-600 text-whit">
              Subscribe
            </SubscribeButton>
          </div>
        </div>
        <div className="sm:hidden block">
          <img className="w-6 h-6" src={MenuIcon}/>
        </div>
      </div>
      {/* <menu>
      </menu> */}
    </nav>
  );
};

Navbar.propTypes = {
  type: PropTypes.string,
};

export default Navbar;
