import React from "react";
import PaperDownload from "./paper-download";
// Header images
import PoolsHeader from "../../static/img/learn/pools/pools-header.png";
import PerpetualSwapsHeader from "../../static/img/learn/swaps/perpetual-swaps-header.png";
import P2PFinanceHeader from "../../static/img/learn/p2p/p2p-finance-header.png";
// Paper images
import PoolsLitepaper from "../../static/img/learn/pools/pools-litepaper.png";
import PerpetualSwapsPaper from "../../static/img/learn/swaps/perpetual-swaps-paper.png";
import P2PFinancePaper from "../../static/img/learn/p2p/p2p-finance-paper.png";
// PDFs
import PoolsPDF from "../../static/img/learn/pools/perpetual-pools.pdf";
import SwapsPDF from "../../static/img/learn/swaps/perpetual-swaps.pdf";
import P2PPDF from "../../static/img/learn/p2p/peer-to-peer-finance.pdf";

const ResearchPapers = () => {
  const poolsProps = {
    title: "Perpetual Pools",
    header: PoolsHeader,
    image: PoolsLitepaper,
    link: PoolsPDF,
  };
  const swapsProps = {
    title: "Perpetual Swaps",
    header: PerpetualSwapsHeader,
    image: PerpetualSwapsPaper,
    link: SwapsPDF,
  };
  const p2pProps = {
    title: "Peer-to-Peer Finance",
    header: P2PFinanceHeader,
    image: P2PFinancePaper,
    link: P2PPDF,
  };
  return (
    <>
      <section className="h-full w-full z-20 relative mt-16">
        {/* <div class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-blue opacity-30"></div> */}
        <div className="container relative w-full mx-auto pb-12 xl:px-0 px-4 grid md:grid-cols-3 grid-cols-1 md:gap-4 lg:pt-5 md:pt-13 pt-5 gap-12 ">
          <PaperDownload {...poolsProps}/>
          <PaperDownload {...swapsProps}/>
          <PaperDownload {...p2pProps}/>
        </div>
      </section>
    </>
  );
};

export default ResearchPapers;
