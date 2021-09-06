import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import BackgroundParallax from "../components/parallax";
import Button from "../components/button";

// Assets
import TracerLaptop from "/static/img/home-page/laptop.png";
import ArrowDown from "/static/img/general/arrow-down.svg";

const Hero = () => {
  return (
    <>
      <section role="main">
        <BackgroundParallax />
        <div className="container xl w-full h-screen relative flex justify-center items-center z-20 pb-36 2xl:pt-0 xl:px-24 lg:pt-36 lg:px-12 sm:pt-18 pt-16 px-4 mx-auto">
          <header className="text-center">
            <h1 className="xl:text-9xl sm:text-7xl text-5xl text-white font-black mb-4">
              Perpetual Pools
            </h1>
            <p className="text-white text-xl lg:block hidden">
              Leveraged exposure. No margins.
              <br />
              No liquidations. A new derivative primitive.
            </p>
            <p className="text-white text-2xl lg:hidden block">
              Leveraged exposure.
              <br />
              No margins. No liquidations.
              <br />A new derivative primitive.
            </p>
            <Button
              className="mt-6 h-12 w-48 border border-white mx-auto text-xl rounded-lg"
              linkTo="/"
            >
              Launch Pools
            </Button>
            <Link to="/">
              <div className="mx-auto mt-6 w-48 h-12 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded-lg">
                Documentation
              </div>
            </Link>
          </header>
          <div className="2xl:max-w-screen-xl xl:max-w-screen-lg 2xl:-bottom-80 xl:-bottom-96 lg:-bottom-72 md:-bottom-32 sm:-bottom-32 sm:px-24 absolute px-6 w-full -bottom-10 z-20">
            <img
              className="w-full"
              src={TracerLaptop}
              alt="Tracer Laptop View"
            />
          </div>
        </div>
        <AnchorLink
          to="/#steps"
          className="absolute 2xl:right-48 xl:right-30 lg:right-32 sm:w-16 sm:bottom-32 sm:right-16 bottom-12 right-6 w-14 z-20"
        >
          <img src={ArrowDown} alt="Down Arrow" />
        </AnchorLink>
      </section>
      <div className="2xl:h-96 lg:h-80 h-40 background-blue" />
    </>
  );
};

export default Hero;
