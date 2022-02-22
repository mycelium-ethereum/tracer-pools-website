import React from "react";
import Ratio from "react-ratio";
import Container from "../components/container";
import CityBottomDark from "/static/img/learn/city-bottom.png";
import YouTubeIcon from "/static/img/learn/youtube.svg";
import OpenLinkIcon from "/static/img/learn/open-link.svg";
const TracerDrop = () => {
  return (
    <>
      <section className="bg-blue relative z-20 mt-24 h-full w-full md:mt-20">
        <img
          className="absolute top-0 left-0 h-auto w-full min-w-[800px]"
          src={CityBottomDark}
          alt=""
        />
        <Container className="pb-12 lg:max-w-[900px]">
          <header className="mx-auto mb-10 text-center">
            <h1 className="mb-1 text-2xl font-black text-white transition-all duration-500 md:mb-3 md:text-[40px]">
              Tracer Drop
            </h1>
            <small className="text-lg font-normal text-white transition-all duration-500 md:text-xl">
              The latest research from Tracer and the RMIT Blockchain
              <br /> Innovation Hub. Every fortnight on Twitter and YouTube.
            </small>
          </header>
          <div className="rounded-bl-xl rounded-br-xl bg-[#00007A] bg-opacity-50">
            <Ratio ratio={16 / 9}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/?listType=playlist&list=PLxyjg08ON02UAORUxX82EQsk8W782O2Yl"
                frameborder="0"
                allowfullscreen
              />
            </Ratio>
            <div className="p-10 text-center text-white md:text-lg">
              <p>
                DeFi has given the ability to access a blue-chip NFTs in the
                same way we might have financial instruments around property
                rentals. Now we can point derivatives or other financial
                contracts to given attributes of products in a market. With
                Tracer’s derivative infrastructure, the goal is to open up new
                financial markets that combine all components of the digital
                future across Web3 and the Metaverse. Open-sourced,
                decentralized and democratized.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/channel/UChQFEjLu4vaaS96iCRbasFg"
            target="_blank"
            className="mx-auto mt-14 mb-4 flex w-max text-white underline transition-colors duration-300 hover:text-blue-400"
            id="open-youtube"
          >
            <img className="mr-2.5" src={YouTubeIcon} />
            More episodes
            <img className="ml-2.5" src={OpenLinkIcon} />
          </a>
        </Container>
      </section>
    </>
  );
};

export default TracerDrop;
