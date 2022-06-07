import { useLottie } from "lottie-react";
import strategies from "../../../public/img/indices/strategies-lottie.json";

const StrategiesLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: strategies,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="mt-6 mb-10 flex w-full justify-center">{View}</div>;
};

export default StrategiesLottieAnim;
