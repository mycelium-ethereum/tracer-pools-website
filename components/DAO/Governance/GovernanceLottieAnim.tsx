import { useLottie } from "lottie-react";
import loopingCircle from "../../../public/img/dao/looping-circle.json";

const GovernanceLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: loopingCircle,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="absolute top-0 right-0 hidden w-full max-w-[45vw] md:block md:max-w-[25vw] lg:w-[960px] lg:max-w-[45vw] 4xl:max-w-[25vw]">
      {View}
    </div>
  );
};

export default GovernanceLottieAnim;
