import OptimisedImage from "@components/Shared/OptimisedImage";
import TokenFadeIn from "@components/Pools/Banner/TokenFadeIn";

const TokenSpread: React.FC<{}> = () => {
  return (
    <div className="absolute -top-[50px] left-1/2 z-10 h-[1024px] w-[1440px] -translate-x-1/2 scale-[0.6] transform lg:-top-[120px] lg:scale-[0.8] xl:top-0 xl:scale-100 3xl:scale-[1.2]">
      {/* Token widths are 300px less than Figma due to layering */}
      <div className="topToBottomAnim absolute -left-[945px] top-[100px] w-[562px]">
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            className="absolute top-10 left-8 -rotate-[10.87deg]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            className="absolute z-10 -rotate-[10.87deg]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute -left-[530px] top-[735px] w-[367px]">
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            className="absolute [transform:matrix(-1,0.09,0.09,1,0,0)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={300}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            className="absolute top-10 -left-1 z-10 [transform:matrix(-1,0.09,0.09,1,0,0)]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnim absolute -left-[275px] top-[260px] w-[432px]">
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            className="absolute rotate-[-17.5deg]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={300}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            className="absolute top-10 left-5 z-10 rotate-[-17.5deg]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute -left-2 top-[830px] w-[213px]">
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            className="absolute top-6 rotate-[12.06deg]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            className="absolute z-10 rotate-[12.06deg]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute left-[230px] top-[600px] w-[356px]">
        <TokenFadeIn delay={1200}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            className="absolute top-10 [transform:matrix(-1,0.08,0.08,1,0,0)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            className="absolute left-1 z-10 [transform:matrix(-1,0.08,0.08,1,0,0)]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnim absolute left-[680px] top-[670px] w-[350px]">
        <TokenFadeIn delay={1500}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            className="absolute [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)_scale(-1,-1)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={1200}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            className="absolute top-10 -left-4 z-10 [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)_scale(-1,-1)]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute left-[1050px] top-[470px] w-[408px]">
        <TokenFadeIn delay={1200}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            className="absolute top-10"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            className="absolute z-10"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnim absolute left-[1250px] top-[950px] w-[188px]">
        <TokenFadeIn delay={1000}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            className="absolute [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={700}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            className="absolute top-5 -left-2.5 z-10 [transform:matrix(-0.98,-0.22,-0.22,0.98,0,0)]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnimSlower absolute left-[1480px] top-[725px] w-[408px]">
        <TokenFadeIn delay={900}>
          <OptimisedImage
            src="/img/shared/btc-token-back.png"
            alt="BTC token back"
            className="absolute top-12 left-1 rotate-[15.28deg]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/btc-token-front.png"
            alt="BTC token front"
            className="absolute z-10 rotate-[15.28deg]"
          />
        </TokenFadeIn>
      </div>
      <div className="topToBottomAnim absolute left-[1530px] top-[165px] w-[504px]">
        <TokenFadeIn delay={600}>
          <OptimisedImage
            src="/img/shared/link-token-back.png"
            alt="Link token back"
            className="absolute [transform:matrix(-0.99,0.12,0.12,0.99,0,0)]"
          />
        </TokenFadeIn>
        <TokenFadeIn delay={300}>
          <OptimisedImage
            src="/img/shared/link-token-front.png"
            alt="Link token front"
            className="absolute top-10 left-5 z-10 [transform:matrix(-0.99,0.12,0.12,0.99,0,0)]"
          />
        </TokenFadeIn>
      </div>
    </div>
  );
};

export default TokenSpread;
