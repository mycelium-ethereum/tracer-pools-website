/* eslint-disable */
import React from "react";
import Container from "../components/container";

const LearnHeader = () => {
  return (
    <>
      <header className="relative z-20 mb-8 flex h-auto items-center pt-12 md:mb-10 md:items-end md:pt-20">
        <Container className="flex flex-col justify-center pt-24 text-center">
          <h1 className="mb-2 text-4xl font-black text-white transition-all duration-500 md:text-6xl">
            Learn
          </h1>
          <small className="text-xl font-normal text-white transition-all duration-500 md:text-2xl">
            The essentials to get started using Perpetual Pools
          </small>
        </Container>
      </header>
    </>
  );
};

export default LearnHeader;
