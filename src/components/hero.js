import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "../components/button";
import Container from "../components/container";

// Assets
import TracerLaptop from "/static/img/home-page/laptop/Macbook.svg";

const Hero = () => {
  return (
    <>
      <section role="main">
        <Container className="min-h-body sm:pt-18 z-20 flex h-screen items-center justify-center pt-16 lg:pt-36 2xl:pt-0">
          <header className="text-center">
            <h1 className="mb-4 text-5xl font-black text-white transition-all duration-500 sm:text-7xl xl:text-9xl">
              Perpetual Pools
            </h1>
            <p className="hidden text-xl leading-snug text-white lg:block">
              Leveraged exposure. No margins. No liquidations.
              <br />A new derivative primitive.
            </p>
            <p className="text-normal block text-white lg:hidden">
              Leveraged exposure.
              <br />
              No margins. No liquidations.
              <br />A new derivative primitive.
            </p>
            <Button
              className="mt-6 sm:mt-12"
              href="https://pools.tracer.finance/"
              id="launch-pools-home"
              analytics='"HomeHeadLaunchPoolsCTA", {"props":{"plan":"Navigation"}}'
            >
              Launch Pools
            </Button>
            <a
              href="https://docs.tracer.finance"
              className="text-normal mx-auto mt-4 flex items-center justify-center font-normal text-white hover:underline sm:mt-8"
            >
              Documentation
            </a>
          </header>
          <div className="absolute -bottom-14 z-20 w-full sm:-bottom-20 sm:px-24 md:-bottom-32 lg:-bottom-72 xl:-bottom-80 xl:max-w-screen-lg 2xl:-bottom-96 2xl:max-w-screen-xl">
            <img
              className="w-full"
              src={TracerLaptop}
              alt="Tracer Laptop View"
            />
          </div>
          <AnchorLink
            to="/#steps"
            className="absolute right-6 bottom-20 z-20 h-14 w-14 rounded-full border-2 border-white bg-white bg-opacity-20 fill-current stroke-current text-white transition-colors duration-500 hover:bg-white hover:text-blue-400 sm:right-2"
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            >
              <path d="M1.84933 0.235229L7.69959 6.0855L13.5499 0.235229L15.3406 2.02597L7.6988 9.66775L0.0585938 2.02597L1.84933 0.235229Z" />
            </svg>
          </AnchorLink>
        </Container>
      </section>
      <div className="bg-blue h-40 lg:h-80 2xl:h-96" />
    </>
  );
};

export default Hero;
