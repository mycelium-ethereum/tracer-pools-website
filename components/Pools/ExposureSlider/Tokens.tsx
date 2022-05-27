import OptimisedImage from "@components/Shared/OptimisedImage";

const Tokens: React.FC<{ position: number }> = ({ position }) => {
  // const animationStyles = "transition-opacity duration-500";
  const animationStyles = "opacity-0 transition-opacity duration-500";
  const shortTokens = ["euro", "punks", "xau", "sol"];
  const longTokens = ["jpy", "bayc", "wti", "link"];

  return (
    <div className="relative mx-auto h-[350px] w-[270px] md:static md:mx-0 md:h-auto md:w-auto">
      <OptimisedImage
        src={`/img/pools/tokens/slider/${longTokens[position]}.png`}
        alt="Link token"
        className={`exposure-token link-token absolute bottom-2 -left-[120px] max-w-[273px] md:-left-[150px] md:bottom-32 md:max-w-[300px] lg:bottom-36 lg:-left-[200px] lg:max-w-[420px] 2xl:bottom-6 2xl:left-[-340px] 2xl:max-w-[564px] 4xl:bottom-auto 4xl:-top-16 4xl:-left-[100px] 4xl:max-w-[648px]  ${animationStyles}`}
      />
      <OptimisedImage
        src={`/img/pools/tokens/slider/${shortTokens[position]}.png`}
        alt="BTC token"
        className={`exposure-token btc-token absolute top-8 -right-24 max-w-[254px] md:top-24 md:max-w-[280px] lg:-right-12 lg:top-24 lg:max-w-[400px] 2xl:top-12 2xl:-right-52 2xl:max-w-[516px] 4xl:right-[200px] 4xl:top-auto 4xl:bottom-16 4xl:max-w-[602px] ${animationStyles}`}
      />
      {/* Render hidden elements to preload images */}
      <div className="pointer-events-none absolute -bottom-1/2 -top-1/2">
        {shortTokens.concat(longTokens).map((token, index) => (
          <OptimisedImage
            key={index}
            src={`/img/pools/tokens/slider/${token}.png`}
            className="h-[1px] w-[1px]"
            alt={token}
          />
        ))}
      </div>
    </div>
  );
};

export default Tokens;
