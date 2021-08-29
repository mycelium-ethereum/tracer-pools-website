import React from "react";

// Image assets

// Partners
import Framework from "/static/img/home-page/partners-contributors/partners/framework.svg";
import Koji from "/static/img/home-page/partners-contributors/partners/koji.svg";
import DACM from "/static/img/home-page/partners-contributors/partners/dacm.svg";
import DistributedGlobal from "/static/img/home-page/partners-contributors/partners/distributed-global.svg";
import GSR from "/static/img/home-page/partners-contributors/partners/gsr.svg";
import Maven from "/static/img/home-page/partners-contributors/partners/maven.svg";
import LAO from "/static/img/home-page/partners-contributors/partners/lao.svg";
import EfficientFrontier from "/static/img/home-page/partners-contributors/partners/efficient-frontier.svg";
import B from "/static/img/home-page/partners-contributors/partners/b.svg";
import Apollo from "/static/img/home-page/partners-contributors/partners/apollo.svg";

// Contributors
import Mycelium from "/static/img/home-page/partners-contributors/contributors/mycelium.svg";
import Chainlink from "/static/img/home-page/partners-contributors/contributors/chainlink.svg";
import SigmaPrime from "/static/img/home-page/partners-contributors/contributors/sigma-prime.svg";
import RMIT from "/static/img/home-page/partners-contributors/contributors/rmit.svg";
import EPNS from "/static/img/home-page/partners-contributors/contributors/epns.svg";

// Media
import FinancialReview from "/static/img/home-page/partners-contributors/media/financial-review.png";
import CoinTelegraph from "/static/img/home-page/partners-contributors/media/coin-telegraph.png";

const PartnersContributors = () => {
  return (
    <>
      <section id="pinMasterPartners" className="pin-master">
        <div id="pinContainerPartners" className="pin-container">
          <section className="panel partners flex flex-col justify-start bg-white opacity-0 z-0 transition-all duration-1000">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full pt-48">
              <p className="text-4xl font-bold color-darkgrey mb-4">
                Partners</p>
              <p className="text-4xl color-lightgrey mb-4">
                Ecosystem Contributors
              </p>
              <p className="text-4xl color-lightgrey mb-4">In the Media</p>
              <div className="flex w-full h-32 justify-center items-center mt-10">
                <img className="w-60 mr-10" src={Framework} />
                <img className="w-60" src={Koji} />
              </div>
              <div className="flex w-full h-32 justify-center items-center">
                <img className="w-60 mr-10" src={DACM} />
                <img className="w-60 mr-10" src={DistributedGlobal} />
                <img className="w-60 mr-10" src={GSR} />
              </div>
              <div className="flex w-full h-32 justify-center items-center">
                <img className="w-32 mr-10" src={Maven} />
                <img className="w-32 mr-10" src={LAO} />
                <img className="w-32 mr-10" src={EfficientFrontier} />
                <img className="w-32 mr-10" src={B} />
                <img className="w-32" src={Apollo} />
              </div>
            </div>
          </section>
          <section className="panel contributors flex flex-col justify-start bg-white opacity-0 z-0 transition-all duration-1000">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full pt-48">
              <p className="text-4xl color-lightgrey mb-4">Partners</p>
              <p className="text-4xl font-bold color-darkgrey mb-4">
                Ecosystem Contributors
              </p>
              <p className="text-4xl color-lightgrey mb-4">In the Media</p>
              <div className="flex w-full h-32 justify-center items-center mt-10">
                <img className="w-60 mr-10" src={Mycelium} />
                <img className="w-60" src={Chainlink} />
              </div>
              <div className="flex w-full h-32 justify-center items-center">
                <img className="w-60 mr-10" src={SigmaPrime} />
                <img className="w-32 mr-10" src={RMIT} />
                <img className="w-60 mr-10" src={EPNS} />
              </div>
            </div>
          </section>
          <section className="panel media flex flex-col justify-start bg-white opacity-0 z-0 transition-all duration-1000">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full pt-48">
              <p className="text-4xl color-lightgrey mb-4">Partners</p>
              <p className="text-4xl color-lightgrey mb-4">
                Ecosystem Contributors
              </p>
              <p className="text-4xl font-bold color-darkgrey mb-4">In the Media</p>
              <div className="flex justify-center items-start mt-10">
                <div className="flex flex-col justify-start items-center text-center w-96 mr-5">
                  <img className="w-full" src={FinancialReview} />
                  <p className="mb-4 mt-6 text-xl">
                    <b className="text-semibold">Australian Financial Review</b>
                  </p>
                  <p className="text-xl">
                    A new system for trading derivatives has raised $US4.5
                    million from leading investors in the booming area of
                    decentralised finance and its local developer is creating
                    jobs in Australia to build it out.
                  </p>
                </div>
                <div className="flex flex-col justify-start items-center text-center w-96 ml-5">
                  <img className="w-full" src={CoinTelegraph} />
                  <p className="mb-4 mt-6 text-xl">
                    <b className="text-semibold">Coin Telegraph</b>
                  </p>
                  <p className="text-xl">
                    Decentralised derivatives platform, Tracer DAO, has
                    announced a successful $4.5 million fundraising round to
                    expand its team and product suite.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default PartnersContributors;
