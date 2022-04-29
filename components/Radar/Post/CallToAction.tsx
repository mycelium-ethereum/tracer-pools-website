import Button from "../../Shared/Button";
import GradientLine from "../../Shared/GradientLine";

const CallToAction: React.FC<{}> = ({}) => {
  return (
    <div className="relative mt-24 mb-4 w-full overflow-hidden rounded-lg bg-tracer-navy p-8">
      <img
        src="/img/radar/cta-bg.png"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
      />
      <div className="relative z-10 w-[328px]">
        <img
          src="/img/logos/tracer-perpetual-pools.svg"
          className="mb-3 h-[18px] w-[182px]"
        />
        <GradientLine color="blue" />
        <h2 className="mt-4 text-[40px] leading-[44px] text-white">
          More Leverage. Less Overhead.
        </h2>
        <small className="mt-2 block text-base leading-[24px] text-tracer-midblue">
          Fully composibile leveraged tokens with no margin requirements and no
          liquidations. A new derivative primative to hedge portfolio risk or
          trade leverage.
        </small>
      </div>
      <div className="mt-4 flex">
        <Button darkBlueGradient className="mr-4">
          Launch Perpetual Pools
        </Button>
        <Button blueTransparent>Learn More</Button>
      </div>
      <img
        src="/img/shared/btc-token.png"
        className="absolute -bottom-3.5 right-0 z-10 h-[315px] w-[304px]"
      />
      <img
        src="/img/shared/link-token.png"
        className="absolute -top-8 right-[256px] z-10 h-[341px] w-[355px]"
      />
    </div>
  );
};

export default CallToAction;
