import OptimisedImage from "@/components/Shared/OptimisedImage";
import TokenFadeIn from "@/components/Pools/TokenFadeIn";

const TokenSpread: React.FC<{}> = () => {
  return (
    <div className="absolute top-0 left-1/2 z-10 h-[1024px] w-[1440px] -translate-x-1/2 transform">
      {/* Left to right order */}
      <div className="topToBottomAnim absolute -left-[275px] top-[260px] h-[520px] w-[504px]">
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            absolute
            className="rotate-[-17.5deg]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={300}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            absolute
            className="top-10 left-2.5 z-10 rotate-[-17.5deg]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute -left-2 top-[830px] w-[213px]">
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            absolute
            className="top-6 rotate-[12.06deg]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            absolute
            className="z-10 rotate-[12.06deg]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute left-[230px] top-[600px] h-[400px] w-[356px]">
        <TokenFadeIn delay={1200}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            absolute
            className="top-10 [transform:matrix(-1,0.08,0.08,1,0,0)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            absolute
            className="left-1 z-10 [transform:matrix(-1,0.08,0.08,1,0,0)]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnim absolute left-[680px] top-[670px] h-[480px] w-[350px]">
        <TokenFadeIn delay={1500}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            absolute
            className="[transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)_scale(-1,-1)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={1200}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            absolute
            className="top-10 -left-4 z-10 [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)_scale(-1,-1)]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute left-[1050px] top-[470px] h-[498px] w-[408px]">
        <TokenFadeIn delay={1200}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            absolute
            className="top-10"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            absolute
            className="z-10"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnim absolute left-[1250px] top-[950px] h-[227px] w-[188px]">
        <TokenFadeIn delay={1000}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            absolute
            className="[transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={700}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            absolute
            className="top-5 -left-2.5 z-10 [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]"
          />
        </TokenFadeIn>
      </div>
    </div>
  );
};

export default TokenSpread;
