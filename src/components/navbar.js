import React, { useEffect } from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from '../../static/img/general/logo.svg'

const routes = [
  { to: '/learn', label: 'Learn' },
  { to: '/govern', label: 'Govern' },
  { to: '/launch-pools', label: 'Launch Pools' },
];

const Navbar = () => {
  const links = () => {
    let navLinks = routes.map(({ to, label }) => {
      return (
      //Use react fragment to bypass non-unique key error
      <React.Fragment key={ Math.random().toString(36).substr(2, 9) }>
        <li className="nav-item">
          <Link className="nav-link" to={to}>{label}</Link>
        </li>
      </React.Fragment>
      )
    });
    return navLinks;
  }
  
  const setSolidNav = () => {
    const scrollHeight = document.documentElement.scrollTop;
    const navbar = document.querySelector("nav");
    if(scrollHeight > 50){
      navbar.classList.add("solid");
    }
    else {
      navbar.classList.remove("solid");
    }
  
  }
  useEffect(() => {
    window.addEventListener("scroll", function(){
      setSolidNav();
    });
  })
  return (
    <nav>
      <div className="container-xl">
        <Link className="logo nav-link" to="/">
          <img alt="logo" src={logo} />
        </Link>
        <div className="right-nav">
          <ul>
            {links()}
          </ul>
        </div>
        <span className="menu-toggle">
          <button className="nav-btn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
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
}

Navbar.propTypes = {
  type: PropTypes.string,
}

export default Navbar;
