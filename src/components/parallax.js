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
    const currentPage = window.location.pathname.replaceAll("/", "");
    if (currentPage === "radar" || currentPage === "privacy-policy") {
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
          " pointer-events-none left-0 -top-32 z-10 h-screen w-screen origin-top sm:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:scale-75 lg:transform-gpu xl:left-0 xl:transform-none"
        }
      >
        <div className="tile-bg relative">
          <div className="square-middle absolute z-30">
            <picture
              className="blue-square absolute opacity-50"
              data-depth="0.2"
            >
              <source srcSet={BlueSquareWEBP} type="image/webp" />
              <source srcSet={BlueSquare} type="image/png" />
              <img src={BlueSquare} alt={""} loading="lazy" />
            </picture>
          </div>
          <picture className="blue-arrow absolute opacity-50" data-depth="0.2">
            <source srcSet={BlueArrowWEBP} type="image/webp" />
            <source srcSet={BlueArrow} type="image/png" />
            <img src={BlueArrow} alt={""} loading="eager" />
          </picture>
          <picture
            className="green-arrow absolute z-20 opacity-50"
            data-depth="0.4"
          >
            <source srcSet={GreenArrowWEBP} type="image/webp" />
            <source srcSet={GreenArrow} type="image/png" />
            <img src={GreenArrow} alt={""} loading="eager" />
          </picture>
          <picture className="pink-arrow absolute opacity-50" data-depth="0.3">
            <source srcSet={PinkArrowWEBP} type="image/webp" />
            <source srcSet={PinkArrow} type="image/png" />
            <img src={PinkArrow} alt={""} loading="lazy" />
          </picture>
          <picture
            className="blue-square-medium absolute opacity-50"
            data-depth="0.1"
          >
            <source srcSet={BlueSquareWEBP} type="image/webp" />
            <source srcSet={BlueSquare} type="image/png" />
            <img src={BlueSquare} alt={""} loading="lazy" />
          </picture>
          <picture
            className="blue-arrow-down absolute opacity-50"
            data-depth="0.2"
          >
            <source srcSet={BlueArrowDownWEBP} type="image/webp" />
            <source srcSet={BlueArrowDown} type="image/png" />
            <img src={BlueArrowDown} alt={""} loading="lazy" />
          </picture>
          <picture className="pink-square absolute opacity-50" data-depth="0.2">
            <source srcSet={PinkSquareWEBP} type="image/webp" />
            <source srcSet={PinkSquare} type="image/png" />
            <img src={PinkSquare} alt={""} loading="lazy" />
          </picture>
          <picture
            className="pink-rectangle absolute opacity-50"
            data-depth="0.1"
          >
            <source srcSet={PinkRectangleWEBP} type="image/webp" />
            <source srcSet={PinkRectangle} type="image/png" />
            <img src={PinkRectangle} alt={""} loading="lazy" />
          </picture>
        </div>
      </div>
      <div className="bg-blue min-h-body absolute top-0 left-0 z-0 h-screen w-full overflow-hidden transition-all duration-500" />
    </>
  );
};

export default BackgroundParallax;
