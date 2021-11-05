import React, { useEffect } from "react";
import { Link } from "gatsby";

// Images
import CityBottomDark from "/static/img/general/footer-bg.png";
import Discourse from "/static/img/social-icons/discourse-footer.svg";
import Twitter from "/static/img/social-icons/twitter-footer.svg";
import Github from "/static/img/social-icons/github-footer.svg";
import Discord from "/static/img/social-icons/discord-footer.svg";

// Litepaper
import PoolsPDF from "../../static/pdf/Tracer Perpetual Pools.pdf";

const Footer = () => {
  const setCopyrightYear = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  };
  useEffect(() => {
    setCopyrightYear();
  });
  return (
    <footer className="w-full relative overflow-hidden lg:py-10 h-1/2 z-10 bg-blue">
      <img
        id="footer-bg"
        className="absolute 2xl:-bottom-52 xl:-bottom-36 lg:-bottom-6 md:-bottom-13 sm:bottom-2 sm:top-auto bottom-auto -top-14 left-0 w-full h-auto "
        src={CityBottomDark}
        alt=""
      />
      <div className="container mx-auto relative xl:flex flex-col justify-between z-1 xl:px-0 px-8">
        <div className="h-60" />
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
                className="social-icon w-5 sm:ml-6"
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
                className="social-icon w-6 sm:ml-6 ml-4"
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
                className="social-icon w-7 sm:ml-6 ml-4"
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
                className="social-icon w-6 sm:ml-6 ml-4"
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
