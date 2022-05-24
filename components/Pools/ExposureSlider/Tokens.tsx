import OptimisedImage from "@components/Shared/OptimisedImage";

const Tokens: React.FC<{ position: number }> = ({ position }) => {
  const animationStyles = "opacity-0 transition-opacity duration-500";
  const shortTokens = ["sol", "bayc", "xau", "euro"];
  const longTokens = ["link", "punks", "wti", "jpy"];

  return (
    <div className="relative mx-auto h-[350px] w-[270px] md:static md:mx-0 md:h-auto md:w-auto">
      <OptimisedImage
        src={`/img/pools/tokens/slider/${longTokens[position]}.png`}
        alt="Link token"
        className={`exposure-token link-token absolute top-8 -left-[120px] max-w-[273px] md:-left-[150px] md:max-w-[300px] lg:max-w-[420px] 2xl:top-[-20px] 2xl:left-[-270px] 2xl:max-w-[564px] ${animationStyles}`}
      />
      <OptimisedImage
        src={`/img/pools/tokens/slider/${shortTokens[position]}.png`}
        alt="BTC token"
        className={`exposure-token btc-token absolute bottom-2 -right-24 max-w-[254px] md:max-w-[280px] lg:max-w-[400px] 2xl:bottom-3 2xl:-right-52 2xl:max-w-[516px] ${animationStyles}`}
      />
      {/* Render hidden elements to preload images */}
      {shortTokens.concat(longTokens).map((token, index) => (
        <img
          src={`/img/pools/tokens/slider/${token}.png`}
          className="hidden"
          key={index}
          alt={token}
        />
      ))}
    </div>
  );
};

export default Tokens;
