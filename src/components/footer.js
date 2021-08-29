/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "gatsby";

// Images
import SubscribeButton from "../components/subscribe-button";
import FooterBackground from "/static/img/general/footer-bg.svg";
import Facebook from "/static/img/icons/facebook.svg";
import Twitter from "/static/img/icons/twitter.svg";
import Github from "/static/img/icons/github.svg";
import Dribbble from "/static/img/icons/dribbble.svg";

const Footer = () => {
  const setCopyrightYear = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  };
  useEffect(() => {
    setCopyrightYear();
  });
  return (
    <>
      <footer className="h-72 w-full relative overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-auto z-0"
          src={FooterBackground}
        />
        <div className="container xl mx-auto relative z-1">
          <div className="h-60 w-full flex justify-between items-center">
            <span className="text-4xl font-semibold text-white">
              Stay updated on the latest Tracer news
            </span>
            <div className="w-min flex justify-between">
              <input
                className="w-80 h-10 border-0 rounded-2xl pl-4 pr-4"
                placeholder="Email"
              />
              <SubscribeButton className="w-32 h-10 rounded-2xl text-base font-medium flex items-center justify-center bg-blue-600 text-white ml-10">
                Subscribe
              </SubscribeButton>
            </div>
          </div>
          <div className="h-auto w-full flex justify-between items-center">
            <span className="text-base font-normal text-white">&copy; <span id="year"></span> Tracer DAO</span>
            <div className="w-max h-6 flex justify-between">
              <img className="w-6 h-6 cursor-pointer" src={Facebook}/>
              <img className="w-6 h-6 cursor-pointer ml-6" src={Twitter}/>
              <img className="w-6 h-6 cursor-pointer ml-6" src={Github}/>
              <img className="w-6 h-6 cursor-pointer ml-6" src={Dribbble}/>
            </div>
            <div className="w-max h-6 flex justify-between">
              <Link className="text-base font-normal text-white" to="#">Privacy Policy</Link>
              <Link className="text-base font-normal text-white pl-12" to="#">Terms of Use</Link>
              <Link className="text-base font-normal text-white pl-12" to="#">Disclaimer</Link>
              <Link className="text-base font-normal text-white pl-12" to="#">Docs</Link>
              <Link className="text-base font-normal text-white pl-12" to="#">FAQs</Link>
              <Link className="text-base font-normal text-white pl-12" to="#">Tutorials</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
