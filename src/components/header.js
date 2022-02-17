import React from "react";
import Container from "../components/container";

const Header = ({ title, subheading }) => {
  return (
    <>
      <header className="relative z-20 flex h-72 items-center justify-start">
        <Container className="flex flex-col justify-center pt-24 text-center sm:text-left">
          <h1 className="mb-2 text-3xl font-semibold text-white">{title}</h1>
          <small className="text-xl font-normal text-white">{subheading}</small>
        </Container>
      </header>
    </>
  );
};

export default Header;
