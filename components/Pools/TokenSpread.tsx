import OptimisedImage from "@/components/Shared/OptimisedImage";

const TokenSpread: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 left-1/2 z-10 h-[1024px] w-[1440px] -translate-x-1/2 transform">
      {/* Left to right order */}
      <OptimisedImage
        src="/img/shared/link-token.png"
        alt="Link token"
        absolute
        className="topToBottomAnim -left-[275px] top-[260px] max-h-[520px] max-w-[564px] rotate-[-17.5deg]"
      />
      <OptimisedImage
        src="/img/shared/btc-token.png"
        alt="BTC token"
        absolute
        className="bottomToTopAnim absolute -left-2 top-[830px] max-h-[262px] max-w-[273px] rotate-[12.06deg]"
      />
      <OptimisedImage
        src="/img/shared/btc-token.png"
        alt="BTC token"
        absolute
        className="topToBottomAnim absolute left-[230px] top-[600px] max-h-[400px] max-w-[416px] [transform:matrix(-1,0.08,0.08,1,0,0)]"
      />
      <OptimisedImage
        src="/img/shared/link-token.png"
        alt="Link token"
        absolute
        className="bottomToTopAnim absolute left-[650px] top-[650px] max-h-[480px] max-w-[470px] [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]"
      />
      <OptimisedImage
        src="/img/shared/btc-token.png"
        alt="BTC token"
        absolute
        className="topToBottomAnim absolute left-[980px] top-[470px] max-h-[498px] max-w-[518px]"
      />
      <OptimisedImage
        src="/img/shared/link-token.png"
        alt="BTC token"
        absolute
        className="bottomToTopAnim absolute left-[1250px] top-[950px] max-h-[227px] max-w-[248px] [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]"
      />
    </div>
  );
};

export default TokenSpread;
