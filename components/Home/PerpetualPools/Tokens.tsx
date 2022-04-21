const Tokens: React.FC<{}> = () => {
  return (
    <div className="pointer-events-none absolute top-1/2 left-0 h-[820px] w-full -translate-y-1/2 transform">
      <img
        src="/img/home/link-token.png"
        className="absolute right-[280px] -top-[120px] h-[542px] w-[564px]"
      />
      <img
        src="/img/home/btc-token.png"
        className="absolute -right-[80px] bottom-[113px] h-[498px] w-[518px]"
      />
    </div>
  );
};

export default Tokens;
