import React, { useEffect, useState } from "react";
import Parallax from "parallax-js";

// Images
import BlueSquare from "/static/img/home-page/background/blue-square.svg";
import GreenArrow from "/static/img/home-page/background/green-arrow.svg";
import BlueArrow from "/static/img/home-page/background/blue-arrow.svg";
import BlueArrowDown from "/static/img/home-page/background/blue-arrow-down.png";
import PinkArrow from "/static/img/home-page/background/pink-arrow-right.png";
import PinkSquare from "/static/img/home-page/background/pink-square.png";
import PinkRectangle from "/static/img/home-page/background/pink-rectangle.png";

const BackgroundParallax = () => {
  const [fixed, setFixed] = useState(false);
  const [hideOverflow, setHideOverflow] = useState(false);
  const [quarterOverlay, setQuarterOverlay] = useState(false);
  const checkPage = () => {
    const currentPage = document.title;
    if (
      currentPage.includes("Privacy Policy") ||
      currentPage.includes("Radar")
    ) {
      setFixed(true);
    }
    if (currentPage.includes("learn")) {
      setQuarterOverlay(true);
    }
    if (currentPage.includes("404")) {
      setHideOverflow(true);
    }
  };

  useEffect(() => {
    const scene = document.querySelector(".tile-bg");
    const scene2 = document.querySelector(".square-middle");
    new Parallax(scene);
    new Parallax(scene2);
    checkPage();
  }, []);
  return (
    <>
      <div
        className={
          (fixed ? "fixed" : "absolute") +
          " left-0 w-screen origin-top xl:transform-none xl:left-0 lg:transform-gpu lg:scale-75 lg:left-1/2 lg:-translate-x-1/2 h-screen z-10 pointer-events-none sm:top-0 -top-32"
        }
      >
        <div
          className={
            (hideOverflow ? "overflow-hidden" : "") + " absolute tile-bg"
          }
        >
          <div className="absolute square-middle z-30">
            <img
              className="absolute opacity-50 blue-square"
              data-depth="0.2"
              src={BlueSquare}
              alt=""
            />
          </div>
          <img
            className="absolute opacity-50 blue-arrow"
            data-depth="0.2"
            src={BlueArrow}
            alt=""
          />
          <img
            className="absolute opacity-50 green-arrow z-20"
            data-depth="0.4"
            src={GreenArrow}
            alt=""
          />
          <img
            className="absolute opacity-50 pink-arrow"
            data-depth="0.3"
            src={PinkArrow}
            alt=""
          />
          <img
            className="absolute opacity-50 blue-square-medium"
            data-depth="0.1"
            src={BlueSquare}
            alt=""
          />
          <img
            className="absolute opacity-50 blue-arrow-down"
            data-depth="0.2"
            src={BlueArrowDown}
            alt=""
          />
          <img
            className="absolute opacity-50 pink-square"
            data-depth="0.2"
            src={PinkSquare}
            alt=""
          />
          <img
            className="absolute opacity-50 pink-rectangle"
            data-depth="0.1"
            src={PinkRectangle}
            alt=""
          />
        </div>
      </div>
      <div
        className={
          "absolute top-0 left-0 w-full z-0 overflow-hidden bg-blue transition-all duration-500 min-h-body " +
          (quarterOverlay ? "learn-overlay" : "h-screen")
        }
      />
    </>
  );
};

export default BackgroundParallax;
