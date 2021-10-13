import React, { useEffect, useState } from "react";
import Parallax from "parallax-js";

// Images
import BlueSquareWEBP from "/static/img/home-page/background/blue-square.webp";
import GreenArrowWEBP from "/static/img/home-page/background/green-arrow.webp";
import BlueArrowWEBP from "/static/img/home-page/background/blue-arrow.webp";
import BlueArrowDownWEBP from "/static/img/home-page/background/blue-arrow-down.webp";
import PinkArrowWEBP from "/static/img/home-page/background/pink-arrow-right.webp";
import PinkSquareWEBP from "/static/img/home-page/background/pink-square.webp";
import PinkRectangleWEBP from "/static/img/home-page/background/pink-rectangle.webp";
import BlueSquare from "/static/img/home-page/background/blue-square.png";
import GreenArrow from "/static/img/home-page/background/green-arrow.png";
import BlueArrow from "/static/img/home-page/background/blue-arrow.png";
import BlueArrowDown from "/static/img/home-page/background/blue-arrow-down.png";
import PinkArrow from "/static/img/home-page/background/pink-arrow-right.png";
import PinkSquare from "/static/img/home-page/background/pink-square.png";
import PinkRectangle from "/static/img/home-page/background/pink-rectangle.png";

const BackgroundParallax = () => {
  const [fixed, setFixed] = useState(false);
  const checkPage = () => {
    const currentPage = window.location.pathname;
    if (currentPage === "/radar" || currentPage === "/privacy-policy") {
      setFixed(true);
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
        <div className="relative tile-bg">
          <div className="absolute square-middle z-30">
            <picture
              className="absolute opacity-50 blue-square"
              data-depth="0.2"
            >
              <source srcset={BlueSquareWEBP} type="image/webp" />
              <source srcset={BlueSquare} type="image/png" />
              <img src={BlueSquare} alt={""} loading="lazy" />
            </picture>
          </div>
          <picture className="absolute opacity-50 blue-arrow" data-depth="0.2">
            <source srcset={BlueArrowWEBP} type="image/webp" />
            <source srcset={BlueArrow} type="image/png" />
            <img src={BlueArrow} alt={""} loading="lazy" />
          </picture>
          <picture
            className="absolute opacity-50 green-arrow z-20"
            data-depth="0.4"
          >
            <source srcset={GreenArrowWEBP} type="image/webp" />
            <source srcset={GreenArrow} type="image/png" />
            <img src={GreenArrow} alt={""} loading="lazy" />
          </picture>
          <picture className="absolute opacity-50 pink-arrow" data-depth="0.3">
            <source srcset={PinkArrowWEBP} type="image/webp" />
            <source srcset={PinkArrow} type="image/png" />
            <img src={PinkArrow} alt={""} loading="lazy" />
          </picture>
          <picture
            className="absolute opacity-50 blue-square-medium"
            data-depth="0.1"
          >
            <source srcset={BlueSquareWEBP} type="image/webp" />
            <source srcset={BlueSquare} type="image/png" />
            <img src={BlueSquare} alt={""} loading="lazy" />
          </picture>
          <picture
            className="absolute opacity-50 blue-arrow-down"
            data-depth="0.2"
          >
            <source srcset={BlueArrowDownWEBP} type="image/webp" />
            <source srcset={PinkRectangle} type="image/png" />
            <img src={BlueArrowDown} alt={""} loading="lazy" />
          </picture>
          <picture className="absolute opacity-50 pink-square" data-depth="0.2">
            <source srcset={PinkSquareWEBP} type="image/webp" />
            <source srcset={PinkRectangle} type="image/png" />
            <img src={PinkSquare} alt={""} loading="lazy" />
          </picture>
          <picture
            className="absolute opacity-50 pink-rectangle"
            data-depth="0.1"
          >
            <source srcset={PinkRectangleWEBP} type="image/webp" />
            <source srcset={PinkRectangle} type="image/png" />
            <img src={PinkRectangle} alt={""} loading="lazy" />
          </picture>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden bg-blue transition-all duration-500 min-h-body h-screen" />
    </>
  );
};

export default BackgroundParallax;
