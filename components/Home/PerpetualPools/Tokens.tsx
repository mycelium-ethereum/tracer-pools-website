const Tokens: React.FC<{}> = () => {
  return (
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-[600px] w-[700px] transform sm:mt-20 md:top-1/2 md:mt-0 md:-translate-y-1/2 lg:-right-24 lg:w-full xl:h-[820px]">
      <img
        src="/img/shared/link-token.png"
        className="topToBottomAnim absolute right-0 -top-24 w-[288px] sm:-top-[200px] md:w-[421px] lg:right-[250px] lg:top-5 xl:right-[320px] xl:w-[564px]"
      />
      <img
        src="/img/shared/btc-token.png"
        className="bottomToTopAnim absolute top-5 w-[294px] md:w-[382px] lg:top-auto lg:-right-16 lg:bottom-14 xl:w-[518px]"
      />
    </div>
  );
};

export default Tokens;
