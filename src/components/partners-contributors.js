import React, { useEffect } from "react";

// Image assets

// Partners
import Framework from "/static/img/home-page/partners-contributors/partners/framework.png";
import Koji from "/static/img/home-page/partners-contributors/partners/koji.png";
import DACM from "/static/img/home-page/partners-contributors/partners/dacm.png";
import DistributedGlobal from "/static/img/home-page/partners-contributors/partners/distributed-global.png";
import GSR from "/static/img/home-page/partners-contributors/partners/gsr.png";
import Maven from "/static/img/home-page/partners-contributors/partners/maven.png";
import LAO from "/static/img/home-page/partners-contributors/partners/lao.png";
import EfficientFrontier from "/static/img/home-page/partners-contributors/partners/efficient-frontier.png";
import B from "/static/img/home-page/partners-contributors/partners/b.png";
import Apollo from "/static/img/home-page/partners-contributors/partners/apollo.png";

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
  const isMobile = () => {
    const width = window.innerWidth;
    return width < 1024;
  };
  const toggleActiveStyles = () => {
    const slides = document.querySelectorAll("#pinContainerPartners .panel");
    if (isMobile()) {
      slides[0].classList.add("active");
      slides[1].classList.remove("active");
      slides[2].classList.remove("active");
    }
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", function () {
      toggleActiveStyles();
    });
  });
  return (
    <>
      <section id="pinMasterPartners" className="pin-master">
        <div id="pinContainerPartners" className="pin-container overflow-hidden">
          <section className="panel lg:absolute relative top-0 left-0 w-full lg:h-screen h-auto partners flex flex-col justify-start  opacity-0 z-0 transition-all ease-in-out linear duration-1500 lg:pb-0 sm:pb-24">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <p className="2xl:text-4xl lg:text-3xl font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl text-lg">
                Partners
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-tracerdarkblue 2xl:mb-4 lg:mb-2 sm:text-2xl text-lg">
                Ecosystem Contributors
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-tracerdarkblue 2xl:mb-4 lg:mb-2 sm:text-2xl text-lg">
                In the Media
              </p>
              <div className="h-auto w-full h-full flex flex-col justify-center sm:pb-24 pb-12">
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center 2xl:mt-10 lg:2xl:mt-10 xl:mt-3 lg:mt-8 mt-6">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 w-20 mr-5"
                    src={Framework}
                  />
                  <img className="2xl:w-60 lg:w-48 w-16" src={Koji} />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 lg:mt-0 mt-6 flex-wrap justify-center items-center">
                  <img className="2xl:w-60 lg:w-48 lg:mr-10 w-1/4 mr-2" src={DACM} />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 w-1/4 mr-5"
                    src={DistributedGlobal}
                  />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 sm:mt-0 w-1/4"
                    src={GSR}
                  />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 lg:mt-0 mt-4 flex-wrap justify-center items-center">
                  <img className="lg:w-32 lg:mr-10 sm:w-24 w-12 mr-5" src={Maven} />
                  <img className="lg:w-32 lg:mr-10 sm:w-24 w-12 mr-5" src={LAO} />
                  <img
                    className="lg:w-32 lg:mr-10 sm:w-24 w-12 mr-5"
                    src={EfficientFrontier}
                  />
                  <img className="lg:w-32 lg:mr-10 sm:w-24 w-12 mr-5" src={B} />
                  <img className="lg:w-32 sm:w-24 w-12" src={Apollo} />
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full lg:h-screen h-auto contributors flex flex-col justify-start  opacity-0 z-0 transition-all ease-in-out linear duration-1500">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <p className="2xl:text-4xl lg:text-3xl color-tracerdarkblue 2xl:mb-4 lg:mb-2">
                Partners
              </p>
              <p className="2xl:text-4xl lg:text-3xl font-bold text-white 2xl:mb-4 lg:mb-2">
                Ecosystem Contributors
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-tracerdarkblue 2xl:mb-4 lg:mb-2">
                In the Media
              </p>
              <div className="h-auto w-full h-full flex flex-col justify-center sm:pb-24">
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center 2xl:mt-10 lg:2xl:mt-10 xl:mt-3 lg:mt-8">
                  <img className="2xl:w-60 lg:w-48 mr-10" src={Mycelium} />
                  <img className="2xl:w-60 lg:w-48" src={Chainlink} />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center">
                  <img className="2xl:w-60 lg:w-48 mr-10" src={SigmaPrime} />
                  <img className="w-32 mr-10" src={RMIT} />
                  <img className="2xl:w-60 lg:w-48 mr-10" src={EPNS} />
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full lg:h-screen h-auto media flex flex-col justify-start  opacity-0 z-0 transition-all ease-in-out linear duration-1500">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <p className="2xl:text-4xl lg:text-3xl color-tracerdarkblue 2xl:mb-4 lg:mb-2">
                Partners
              </p>
              <p className="2xl:text-4xl lg:text-3xl color-tracerdarkblue 2xl:mb-4 lg:mb-2">
                Ecosystem Contributors
              </p>
              <p className="2xl:text-4xl lg:text-3xl font-bold text-white 2xl:mb-4 lg:mb-2">
                In the Media
              </p>
              <div className="h-auto w-full h-full flex flex-col justify-center sm:pb-24">
                <div className="flex justify-center items-start 2xl:mt-10 xl:mt-3 lg:mt-8">
                  <div className="flex flex-col justify-start items-center text-center w-96 mr-5 text-white">
                    <img
                      className="2xlw-full xl:w-28 lg:w-80 rounded-lg"
                      src={FinancialReview}
                    />
                    <p className="mb-4 mt-6 text-xl">
                      <b className="text-semibold">
                        Australian Financial Review
                      </b>
                    </p>
                    <p className="text-xl">
                      A new system for trading derivatives has raised $US4.5
                      million from leading investors in the booming area of
                      decentralised finance and its local developer is creating
                      jobs in Australia to build it out.
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-center text-center w-96 ml-5 text-white">
                    <img
                      className="2xlw-full xl:w-28 lg:w-80 rounded-lg"
                      src={CoinTelegraph}
                    />
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
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default PartnersContributors;
