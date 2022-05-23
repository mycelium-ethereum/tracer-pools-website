import OptimisedImage from "@components/Shared/OptimisedImage";
import TokenFadeIn from "@components/Pools/Banner/TokenFadeIn";

const Token: React.FC<{
  token: string;
  alt: string;
  type: string;
  containerStyles: string;
  backDelay: number;
  frontDelay: number;
  backStyles: string;
  frontStyles: string;
}> = ({
  token,
  alt,
  type,
  containerStyles,
  backDelay,
  frontDelay,
  backStyles,
  frontStyles,
}) => {
  let backImage = "";
  switch (type) {
    case "long":
      backImage = "/img/pools/tokens/token-back-long.png";
      break;
    case "short":
      backImage = "/img/pools/tokens/token-back-short.png";
      break;
    default:
      backImage = "/img/pools/tokens/token-back-long.png";
      break;
  }

  return (
    <div className={`absolute ${containerStyles}`}>
      <TokenFadeIn delay={backDelay}>
        <OptimisedImage
          src={backImage}
          alt={`${type} token back`}
          className={`absolute ${backStyles}`}
        />
      </TokenFadeIn>
      <TokenFadeIn delay={frontDelay}>
        <OptimisedImage
          src={`/img/pools/tokens/${token}`}
          alt={alt}
          className={`absolute z-10 ${frontStyles}`}
        />
      </TokenFadeIn>
    </div>
  );
};

export default Token;
