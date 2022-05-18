import Token from "@components/Pools/Banner/Token";
import { tokenSpread } from "@components/Pools/Banner/presets";

const TokenSpread: React.FC<{}> = () => {
  return (
    <div className="absolute -top-[50px] left-1/2 z-10 h-[1024px] w-[1440px] -translate-x-1/2 scale-[0.6] transform transition-all duration-500 lg:-top-[120px] lg:scale-[0.8] xl:top-0 xl:scale-100 3xl:scale-[1.2]">
      {/* Token widths are 300px less than Figma due to layering */}
      {tokenSpread.map((token, index) => (
        <Token key={index} {...token} />
      ))}
    </div>
  );
};

export default TokenSpread;
