import React, {useEffect} from "react";
import {Link} from "gatsby"
import PropTypes from "prop-types"

import logo from '../../static/img/general/logo.svg'
import arrowOutline from '../../static/img/general/arrow-outline.svg'

// const routes = [
//   { to: '/learn', label: 'Learn' },
//   { to: '/govern', label: 'Govern' },
//   { to: '/launch-pools', label: 'Launch Pools' },
// ];

const Navbar = () => {
  const links = () => {
    return <React.Fragment key={Math.random().toString(36).substr(2, 9)}>
      <li className="nav-item">
        <Link className="nav-link" to="/learn">Learn</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/govern">Govern</Link>
      </li>
      <li className="nav-item pools">
        <Link className="nav-link" to="/launch-pools">Launch Pools</Link>
        <img className="arrow-outline" src={arrowOutline} aria-hidden="true" alt="Arrow"/>
      </li>
    </React.Fragment>;
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
    setSolidNav();
    window.addEventListener("scroll", function(){
      setSolidNav();
    });
  })
  return (
    <nav>
      <div className="container-xl d-flex align-items-center justify-content-between">
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
            <span className="bar"/>
            <span className="bar"/>
            <span className="bar"/>
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
