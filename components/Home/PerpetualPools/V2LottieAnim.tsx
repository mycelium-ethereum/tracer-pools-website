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
    <div className="absolute -top-1/2 z-0 h-full w-[125vw] lg:top-1/2 lg:-right-[600px] lg:-translate-y-[calc(50%+100px)] 2xl:-right-1/3 2xl:-top-1/4 2xl:translate-y-0">
      {View}
    </div>
  );
};

export default V2LottieAnim;
