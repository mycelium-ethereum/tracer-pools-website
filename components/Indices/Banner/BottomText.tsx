import AnimateIn from "@components/Shared/AnimateIn";

const BottomText: React.FC<{}> = () => {
  return (
    <AnimateIn delayLevel={5} opacityOnly className="absolute bottom-0 left-0 w-full">
      <div className="absolute bottom-10 left-1/2 w-[280px] -translate-x-1/2 4xl:w-[572px]">
        <p className="text-center text-xl leading-[28px] 4xl:text-[40px] 4xl:leading-[44px]">
          Pick your asset allocation once and never have to rebalance your
          portfolio again.
        </p>
      </div>
    </AnimateIn>
  );
};

export default BottomText;
