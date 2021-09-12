/* eslint-disable */
import React from "react";
import PaperDownload from "./paper-download";
// Header images
import PoolsHeader from "../../static/img/learn/pools-header.png";
import PerpetualSwapsHeader from "../../static/img/learn/perpetual-swaps-header.png";
import P2PFinanceHeader from "../../static/img/learn/p2p-finance-header.png";
// Paper images
import PoolsLitepaper from "../../static/img/learn/pools-litepaper.png";
import PerpetualSwapsPaper from "../../static/img/learn/perpetual-swaps-paper.png";
import P2PFinancePaper from "../../static/img/learn/p2p-finance-paper.png";

const ResearchPapers = () => {
  const poolsProps = {
    title: "Perpetual Pools",
    header: PoolsHeader,
    image: PoolsLitepaper,
    link: "#",
  };
  const perpetualSwapsProps = {
    title: "Perpetual Swaps",
    header: PerpetualSwapsHeader,
    image: PerpetualSwapsPaper,
    link: "#",
  };
  const p2pFinanceProps = {
    title: "Peer-to-Peer Finance",
    header: P2PFinanceHeader,
    image: P2PFinancePaper,
    link: "#",
  };
  return (
    <>
      <section className="h-full w-full z-20 relative mt-16">
        {/* <div class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-blue opacity-30"></div> */}
        <div className="container relative w-full mx-auto pb-12 lg:px-0 px-4 md:grid block grid-cols-3 gap-4 pt-3">
          <PaperDownload {...poolsProps}/>
          <PaperDownload {...perpetualSwapsProps}/>
          <PaperDownload {...p2pFinanceProps}/>
        </div>
      </section>
    </>
  );
};

export default ResearchPapers;
