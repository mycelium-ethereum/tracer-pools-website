import React from "react";

// Images
import TracerBoxPurple from "../../static/img/tracer-icon-box-purple.svg";
import TracerBoxGreen from "../../static/img/tracer-icon-box-green.svg";
import TracerBoxBlue from "../../static/img/tracer-icon-box-blue.svg";
import DiscourseLogo from "../../static/img/discourse-white.svg";
import TwitterLogo from "../../static/img/twitter-white.svg";
import GitHubLogo from "../../static/img/github-white.svg";
import DiscordLogo from "../../static/img/discord-white.svg";
import Folder from "../../static/img/folder.svg";

const DropdownMenu = ({ dropdownOpen, darkerNav }) => {
  const Icons = [
    {
      text: "Website",
      href: "https://tracer.finance",
      logo: Folder,
    },
    {
      text: "Twitter",
      href: "https://twitter.com/TracerDAO",
      logo: TwitterLogo,
    },
    {
      text: "Discourse",
      href: "https://discourse.tracer.finance/",
      logo: DiscourseLogo,
    },
    {
      text: "Github",
      href: "https://github.com/tracer-protocol/",
      logo: GitHubLogo,
    },
    {
      text: "Discord",
      href: "https://discord.gg/7rhrmYkAJs",
      logo: DiscordLogo,
    },
  ];
  return (
    <div
      id="dropdown"
      className={
        "dropdown transform-gpu transition-all sm:duration-500 duration-700 sm:absolute fixed sm:px-8 px-4 block sm:rounded-lg sm:top-11 left-0 top-16 box-border overflow-hidden " +
        (dropdownOpen ? "active" : "inactive")
      }
    >
      <div
        className={
          "backdrop absolute top-0 left-0 h-full w-full" +
          (darkerNav ? " darker" : "")
        }
      />
      <div className="relative sm:mt-8 mt-4">
        <a
          className="dropdown-option transition-colors duration-500 flex mb-6 rounded-lg"
          href="https://pools.tracer.finance/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="h-12 mr-3" src={TracerBoxPurple} alt="Tracer Box" />
          <span className="block text-white font-normal my-auto">
            <p>Tracer</p>
            <p>
              <b>Perpetual Pools</b>
            </p>
          </span>
        </a>
        <a
          className="dropdown-option transition-colors duration-500 flex mb-6 rounded-lg"
          href="https://vote.tracer.finance/#/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="h-12 mr-3" src={TracerBoxGreen} alt="Tracer Box" />
          <span className="block text-white font-normal my-auto">
            <p>Tracer</p>
            <p>
              <b>Governance</b>
            </p>
          </span>
        </a>
        <a
          className="dropdown-option transition-colors duration-500 flex mb-6 rounded-lg"
          href="https://docs.tracer.finance"
          rel="noreferrer"
          target="_blank"
        >
          <img className="h-12 mr-3" src={TracerBoxBlue} alt="Tracer Box" />
          <span className="block text-white font-normal my-auto">
            <p>Tracer</p>
            <p>
              <b>Documentation</b>
            </p>
          </span>
        </a>
        <div className="mt-12">
          {Icons.map((icon, i) => (
            <a
              className="dropdown-option transition-colors duration-500 flex items-center mt-5 rounded-lg"
              href={icon.href}
              rel="noreferrer"
              target="_blank"
              key={i}
            >
              <span>
                <img
                  className="social-icon w-5 mr-2 opacity-70"
                  src={icon.logo}
                  alt="Logo"
                />
              </span>
              <span className="block text-white font-normal my-auto">
                {icon.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
