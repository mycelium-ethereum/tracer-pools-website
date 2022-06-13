import React from "react";

import Trapezoid from "/static/img/trapezoid.svg";
import Discourse from "/static/img/social-icons/discourse-side.svg";
import GitHub from "/static/img/social-icons/github-side.svg";
import Discord from "/static/img/social-icons/discord-side.svg";
import Twitter from "/static/img/social-icons/twitter-side.svg";

const Socials = () => {
  return (
    <div className="fixed top-64 -right-2 z-40 scale-75 transform-gpu lg:right-0 lg:top-1/3 xl:transform-none">
      <img className="-mt-8" src={Trapezoid} alt="Trapezoid" />
      <a href="https://discourse.tracer.finance" target="_blank">
        <img
          className="absolute top-12 left-[23px] cursor-pointer"
          src={Discourse}
          alt="Discourse"
        />
      </a>
      <a href="https://github.com/tracer-protocol" target="_blank">
        <img
          className="absolute top-28 left-[23px] cursor-pointer"
          src={GitHub}
          alt="Github"
        />
      </a>
      <a href="https://discord.com/invite/tracerdao" target="_blank">
        <img
          className="absolute top-44 left-[23px] cursor-pointer"
          src={Discord}
          alt="Discord"
        />
      </a>
      <a href="https://twitter.com/TracerDAO" target="_blank">
        <img
          className="absolute top-60 left-[23px] cursor-pointer"
          src={Twitter}
          alt="Twitter"
        />
      </a>
    </div>
  );
};

export default Socials;
