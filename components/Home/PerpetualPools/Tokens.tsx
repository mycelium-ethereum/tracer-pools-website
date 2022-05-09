const Tokens: React.FC<{}> = () => {
  return (
    <div className="pointer-events-none absolute top-1/2 left-0 h-[820px] w-full -translate-y-1/2 transform">
      <img
        src="/img/shared/link-token.png"
        className="topToBottomAnim absolute right-[320px] top-5 h-[542px] w-[564px]"
      />
      <img
        src="/img/shared/btc-token.png"
        className="bottomToTopAnim absolute -right-16 bottom-14 h-[498px] w-[518px]"
      />
    </div>
  );
};

export default Tokens;
