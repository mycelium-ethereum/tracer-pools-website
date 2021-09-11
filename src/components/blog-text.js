/* eslint-disable */
import React, { useEffect, useState } from "react";
import Home from "../../static/img/blog-posts/home.svg";
import Calendar from "../../static/img/blog-posts/calendar.svg";
import Clock from "../../static/img/blog-posts/clock.svg";
import { Link } from "gatsby";

const BlogText = () => {
  return (
    <>
      <section className="h-full w-full z-20 relative lg:mt-24 mt-20 bg-white">
        <div className="container relative w-full mx-auto pt-6 pb-6 lg:px-0 px-4">
          <div className="flex justify-between md:flex-row flex-col md:mb-32 mb-12">
            <div className="flex items-center text-gray-400">
              <Link to="/">
                <img className="w-4.5 h-4.5" src={Home} />
              </Link>
              <span className="mx-3">/</span>
              <Link to="/radar">Radar</Link>
              <span className="mx-3">/</span>
              <Link to="/radar">TCR Public Distribution</Link>
            </div>
            <div className="flex items-center flex-wrap text-gray-400 md:mt-0 mt-3">
              <div className="flex items-center md:mb-0 mb-3">
                <img className="w-4.5 h-4.5 mr-3" src={Calendar} />
                <span className="md:mr-6 mr-3">10 September 2021</span>
              </div>
              <div className="flex items-center md:mb-0 mb-3">
                <img className="w-4.5 h-4.5 mr-3" src={Clock} />
                <span>Read time: 3 minutes</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className=" text-black font-semibold mb-2 md:text-3xl text-2xl sm:text-center">
              TCR Public Distribution
            </h1>
            {/* Tagline */}
            <small className="block font-normal text-gray-500 sm:text-center sm:text-xl text-base">
              TCR can now be purchased via Gnosis Auction
            </small>
            <div className="mt-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogText;
