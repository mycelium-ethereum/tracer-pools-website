import React, { useRef } from "react";
import Backdrop from "../../static/img/home-page/banner/eth-denver-backdrop.png";
import Beaver from "../../static/img/home-page/banner/beaver.png";
import ETHDenverText from "../../static/img/home-page/banner/eth-denver-text.svg";
import { Link } from "gatsby";

const ETHDenverBanner = () => {
  const isMobile = () => {
    return window.innerWidth < 768;
  };
  const bannerEl = useRef(null);
  const handleClick = (e) => {
    if (isMobile()) {
      bannerEl.current.style.opacity = "0";
    } else {
      bannerEl.current.style.left = "-250px";
    }
  };
  return (
    <Link to="/radar/eth-denver/">
      <div
        onClick={handleClick}
        ref={bannerEl}
        className="group absolute top-24 left-1/2 z-40 flex h-[54px] w-[calc(100%-32px)] -translate-x-1/2 transform-gpu items-center justify-center px-4 transition-all duration-700 ease-in-out sm:w-full sm:max-w-[610px] md:fixed md:left-0 md:h-[88px] md:w-[253px] md:-translate-x-12 md:px-0 md:hover:-translate-x-2"
      >
        <div className="absolute left-0 top-0 h-[54px] w-full overflow-hidden rounded-xl md:h-[88px]">
          <img
            src={Backdrop}
            className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2 transform transition-all duration-500 md:top-0 md:h-auto md:transform-none"
          />
        </div>
        <img
          src={Beaver}
          className="eth-denver-beaver pointer-events-none absolute top-1/2 right-auto left-1/2 h-[82px] w-[73px] -translate-y-1/2 -translate-x-1/2 transform transition-all duration-500 md:-right-12 md:left-auto md:h-[114px] md:w-[101px] md:translate-x-0"
        />
        <div className="relative z-10 flex h-full w-full items-center justify-between text-center text-white md:h-auto md:w-auto md:flex-col">
          <div className="-translate-y-1 transform">
            <span>Tracer is at</span>
            <img src={ETHDenverText} />
          </div>
          <button className="flex h-9 w-28 items-center justify-center rounded-lg border-2 border-white bg-white bg-opacity-20 text-sm transition-all duration-500 group-hover:bg-opacity-100 group-hover:text-blue-400 md:mt-2 md:h-[22px] md:w-[93px] md:text-xs">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ETHDenverBanner;
