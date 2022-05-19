import { useLottie } from "lottie-react";
import chart from "../../../public/img/indices/indices-chart-lottie.json";

const LottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: chart,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="absolute bottom-0 right-0 z-0 h-[900px] w-full 4xl:h-[1550px]">
      <div className="absolute top-0 left-1/2 h-full w-[1500px] -translate-x-1/2 4xl:w-[2600px]">
        {View}
      </div>
    </div>
  );
};

export default LottieAnim;
