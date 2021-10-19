import React from "react";

const Header = ({ title, subheading }) => {
  return (
    <>
      <header className="h-72 flex z-20 relative">
        <div className="container w-full mx-auto flex flex-col justify-center pt-24 lg:px-0 sm:text-left text-center px-4">
          <h1 className="font-semibold text-3xl text-white mb-2">{title}</h1>
          <small className="text-xl text-white font-normal">{subheading}</small>
        </div>
      </header>
    </>
  );
};

export default Header;
