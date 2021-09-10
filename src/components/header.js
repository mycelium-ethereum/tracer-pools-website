/* eslint-disable */
import React from "react";

const Header = () => {
  return (
    <>
      <header className="h-72 flex z-20 relative">
        <div className="container w-full mx-auto flex flex-col justify-center pt-24 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-white mb-2">Radar</h1>
          <small className="text-lg text-white font-normal">Read the latest news for Tracer</small>
        </div>
      </header>
    </>
  );
};

export default Header;
