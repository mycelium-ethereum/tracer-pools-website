import Button from "../Shared/Button";
import GradientLine from "../Shared/GradientLine";

const CareersBanner: React.FC<{}> = ({}) => {
  return (
    <div className="relative mt-16 mb-4 w-full overflow-hidden rounded-lg bg-tracer-navy py-11 px-10">
      <img
        src="/img/careers/careers-banner-bg.png"
        className="absolute -top-1 left-0 z-0 min-h-[105%] object-cover"
      />
      <div className="relative z-10 w-[328px]">
        <img src="/img/logo.svg" className="mb-3 h-[18px] w-[77px]" />
        <GradientLine color="blue" />
        <h2 className="mt-4 text-[40px] leading-[110%] text-white">
          Build with the Community
        </h2>
        <small className="mt-2 block text-base leading-[24px] text-tracer-midblue">
          Fully composibile leveraged tokens with no margin requirements and no
          liquidations. A new derivative primative to hedge portfolio
        </small>
      </div>
      <div className="mt-4 flex">
        <Button darkBlueGradient className="mr-4">
          Community Page
        </Button>
        <Button blueTransparent>Open Jobs</Button>
      </div>
    </div>
  );
};

export default CareersBanner;
