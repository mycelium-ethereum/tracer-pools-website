const Tokens: React.FC<{}> = () => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-[600px] w-[500px] -translate-x-1/2 transform sm:left-auto sm:right-0 sm:mt-20 sm:w-[450px] sm:translate-x-0 md:top-1/2 md:mt-20 md:w-[700px] md:-translate-y-1/2 lg:-right-24 lg:w-full xl:h-[820px] 3xl:right-24">
      <img
        src="/img/shared/link-token.png"
        className="topToBottomAnim absolute right-0 -top-24 w-[288px] sm:-top-[200px] md:w-[421px] lg:right-[250px] lg:top-5 xl:right-[320px] xl:w-[564px]"
      />
      <img
        src="/img/shared/btc-token.png"
        className="bottomToTopAnim absolute -left-2 top-10 w-[294px] sm:-left-8 sm:-top-8 md:left-auto md:top-5 md:w-[382px] lg:top-auto lg:-right-16 lg:bottom-14 xl:w-[518px]"
      />
    </div>
  );
};

export default Tokens;
