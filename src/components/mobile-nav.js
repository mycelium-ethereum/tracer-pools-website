import React from "react";
import { Link } from "gatsby";
import Button from "./button";

const MobileNav = ({ navOpen, darkerNav, closeNav }) => {
  return (
    <menu
      className={
        "mobile-nav fixed top-16 left-0 mt-0 h-screen w-full pl-0 transition-all duration-[600ms]" +
        (navOpen ? " active left-0" : " left-full")
      }
    >
      <div
        className={
          "backdrop absolute top-0 left-0 h-full w-full transition-opacity duration-300" +
          (darkerNav ? " darker" : "")
        }
      />
      <div className="mx-auto flex w-60 flex-col justify-center pt-12 text-center">
        <div className="relative">
          <div className="mt-6 w-full">
            <Link
              onClick={() => closeNav()}
              className="mobile-link rounded-lg py-2 px-4 opacity-0"
              to="/learn"
            >
              <span className="text-lg font-normal text-white">Learn</span>
            </Link>
          </div>
          <div className="mt-6 w-full">
            <Button
              onClick={() => closeNav()}
              className="h-12 w-full border border-white text-lg font-normal opacity-0"
              href="https://pools.tracer.finance/"
              analytics='"LaunchPoolsNavCTA", {"props":{"plan":"Navigation"}}'
            >
              Launch Pools
            </Button>
          </div>
          <div className="mt-6 w-full">
            <a
              onClick={() => closeNav()}
              className="mobile-link rounded-lg py-2 px-4 opacity-0"
              href="https://vote.tracer.finance/#/"
            >
              <span className="text-lg font-normal text-white">Govern</span>
            </a>
          </div>
          <div className="mt-6 w-full">
            <Link
              onClick={() => closeNav()}
              className="mobile-link rounded-lg py-2 px-4 opacity-0"
              to="/radar"
            >
              <span className="text-lg font-normal text-white">News</span>
            </Link>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default MobileNav;
