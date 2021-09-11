/* eslint-disable */
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  const slider = useRef(0);
  const goToSlide = (e) => {
    const slideNo = e.target.dataset.slide;
    slider.current.slickGoTo(slideNo);
  };
  const settings = {
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    touchMove: true,
    swipeToSlide: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    waitForAnimate: false,
    fade: true,
  };
  return (
    <>
      <div className="h-full w-screen">
        <Slider {...settings} ref={slider}>
          <section className="panel relative w-screen h-auto pt-12">
            <div className="container mx-auto flex flex-col items-center justify-start sm:px-0 px-4">
              <div className="justify-evenly sm:flex sm:text-left text-center block">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg sm:border-b-8 border-blue "
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-normal 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-normal 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  In the Media
                </button>
              </div>
              <div className="w-full flex flex-col justify-center lg:mt-6">
                <div className="flex w-full justify-center items-center 2xl:mt-10 xl:mt-3 lg:mt-8 mt-6">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-12 sm:mr-8 sm:w-32 w-20 mr-5"
                    src={Framework}
                  />
                  <img className="2xl:w-44 lg:w-36 sm:w-24 w-14" src={Koji} />
                </div>
                <div className="flex w-full mt-10 justify-center items-center">
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-12 sm:mr-8 sm:w-36 mr-3 w-20"
                    src={DACM}
                  />
                  <img
                    className="2xl:w-60 lg:w-48 lg:mr-12 sm:mr-8 sm:w-44 mr-3 w-32"
                    src={DistributedGlobal}
                  />
                  <img
                    className="2xl:w-44 lg:w-44 lg:mr-12 sm:mr-8 sm:mt-0 sm:w-36 w-16"
                    src={GSR}
                  />
                </div>
                <div className="flex w-full mt-10 flex-wrap justify-center items-center">
                  <img
                    className="lg:w-32 lg:mr-12 sm:w-24 sm:mr-8 w-12 mr-3"
                    src={Maven}
                  />
                  <img
                    className="lg:w-24 lg:mr-12 sm:w-20 sm:mr-8 w-10 mr-3"
                    src={LAO}
                  />
                  <img
                    className="lg:w-32 lg:mr-12 sm:w-24 sm:mr-8 w-12 mr-3"
                    src={EfficientFrontier}
                  />
                  <img
                    className="lg:w-20 lg:mr-12 sm:w-12 w-7 mr-3"
                    src={B}
                  />
                  <img className="lg:w-40 sm:w-24 w-12" src={Apollo} />
                </div>
              </div>
            </div>
          </section>
          <section className="panel relative w-screen h-auto pt-12">
            <div className="container mx-auto flex flex-col items-center justify-start sm:px-0 px-4">
              <div className="justify-evenly sm:flex sm:text-left text-center block">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-normal 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg sm:border-b-8 border-blue "
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-normal 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  In the Media
                </button>
              </div>
              <div className="w-full flex flex-col justify-center lg:mt-0 sm:pb-24 xl:px-0 px-4 mt-20 pb-12">
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
                    className="2xl:w-60 lg:w-48 sm:w-48 w-24 sm:mr-10 mr-5"
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
          <section className="panel relative w-screen h-auto pt-12">
            <div className="container mx-auto flex flex-col items-center justify-start sm:px-0 px-4">
              <div className="justify-evenly sm:flex sm:text-left text-center block">
                <button
                  data-slide="0"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-normal 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Partners
                </button>
                <button
                  data-slide="1"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 color-grey font-normal 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg"
                >
                  Ecosystem Contributors
                </button>
                <button
                  data-slide="2"
                  onClick={(e) => goToSlide(e)}
                  className="block 2xl:text-4xl lg:text-3xl cursor-pointer pb-1 mx-8 font-bold text-white 2xl:mb-4 lg:mb-2 sm:text-2xl whitespace-nowrap text-lg sm:border-b-8 border-blue "
                >
                  In the Media
                </button>
              </div>
              <div className="w-full flex flex-col justify-center lg:mt-0 sm:pb-24 mt-12 pb-12">
                <div className="flex justify-center items-start 2xl:mt-10 xl:mt-3 lg:mt-8">
                  <div className="flex flex-col justify-start items-center text-center w-96 sm:mr-5 mr-3 text-white">
                    <img
                      className="2xl:w-full xl:w-28 lg:w-52 sm:w-full w-32 rounded-2xl"
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
                  <div className="flex flex-col justify-start items-center text-center w-96 sm:ml-5 ml-3 text-white">
                    <img
                      className="2xl:w-full xl:w-28 lg:w-52 sm:w-full w-32 rounded-2xl"
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
        </Slider>
      </div>
    </>
  );
};

export default PartnersContributors;
