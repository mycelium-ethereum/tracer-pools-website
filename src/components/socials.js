import React from "react";

import Trapezoid from "/static/img/trapezoid.svg";
import Discourse from "/static/img/social-icons/discourse-side.svg";
import GitHub from "/static/img/social-icons/github-side.svg";
import Discord from "/static/img/social-icons/discord-side.svg";
import Twitter from "/static/img/social-icons/twitter-side.svg";

const Socials = () => {
  return (
    <div className="fixed lg:top-1/3 top-64 z-50 xl:transform-none transform-gpu scale-75 -right-2.5">
      <img className="-mt-3" src={Trapezoid} alt="Trapezoid" />
      <a
        href="https://discourse.tracer.finance"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="absolute top-12 lg:left-2.5 left-3.5 cursor-pointer"
          src={Discourse}
          alt="Discourse"
        />
      </a>
      <a
        href="https://github.com/tracer-protocol"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="absolute top-28 lg:left-2.5 left-3.5 cursor-pointer"
          src={GitHub}
          alt="Github"
        />
      </a>
      <a href="https://discord.gg/kvJEwfvyrW" rel="noreferrer" target="_blank">
        <img
          className="absolute top-44 lg:left-2.5 left-3.5 cursor-pointer"
          src={Discord}
          alt="Discord"
        />
      </a>
      <a href="https://twitter.com/TracerDAO" rel="noreferrer" target="_blank">
        <img
          className="absolute top-60 lg:left-2.5 left-3.5 cursor-pointer"
          src={Twitter}
          alt="Twitter"
        />
      </a>
    </div>
  );
};

export default Socials;
