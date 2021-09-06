import React, { useEffect } from "react";

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
import SigmaPrime from "/static/img/home-page/partners-contributors/contributors/sigma-prime.png";
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
  // Make the first slide active on resize
  const toggleActiveStyles = () => {
    const slides = document.querySelectorAll("#pinContainerPartners .panel");
    if (isMobile()) {
      slides[0].classList.add("active");
      slides[1].classList.remove("active");
      slides[2].classList.remove("active");
    }
  };
  // Handle click on partner/contributor headings on mobile
  const partnerClick = () => {
    const sectionLinks = document.querySelectorAll("p[data-section-link]");
    sectionLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        if (isMobile()) {
          const target = e.target.dataset.sectionLink;
          const slides = document.querySelectorAll("#pinMasterPartners .panel");
          slides.forEach((e) => e.classList.remove("active"));
          if (target == 0) {
            slides[0].classList.add("active");
          }
          if (target == 1) {
            slides[1].classList.add("active");
          }
          if (target == 2) {
            slides[2].classList.add("active");
          }
        }
      });
    });
  };
  useEffect(() => {
    toggleActiveStyles();
    window.addEventListener("resize", function () {
      toggleActiveStyles();
    });
    partnerClick();
  }, []);
  return (
    <>
      <section id="pinMasterPartners" className="pin-master">
        <div
          id="pinContainerPartners"
          className="pin-container overflow-hidden"
        >
          <section className="panel lg:absolute relative top-0 left-0 w-full lg:h-screen h-auto partners flex flex-col justify-start opacity-0 z-0 transition-all ease-in-out linear duration-700 lg:pb-0 sm:pb-32">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <div className="justify-evenly sm:flex sm:text-left text-center block">
                <p
                  data-section-link="0"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg sm:border-b-8 border-blue "
                >
                  Partners
                </p>
                <p
                  data-section-link="1"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-bold 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Ecosystem Contributors
                </p>
                <p
                  data-section-link="2"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-bold 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  In the Media
                </p>
              </div>
              <div className="h-auto w-full h-full flex flex-col justify-center lg:mt-0 sm:pb-24 sm:mt-20 mt-12 pb-20">
                <div className="flex w-full justify-center items-center 2xl:mt-10 xl:mt-3 lg:mt-8 mt-6">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 sm:mr-8 sm:w-32 w-20 mr-5"
                    src={Framework}
                  />
                  <img className="2xl:w-48 lg:w-48 sm:w-24 w-16" src={Koji} />
                </div>
                <div className="flex w-full mt-6 justify-center items-center">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 sm:mr-8 sm:w-36 mr-4 w-24"
                    src={DACM}
                  />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-10 sm:mr-8 sm:w-42 mr-4 w-32"
                    src={DistributedGlobal}
                  />
                  <img
                    className="2xl:w-48 lg:w-48 lg:mr-10 sm:mr-8 sm:mt-0 sm:w-36 mr-4 w-20"
                    src={GSR}
                  />
                </div>
                <div className="flex w-full mt-6 flex-wrap justify-center items-center">
                  <img
                    className="lg:w-32 lg:mr-10 sm:w-24 sm:mr-8 w-12 mr-5"
                    src={Maven}
                  />
                  <img
                    className="lg:w-32 lg:mr-10 sm:w-20 sm:mr-8 w-12 mr-5"
                    src={LAO}
                  />
                  <img
                    className="lg:w-32 lg:mr-10 sm:w-24 sm:mr-8 w-12 mr-5"
                    src={EfficientFrontier}
                  />
                  <img
                    className="lg:w-24 lg:mr-10 sm:w-16 sm:w-12 w-10 mr-5"
                    src={B}
                  />
                  <img className="lg:w-32 sm:w-24 w-12" src={Apollo} />
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full lg:h-screen h-auto contributors flex flex-col justify-start opacity-0 z-0 transition-all ease-in-out linear duration-700">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32">
              <div className="justify-evenly sm:flex sm:text-left text-center block">
                <p
                  data-section-link="0"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-bold 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Partners
                </p>
                <p
                  data-section-link="1"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg sm:border-b-8 border-blue"
                >
                  Ecosystem Contributors
                </p>
                <p
                  data-section-link="2"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-bold 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  In the Media
                </p>
              </div>
              <div className="h-auto w-full h-full flex flex-col justify-center lg:mt-0 sm:pb-24 sm:px-0 px-4 mt-20 pb-12">
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center 2xl:mt-10 xl:mt-3 lg:mt-8">
                  <img
                    className="2xl:w-60 lg:w-48 sm:mr-10 sm:w-48 w-24 mr-5"
                    src={Mycelium}
                  />
                  <img
                    className="2xl:w-60 lg:w-48 sm:w-48 w-24"
                    src={Chainlink}
                  />
                </div>
                <div className="flex w-full 2xl:h-32 lg:h-24 justify-center items-center sm:mt-8 mt-4">
                  <img
                    className="2xl:w-60 lg:w-48 sm:w-48 sm:w-32 w-24 sm:mr-10 mr-5"
                    src={SigmaPrime}
                  />
                  <img
                    className="lg:w-32 sm:w-20 sm:mr-10 w-16  mr-5"
                    src={RMIT}
                  />
                  <img
                    className="2xl:w-60 lg:w-48 sm:w-32 w-24 sm:mr-10 mr-5"
                    src={EPNS}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="panel absolute top-0 left-0 w-full lg:h-screen h-auto media flex flex-col justify-start opacity-0 z-0 transition-all ease-in-out linear duration-700">
            <div className="flex container xl mx-auto flex flex-col items-center justify-start h-full 2xl:pt-48 lg:pt-32 sm:px-12 px-4">
              <div className="justify-evenly sm:flex sm:text-left text-center block">
                <p
                  data-section-link="0"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-bold 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Partners
                </p>
                <p
                  data-section-link="1"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-bold 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Ecosystem Contributors
                </p>
                <p
                  data-section-link="2"
                  className="2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg sm:border-b-8 border-blue"
                >
                  In the Media
                </p>
              </div>
              <div className="h-auto w-full h-full flex flex-col justify-center lg:mt-0 sm:pb-24 mt-12 pb-12">
                <div className="flex justify-center items-start 2xl:mt-10 xl:mt-3 lg:mt-8">
                  <div className="flex flex-col justify-start items-center text-center w-96 mr-5 text-white">
                    <img
                      className="2xl:w-full xl:w-28 lg:w-52 w-full rounded-2xl"
                      src={FinancialReview}
                    />
                    <p className="mb-4 mt-6 sm:text-xl text-lg">
                      <b className="text-semibold">
                        Australian Financial Review
                      </b>
                    </p>
                    <p className="lg:text-xl text-lg sm:block hidden">
                      A new system for trading derivatives has raised $US4.5
                      million from leading investors in the booming area of
                      decentralised finance and its local developer is creating
                      jobs in Australia to build it out.
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-center text-center w-96 ml-5 text-white">
                    <img
                      className="2xl:w-full xl:w-28 lg:w-52 w-full rounded-2xl"
                      src={CoinTelegraph}
                    />
                    <p className="mb-4 mt-6 sm:text-xl text-lg">
                      <b className="text-semibold">Coin Telegraph</b>
                    </p>
                    <p className="lg:text-xl text-lg sm:block hidden">
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
