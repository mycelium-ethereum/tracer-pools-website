import AnimateIn from "@components/Shared/AnimateIn";
import GradientLine from "../../Shared/GradientLine";

const IntroText: React.FC<{}> = () => {
  return (
    <div className="w-max pt-40">
      <div className="mb-2">
        <span className="mb-2 block text-lg leading-[28px] text-tracer-lightblue">
          Bullish? Bearish? Bring it.
        </span>
        <GradientLine color="lightblue" />
      </div>
      <div className="mb-11 text-[80px] font-light leading-[88px]">
        <span>
          No Margins.
          <br />
          No Liquidations.
          <br />
          No Minimum Spend.
        </span>
      </div>
      <img
        src="/img/logos/powered-by-arbitrum.svg"
        className="h-[41px] w-[357px]"
      />
    </div>
  );
};

export default IntroText;
