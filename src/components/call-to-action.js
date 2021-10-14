import React from "react";
import SolidButton from "./solid-button";
import { Link } from "gatsby";

// Images
import CTABackground from "../../static/img/blog-posts/cta-bg.svg";

const CallToAction = () => {
  return (
    <div className="w-full relative sm:px-12 sm:py-14 px-6 py-9 overflow-hidden rounded-xl sm:mt-20 mt-12">
      <img
        className="w-full absolute bottom-0 right-0"
        src={CTABackground}
        alt=""
      />
      <div className="relative z-0 text-white font-normal">
        <p className="xl:text-2xl sm:text-xl sm:text-left text-center text-base">
          Tracer Perpetual Pools is now live on Arbitrum One. Fully fungible,
          leveraged tokens for the DeFi economy, with no margin requirements and
          no liquidations.
          <Link
            to="/radar/perpetual-pools-launch"
            className="ml-2 underline"
            data-analytics='"RadarReadMoreCTA", {"props":{"plan":"Navigation"}}'
          >
            Read more
          </Link>
        </p>
        <SolidButton
          className="sm:ml-0 mx-auto mt-9 sm:w-56 sm:px-0 whitespace-nowrap"
          href="https://pools.tracer.finance/"
          analytics='"RadarPoolsFooterCTA", {"props":{"plan":"Navigation"}}'
        >
          Launch Perpetual Pools
        </SolidButton>
      </div>
    </div>
  );
};

export default CallToAction;
