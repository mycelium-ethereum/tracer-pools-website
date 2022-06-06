import { useLottie } from "lottie-react";
import tenPercent from "../../../public/img/indices/ten-percent-lottie.json";

const TenPercentLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: tenPercent,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="h-auto w-[604px]">{View}</div>;
};

export default TenPercentLottieAnim;
