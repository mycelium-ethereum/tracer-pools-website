import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

// Images
import CityBottomDark from "/static/img/general/footer-bg.png";
import Discourse from "/static/img/social-icons/discourse.svg";
import Twitter from "/static/img/social-icons/twitter.svg";
import Github from "/static/img/social-icons/github.svg";
import Discord from "/static/img/social-icons/discord.svg";

// Litepaper
import PoolsPDF from "../../static/pdf/Tracer Perpetual Pools.pdf";

const Footer = () => {
  const isBelowBreakpoint = () => {
    const width = window.innerWidth;
    return width < 768;
  };
  const setCopyrightYear = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  };

  const [formOpen, setFormOpen] = useState(false);
  const checkForm = (e) => {
    const form = document.getElementById("subscription-form");
    if (isBelowBreakpoint() && !formOpen) {
      e.preventDefault();
      setFormOpen(true);
    } else if (formOpen && !isBelowBreakpoint()) {
      form.submit();
    }
  };
  const hideForm = (e) => {
    const input = document.getElementById("email");
    const button = document.getElementById("submit-btn");
    const target = e.target;
    if (!formOpen && target !== input && target !== button) {
      setFormOpen(false);
    }
  };
  const [submittedText, setSubmittedText] = useState("Subscribe");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("https://mycelium.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((res) => {
        console.log(res);
        setSubmittedText("Subscribed!");
        setTimeout(() => {
          setSubmittedText("Subscribe");
        }, 5000);
      })
      .catch((error) => console.log("Request failed", error));
  };
  useEffect(() => {
    setCopyrightYear();
    document.addEventListener("click", function (e) {
      hideForm(e);
    });
    return function () {
      document.removeEventListener("click", hideForm);
    };
  });
  return (
    <footer className="w-full relative overflow-hidden lg:py-10 h-1/2 z-10 bg-blue">
      <img
        id="footer-bg"
        // xl:-top-96 md:-top-56 sm:-top-44 -top-10
        className="absolute 2xl:-bottom-52 xl:-bottom-36 lg:-bottom-6 md:-bottom-13 sm:bottom-2 sm:top-auto bottom-auto -top-14 left-0 w-full h-auto "
        src={CityBottomDark}
        alt=""
      />
      <div className="container mx-auto relative xl:flex flex-col justify-between z-1 xl:px-0 px-8">
        <div className="flex flex-col xl:justify-center justify-between items-center lg:w-full lg:pt-8 sm:w-max sm:px-0 w-full h-auto mx-auto pt-6 mb-20">
          <span className="text-white lg:w-auto lg:mb-6 lg:text-left lg:text-xl font-semibold text-center w-full text-lg">
            Stay updated on the latest Tracer news
          </span>
          <form
            id="subscription-form"
            className="2xl:pb-0 lg:mb-48 lg:w-min sm:ml-0 sm:mr-0 mx-auto w-full flex lg:mt-0 mt-4 justify-between md:flex-row flex-col sm:px-0 px-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="u" value="15" />
            <input type="hidden" name="f" value="15" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input
              type="email"
              name="email"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className={
                "w-full h-10 border-0 rounded-lg lg:py-0 lg:w-80 lg:mb-0 md:mr-4 mb-6 py-2 pl-4 pr-4 max-w-xs mx-auto " +
                (formOpen ? "active" : "")
              }
              id="email"
              placeholder="Email"
              required
            />
            <button
              onClick={(e) => checkForm(e)}
              id="submit-btn"
              type="submit"
              className="tracer-btn.subscribe h-10 rounded-lg font-medium flex items-center justify-center bg-blue-600 text-white lg:w-32 lg:mt-0 lg:mb-0 md:w-32 mb-8 w-full max-w-xs mx-auto"
            >
              {submittedText}
            </button>
          </form>
        </div>
        <div className="h-auto w-full flex lg:flex-row flex-col justify-between sm:items-center items-start">
          <span className="text-base font-normal text-white">
            &copy; <span id="year" /> Tracer DAO
          </span>
          <div className="w-max h-6 flex justify-between items-center lg:mt-0 lg:mb-0 mt-4 mb-4">
            <a
              href="https://discourse.tracer.finance"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="social-icon w-6 h-6 sm:ml-6"
                src={Discourse}
                alt="Discourse"
              />
            </a>
            <a
              href="https://twitter.com/TracerDAO"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="social-icon w-6 h-6 sm:ml-6 ml-4"
                src={Twitter}
                alt="Twitter"
              />
            </a>
            <a
              href="https://github.com/tracer-protocol"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="social-icon w-7 h-7 sm:ml-6 ml-4"
                src={Github}
                alt="GitHub"
              />
            </a>
            <a
              href="https://discord.com/invite/kddBUqDVVb"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="social-icon h-5 sm:ml-6 ml-4"
                src={Discord}
                alt="Discord"
              />
            </a>
          </div>
          <div className="flex w-full justify-center flex-wrap lg:h-6 lg:w-max lg:justify-between lg:flex-nowrap lg:mb-0 sm:flex-row sm:mt-0 flex-col mt-6 mb-6">
            <Link
              className="text-base font-normal text-white sm:mb-0 mb-4"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <a
              className="text-base font-normal text-white xl:pl-12 sm:mb-0 sm:pl-6 mb-4"
              href={PoolsPDF}
              download
            >
              Litepaper
            </a>
            <a
              className="text-base font-normal text-white xl:pl-12 sm:mb-0 sm:pl-6 mb-4"
              rel="noreferrer"
              target="_blank"
              href="https://docs.tracer.finance"
            >
              Documentation (Gitbook)
            </a>
            <a
              className="text-base font-normal text-white xl:pl-12 sm:mb-0 sm:pl-6 mb-4"
              href="/radar/sigma-prime-audit-response"
              download
            >
              Security Audit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
