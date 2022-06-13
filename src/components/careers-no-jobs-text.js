import React from "react";
import SolidButton from "./button-solid";
import DiscordLogo from "../../static/img/social-icons/discord-nav.svg";

export default function NoJobsAvailable() {
  return (
    <div className="mx-auto mt-20 mb-40 text-center text-[#828790] md:mb-80 md:mt-40">
      <p className="text-2xl">No positions available at this time.</p>
      <p className="mt-2">
        <small className="text-base font-normal">
          Join our discord group to keep up to date on future job opportunities.
        </small>
      </p>
      <SolidButton
        link="https://discord.com/invite/tracerdao"
        blue
        className="mt-4 w-[149px]"
      >
        <img src={DiscordLogo} className="mr-2 h-[15px] w-5" /> Join Us
      </SolidButton>
    </div>
  );
}
