/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

// Images
import FooterBackground from "/static/img/general/footer-bg.png";
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

  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://mycelium.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((res) => {
        console.log(res);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => console.log("Request failed", error));
  };

  return (
    <footer className="w-full relative overflow-hidden lg:h-72 lg:pb-0 pb-8 h-auto">
      <img
        className="absolute top-0 left-0 h-full min-w-full z-0"
        src={FooterBackground}
       alt="Footer Background"/>
      <div className="container xl mx-auto relative z-1 xl:px-24 lg:px-12 px-16">
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:pt-0 lg:h-60 h-auto pt-16">
          <span className="font-semibold text-white 2xl:w-auto lg:text-4xl lg:w-96 text-2xl">
            Stay updated on the latest Tracer news
          </span>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="u" value="15" />
            <input type="hidden" name="f" value="15" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <div className="lg:w-min sm:w-64 mx-auto w-full flex justify-between">
              <input
                type="email" name="email" autoCapitalize="off" autoComplete="off" autoCorrect="off"
                className="w-80 h-10 border-0 rounded-2xl pl-4 pr-4 lg:block hidden mr-10 "
                placeholder="Email" required
              />
              <button type="submit" className="tracer-btn.subscribe h-10 rounded-2xl text-base font-medium flex items-center justify-center bg-blue-600 text-white lg:w-32 lg:mt-0 lg:mb-0 mt-6 mb-8 w-full">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="h-auto w-full flex lg:flex-row flex-col justify-between items-center">
          <span className="text-base font-normal text-white">
            &copy; <span id="year"/> Tracer DAO
          </span>
          <div className="w-max h-6 flex justify-between lg:mt-0 mt-8">
            <img className="w-6 h-6 cursor-pointer" src={Facebook}  alt="Facebook"/>
            <img className="w-6 h-6 cursor-pointer ml-6" src={Twitter}  alt="Twitter"/>
            <img className="w-6 h-6 cursor-pointer ml-6" src={Github}  alt="GitHub"/>
            <img className="w-6 h-6 cursor-pointer ml-6" src={Dribbble}  alt="Dribbble"/>
          </div>
          <div className="w-max h-6 flex justify-between lg:block hidden">
            <Link className="text-base font-normal text-white" to="#">
              Privacy Policy
            </Link>
            <Link className="text-base font-normal text-white xl:pl-12 pl-6" to="#">
              Terms of Use
            </Link>
            <Link className="text-base font-normal text-white xl:pl-12 pl-6" to="#">
              Disclaimer
            </Link>
            <Link className="text-base font-normal text-white xl:pl-12 pl-6" to="#">
              Docs
            </Link>
            <Link className="text-base font-normal text-white xl:pl-12 pl-6" to="#">
              FAQs
            </Link>
            <Link className="text-base font-normal text-white xl:pl-12 pl-6" to="#">
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
