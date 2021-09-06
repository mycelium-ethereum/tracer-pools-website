import React from "react";

import Trapezoid from "/static/img/trapezoid.svg";
import Discourse from "/static/img/discourse.png";
import GitHub from "/static/img/github.png";
import Discord from "/static/img/discord.png";
import Twitter from "/static/img/twitter.png";

const Socials = () => {
  return (
    <div className="fixed lg:top-1/3 top-64 right-0 z-50 xl:transform-none transform-gpu scale-75 -right-2.5">
      <img className="-mt-8" src={Trapezoid} alt="Trapezoid" />
      <a href="https://discourse.tracer.finance" target="_blank">
        <img
          className="absolute top-12 lg:left-5 left-6 cursor-pointer"
          src={Discourse}
          alt="Discourse"
        />
      </a>
      <a href="https://github.com/tracer-protocol" target="_blank">
        <img
          className="absolute top-28 lg:left-5 left-6 cursor-pointer"
          src={GitHub}
          alt="Github"
        />
      </a>
      <a href="https://discord.gg/kvJEwfvyrW" target="_blank">
        <img
          className="absolute top-44 lg:left-5 left-6 cursor-pointer"
          src={Discord}
          alt="Discord"
        />
      </a>
      <a href="https://twitter.com/TracerDAO" target="_blank">
        <img
          className="absolute top-60 lg:left-5 left-6 cursor-pointer"
          src={Twitter}
          alt="Twitter"
        />
      </a>
    </div>
  );
};

export default Socials;
