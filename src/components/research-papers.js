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
import PurchasePaper from "../../static/img/learn/purchase/purchase-paper.png";
// PDFs
import PoolsPDF from "../../static/pdf/Tracer Perpetual Pools.pdf";
import SwapsPDF from "../../static/pdf/Tracer Perpetual Swaps.pdf";
import P2PPDF from "../../static/pdf/Tracer Peer-to-Peer Finance.pdf";
import PurchasePDF from "../../static/pdf/Purchasing Power Stablecoin.pdf";

const ResearchPapers = () => {
  const purchaseProps = {
    title: "Purchasing Power Stablecoin",
    header: PoolsHeader,
    image: PurchasePaper,
    link: PurchasePDF,
  };
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
        <div className="container relative w-full mx-auto pb-12 xl:px-0 px-4 grid lg:grid-cols-4 md:grid-cols-2 md:gap-20 lg:pt-5 md:pt-13 pt-5 gap-12">
          <PaperDownload {...purchaseProps} />
          <PaperDownload {...poolsProps} />
          <PaperDownload {...swapsProps} />
          <PaperDownload {...p2pProps} />
        </div>
      </section>
    </>
  );
};

export default ResearchPapers;
