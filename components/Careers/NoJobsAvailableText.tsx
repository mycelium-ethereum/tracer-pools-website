import React from "react";
import Button from "../Shared/Button";

const NoJobsAvailableText = () => {
  return (
    <div className="mx-auto mt-20 mb-40 text-center text-tertiary md:mb-80 md:mt-40">
      <p className="text-2xl">No positions available at this time.</p>
      <p className="mt-2">
        <small className="text-base font-normal">
          Join our discord group to keep up to date on future job opportunities.
        </small>
      </p>
      <Button
        link="https://discord.gg/cNUtXBkmNH"
        darkBlueGradient
        className="mt-4 w-[149px]"
      >
        <img src="/img/icons/discord.svg" className="mr-2 h-[15px] w-5" /> Join
        Us
      </Button>
    </div>
  );
};

export default NoJobsAvailableText;
