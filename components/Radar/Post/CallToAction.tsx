import OptimisedImage from "@components/Shared/OptimisedImage";
import Button from "../../Shared/Button";

const CallToAction: React.FC<{}> = ({}) => {
  return (
    <div className="relative mb-4 flex h-[84px] w-full items-center rounded-lg bg-tracer-navy py-7 pl-14">
      <img
        src="/img/radar/cta-bg.png"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
      />
      <div className="relative z-10 flex items-center">
        <img src="/img/logos/tracer-perpetual-pools.svg" className="mr-4 h-6" />
        <h2 className="text-xl leading-[28px] text-white">
          More Leverage. Less Overhead.
        </h2>
        <Button darkBlueGradient className="ml-6">
          Learn More
        </Button>
        <Button darkBlueGradient className="ml-4">
          Launch Perpetual Pools
        </Button>
        <div className="pointer-events-none absolute -right-[200px] top-0 z-10 h-full w-[200px]">
          <OptimisedImage
            src="/img/shared/link-token.png"
            alt="Link Token"
            absolute
            className="-top-16 right-[60px] max-w-[131px]"
          />
          <OptimisedImage
            src="/img/shared/btc-token.png"
            alt="BTC Token"
            absolute
            className="-bottom-[60px] -right-5 max-w-[114px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
