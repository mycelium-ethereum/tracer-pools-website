import OptimisedImage from "@components/Shared/OptimisedImage";
import TokenFadeIn from "@components/Pools/Banner/TokenFadeIn";

const Token: React.FC<{
  type: string;
  containerStyles: string;
  backDelay: number;
  frontDelay: number;
  backStyles: string;
  frontStyles: string;
}> = ({
  type,
  containerStyles,
  backDelay,
  frontDelay,
  backStyles,
  frontStyles,
}) => {
  let backImage = "";
  let frontImage = "";
  switch (type) {
    case "BTC":
      backImage = "/img/shared/btc-token-back.png";
      frontImage = "/img/shared/btc-token-front.png";
      break;
    case "LINK":
      backImage = "/img/shared/link-token-back.png";
      frontImage = "/img/shared/link-token-front.png";
      break;
    default:
      backImage = "/img/shared/link-token-back.png";
      frontImage = "/img/shared/link-token-front.png";
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
          src={frontImage}
          alt={`${type} token front`}
          className={`absolute z-10 ${frontStyles}`}
        />
      </TokenFadeIn>
    </div>
  );
};

export default Token;
