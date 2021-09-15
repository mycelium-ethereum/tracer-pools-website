import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "../components/button";

// Assets
import TracerLaptop from "/static/img/home-page/laptop/Macbook.svg";

const Hero = () => {
  return (
    <>
      <section role="main">
        <div className="container w-full h-screen min-h-body relative flex justify-center items-center z-20 2xl:pt-0 lg:pt-36 xl:px-0 sm:pt-18 pt-16 px-4 mx-auto">
          <header className="text-center">
            <h1 className="xl:text-9xl sm:text-7xl text-5xl text-white font-black mb-4">
              Perpetual Pools
            </h1>
            <p className="text-white text-xl lg:block hidden leading-snug">
              Leveraged exposure. No margins. No liquidations.
              <br />A new derivative primitive.
            </p>
            <p className="text-white text-normal lg:hidden block">
              Leveraged exposure.
              <br />
              No margins. No liquidations.
              <br />A new derivative primitive.
            </p>
            <Button
              className="mt-12 h-12 w-48 border border-white mx-auto text-normal font-normal rounded-lg"
              href="https://pools-testing.netlify.app/"
            >
              Launch Pools
            </Button>
            <a href="https://docs.tracer.finance">
              <div className="mx-auto mt-2 w-48 h-12 flex justify-center items-center text-normal font-normal text-white hover:underline">
                Documentation
              </div>
            </a>
          </header>
          <div className="2xl:max-w-screen-xl xl:max-w-screen-lg 2xl:-bottom-96 xl:-bottom-80 lg:-bottom-72 md:-bottom-32 sm:-bottom-32 sm:px-24 absolute px-6 w-full -bottom-20 z-20">
            <img
              className="w-full"
              src={TracerLaptop}
              alt="Tracer Laptop View"
            />
          </div>
          <AnchorLink
            to="/#steps"
            className="absolute sm:right-0 right-8 border-2 border-white rounded-full lg:bottom-12 bottom-6 w-14 h-14 bg-white bg-opacity-20 transition-colors duration-500 text-white hover:bg-white fill-current stroke-current hover:text-blue-400 z-20"
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <path d="M1.84933 0.235229L7.69959 6.0855L13.5499 0.235229L15.3406 2.02597L7.6988 9.66775L0.0585938 2.02597L1.84933 0.235229Z" />
            </svg>
          </AnchorLink>
        </div>
      </section>
      <div className="2xl:h-96 lg:h-80 h-40 bg-blue" />
    </>
  );
};

export default Hero;
