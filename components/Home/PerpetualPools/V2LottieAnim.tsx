import { useLottie } from "lottie-react";
import Linework from "../../../public/img/home/v2-lottie.json";

const V2LottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: Linework,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="absolute -top-1/4 -right-1/3 z-0 h-full w-[125vw]">
      {View}
    </div>
  );
};

export default V2LottieAnim;
