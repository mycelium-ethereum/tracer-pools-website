import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Container from "../components/container";
// Images
import CityBottomDark from "/static/img/general/footer-bg.png";
import TracerLogo from "/static/img/tracer-logo.svg";
import FooterCategoryList from "../components/footer-category-list";

import {
  categoryNames,
  socialLinks,
  tracerDAOCategory,
  productsCategory,
  learnCategory,
  contributeCategory,
  governCategory,
  connectCategory,
} from "./footer-categories";
const Footer = () => {
  const categoryArr = [
    tracerDAOCategory,
    productsCategory,
    learnCategory,
    contributeCategory,
    governCategory,
    connectCategory,
  ];
  const [learnPage, setLearnPage] = useState(false);
  const setCopyrightYear = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  };

  const checkPage = () => {
    const currentPage = window.location.pathname.replaceAll("/", "");
    setLearnPage(currentPage === "learn");
  };

  useEffect(() => {
    checkPage();
    setCopyrightYear();
  }, []);

  return (
    <footer className="bg-blue relative z-10 h-1/2 w-full overflow-hidden lg:py-10">
      {!learnPage && (
        <img
          id="footer-bg"
          className="absolute bottom-auto top-0 left-0 h-auto w-full min-w-[1000px]"
          src={CityBottomDark}
          alt={"City Bottom Dark"}
        />
      )}
      <Container>
        <div className="mb-[75px] flex flex-col items-start justify-between pr-8 md:flex-row md:pr-0">
          <Link to="/">
            <img src={TracerLogo} className="mr-14 h-[24px] w-[100px]" />
          </Link>
          <div className="mt-12 grid flex-grow transform grid-cols-2 gap-x-[75px] gap-y-12 text-white sm:grid-cols-3 md:mt-0 lg:translate-x-[95px] xl:w-max xl:translate-x-[40px] xl:grid-cols-6">
            {categoryNames.map((category, i) => {
              return (
                <FooterCategoryList
                  key={category.name}
                  name={category.name}
                  category={categoryArr[i]}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-[#FBFBFB] pt-5 pb-7 sm:flex-row sm:pb-20">
          {/* Social icons */}
          <div className="flex">
            {socialLinks.map((socialLink) => (
              <a href={socialLink.url} target="_blank">
                <img
                  className="social-icon mx-3 h-[17px] w-auto sm:mr-6 sm:ml-0"
                  src={socialLink.icon}
                  alt={socialLink.alt}
                />
              </a>
            ))}
          </div>
          <span className="mt-5 text-white">
            ©<span id="year"></span> Tracer DAO
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
