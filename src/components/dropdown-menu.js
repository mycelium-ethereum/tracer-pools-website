import React from "react";

// Images
import TracerBoxPurple from "../../static/img/tracer-icon-box-purple.svg";
import TracerBoxGreen from "../../static/img/tracer-icon-box-green.svg";
import TracerBoxBlue from "../../static/img/tracer-icon-box-blue.svg";
import DiscourseLogo from "../../static/img/social-icons/discourse-nav.svg";
import TwitterLogo from "../../static/img/social-icons/twitter-nav.svg";
import GitHubLogo from "../../static/img/social-icons/github-nav.svg";
import DiscordLogo from "../../static/img/social-icons/discord-nav.svg";

const DropdownMenu = ({ dropdownOpen, darkerNav }) => {
  const Icons = [
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
        "dropdown fixed left-0 top-16 box-border block transform-gpu overflow-hidden px-4 transition-all duration-500 sm:absolute sm:top-11 sm:rounded-lg sm:px-8 " +
        (dropdownOpen ? "active" : "inactive")
      }
    >
      <div
        className={
          "backdrop absolute top-0 left-0 h-full w-full" +
          (darkerNav ? " darker" : "")
        }
      />
      <div className="relative mt-4 sm:mt-8">
        <a
          className="dropdown-option mb-6 flex w-full rounded-lg pr-2 transition-colors duration-500"
          href="https://pools.tracer.finance/"
          target="_blank"
        >
          <img className="mr-3 h-12" src={TracerBoxPurple} alt="Tracer Box" />
          <span className="my-auto block font-normal text-white">
            <p>Tracer</p>
            <p>
              <b>Perpetual Pools</b>
            </p>
          </span>
        </a>
        <a
          id="tracer-governance"
          className="dropdown-option mb-6 flex w-full rounded-lg pr-2 transition-colors duration-500"
          href="https://vote.tracer.finance/#/"
          target="_blank"
        >
          <img className="mr-3 h-12" src={TracerBoxGreen} alt="Tracer Box" />
          <span className="my-auto block font-normal text-white">
            <p>Tracer</p>
            <p>
              <b>Governance</b>
            </p>
          </span>
        </a>
        <a
          id="tracer-documentation"
          className="dropdown-option mb-6 flex w-full rounded-lg pr-2 transition-colors duration-500"
          href="https://docs.tracer.finance"
          target="_blank"
        >
          <img className="mr-3 h-12" src={TracerBoxBlue} alt="Tracer Box" />
          <span className="my-auto block font-normal text-white">
            <p>Tracer</p>
            <p>
              <b>Documentation</b>
            </p>
          </span>
        </a>
        <div className="mt-12">
          {Icons.map((icon, i) => (
            <a
              className="mt-5 flex w-full items-center rounded-lg text-white transition-colors duration-500 hover:text-gray-400 sm:px-2"
              href={icon.href}
              target="_blank"
              key={i}
            >
              <span>
                <img
                  className="social-icon mr-2 w-5 opacity-70"
                  src={icon.logo}
                  alt="Logo"
                />
              </span>
              <span className="my-auto block font-normal">{icon.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
