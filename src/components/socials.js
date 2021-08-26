import React from "react";

import Trapezoid from "/static/img/trapezoid.png";
import Discourse from "/static/img/discourse.png";
import GitHub from "/static/img/github.png";
import Discord from "/static/img/discord.png";
import Twitter from "/static/img/twitter.png";

const Socials = () => {
  return (
    <div className="hidden sm:block fixed top-1/3 right-0 z-10">
      <img src={Trapezoid} alt="Trapezoid" />
      <img className="absolute top-12 left-4 cursor-pointer" src={Discourse} alt="Discourse" />
      <img className="absolute top-28 left-4 cursor-pointer" src={GitHub} alt="Github" />
      <img className="absolute top-44 left-4 cursor-pointer" src={Discord} alt="Discord" />
      <img className="absolute top-60 left-4 cursor-pointer" src={Twitter} alt="Twitter" />
    </div>
  );
};

export default Socials;
