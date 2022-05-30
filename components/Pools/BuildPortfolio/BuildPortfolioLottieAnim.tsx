import { useLottie } from "lottie-react";
import diagram from "../../../public/img/pools/build-portfolio/diagram.json";

const BuildPortfolioLottieAnim: React.FC<{ className?: string }> = ({
  className,
}) => {
  const options = {
    animationData: diagram,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className={`${className ? className : ""}`}>{View}</div>;
};

export default BuildPortfolioLottieAnim;
