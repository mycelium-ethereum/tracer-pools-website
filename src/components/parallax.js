import React, { useEffect, useState } from "react";
import Parallax from "parallax-js";
import { StaticImage } from "gatsby-plugin-image";

const BackgroundParallax = () => {
  const [fixed, setFixed] = useState(false);
  const checkPage = () => {
    const currentPage = window.location.pathname;
    if (currentPage === "/radar" || currentPage === "/privacy-policy") {
      setFixed(true);
    }
  };
  const applyDepth = () => {
    const images = document.querySelectorAll(".tile-bg .gatsby-image-wrapper");
    const depths = [0.2, 0.2, 0.4, 0.3, 0.1, 0.2, 0.2, 0.1];
    images.forEach((image, i) => {
      image.setAttribute("data-depth", depths[i]);
      image.style.opacity = 0.5;
    });
    createParallax();
  };
  const createParallax = () => {
    const scene = document.querySelector(".tile-bg");
    const tiles = document.querySelectorAll(".parallax-img");
    new Parallax(scene);
    tiles.forEach((tile) => {
      new Parallax(tile);
    });
  };
  useEffect(() => {
    window.onload = function () {
      applyDepth();
    };
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
          <div
            className="parallax-img absolute square-middle z-30"
            data-set-depth="0.2"
          >
            <StaticImage
              placeholder="none"
              loading="eager"
              objectFit="contain"
              imgClassName="absolute opacity-50 blue-square"
              src="../../static/img/home-page/background/blue-square.svg"
              alt=""
            />
          </div>
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 blue-arrow"
            className="parallax-img"
            data-set-depth="0.2"
            src="../../static/img/home-page/background/blue-arrow.svg"
            alt=""
          />
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 green-arrow z-20"
            className="parallax-img"
            data-set-depth="0.2"
            src="../../static/img/home-page/background/green-arrow.svg"
            alt=""
          />
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 pink-arrow"
            className="parallax-img"
            data-set-depth="0.3"
            src="../../static/img/home-page/background/pink-arrow-right.png"
            alt=""
          />
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 blue-square-medium"
            className="parallax-img"
            data-set-depth="0.1"
            src="../../static/img/home-page/background/blue-square.svg"
            alt=""
          />
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 blue-arrow-down"
            className="parallax-img"
            data-set-depth="0.2"
            src="../../static/img/home-page/background/blue-arrow-down.png"
            alt=""
          />
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 pink-square"
            className="parallax-img"
            data-set-depth="0.2"
            src="../../static/img/home-page/background/pink-square.png"
            alt=""
          />
          <StaticImage
            placeholder="none"
            loading="eager"
            objectFit="contain"
            imgClassName="absolute opacity-50 pink-rectangle"
            className="parallax-img"
            data-set-depth="0.1"
            src="../../static/img/home-page/background/pink-rectangle.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden bg-blue transition-all duration-500 min-h-body h-screen" />
    </>
  );
};

export default BackgroundParallax;
