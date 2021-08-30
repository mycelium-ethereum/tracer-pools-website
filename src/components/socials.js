import React from "react";

import Trapezoid from "/static/img/trapezoid.svg";
import Discourse from "/static/img/discourse.png";
import GitHub from "/static/img/github.png";
import Discord from "/static/img/discord.png";
import Twitter from "/static/img/twitter.png";

const Socials = () => {
  return (
    <div className="fixed lg:top-1/3 top-64 right-0 z-10 xl:transform-none transform-gpu scale-75 -right-2.5">
      <img className="-mt-8" src={Trapezoid} alt="Trapezoid" />
      <img className="absolute top-12 left-6 cursor-pointer" src={Discourse} alt="Discourse" />
      <img className="absolute top-28 left-6 cursor-pointer" src={GitHub} alt="Github" />
      <img className="absolute top-44 left-6 cursor-pointer" src={Discord} alt="Discord" />
      <img className="absolute top-60 left-6 cursor-pointer" src={Twitter} alt="Twitter" />
    </div>
  );
};

export default Socials;
