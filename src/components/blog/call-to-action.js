import React from "react";
import SolidButton from "../solid-button";

// Images
import CTABackground from "../../../static/img/blog-posts/cta-bg.svg";

const CallToAction = () => {
  return (
    <div className="relative mt-12 w-full overflow-hidden rounded-xl px-6 py-9 sm:mt-20 sm:px-12 sm:py-14">
      <img
        className="absolute bottom-0 right-0 w-full"
        src={CTABackground}
        alt=""
      />
      <div className="relative z-0 font-normal text-white">
        <p className="text-center text-base sm:text-left sm:text-xl xl:text-2xl">
          Tracer Perpetual Pools is now live on Arbitrum One. Fully fungible,
          leveraged tokens for the DeFi economy, with no margin requirements and
          no liquidations.
          <a
            href="/radar/perpetual-pools-launch"
            className="ml-2 underline"
            data-analytics='"RadarReadMoreCTA", {"props":{"plan":"Navigation"}}'
          >
            Read more
          </a>
        </p>
        <SolidButton
          className="mx-auto mt-9 whitespace-nowrap sm:ml-0 sm:w-56 sm:px-0"
          href="https://pools.tracer.finance/"
          analytics='"RadarPoolsFooterCTA", {"props":{"plan":"Navigation"}}'
          id="launch-pools-blog-cta"
        >
          Launch Perpetual Pools
        </SolidButton>
      </div>
    </div>
  );
};

export default CallToAction;
