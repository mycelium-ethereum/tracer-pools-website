const Tokens: React.FC<{}> = () => {
  return (
    <div className="pointer-events-none absolute -right-24 top-0 z-10 h-[600px] w-[500px] transform md:mt-20 lg:right-auto lg:left-0 lg:top-1/2 lg:mt-0 lg:w-full lg:-translate-y-1/2 xl:h-[820px]">
      <img
        src="/img/shared/link-token.png"
        className="topToBottomAnim absolute right-0 -top-24 w-[288px] lg:right-[250px] lg:top-5 lg:w-[400px] xl:right-[320px] xl:w-[564px]"
      />
      <img
        src="/img/shared/btc-token.png"
        className="bottomToTopAnim absolute top-5 w-[294px] lg:top-auto lg:-right-16 lg:bottom-14 lg:w-[400px] xl:w-[518px]"
      />
    </div>
  );
};

export default Tokens;
