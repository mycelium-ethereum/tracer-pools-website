import React from "react";
import PaperDownload from "./paper-download";
import Container from "./container";
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
    title: (
      <h1 className="font-semibold leading-none text-white md:text-lg md:leading-tight">
        Purchasing Power
        <br /> Stablecoin
      </h1>
    ),
    header: PoolsHeader,
    image: PurchasePaper,
    link: PurchasePDF,
  };
  const poolsProps = {
    title: (
      <h1 className="font-semibold leading-none text-white md:text-lg md:leading-tight">
        Perpetual
        <br /> Pools
      </h1>
    ),
    header: PoolsHeader,
    image: PoolsLitepaper,
    link: PoolsPDF,
  };
  const swapsProps = {
    title: (
      <h1 className="font-semibold leading-none text-white md:text-lg md:leading-tight">
        Perpetual
        <br /> Swaps
      </h1>
    ),
    header: PerpetualSwapsHeader,
    image: PerpetualSwapsPaper,
    link: SwapsPDF,
  };
  const p2pProps = {
    title: (
      <h1 className="font-semibold leading-none text-white md:text-lg md:leading-tight">
        Peer-to-Peer
        <br /> Finance
      </h1>
    ),
    header: P2PFinanceHeader,
    image: P2PFinancePaper,
    link: P2PPDF,
  };
  return (
    <>
      <section className="relative z-20 h-full w-full">
        <Container>
          <div className="relative mx-auto grid w-full max-w-[900px] grid-cols-2 gap-12 pb-12 pt-5 md:gap-10 md:pt-10 lg:grid-cols-4">
            <PaperDownload {...purchaseProps} />
            <PaperDownload {...poolsProps} />
            <PaperDownload {...swapsProps} />
            <PaperDownload {...p2pProps} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResearchPapers;
