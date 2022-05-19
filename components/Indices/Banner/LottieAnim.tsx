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
    <div className="absolute bottom-0 right-0 z-0 h-[900px] w-[full]">
      {View}
    </div>
  );
};

export default LottieAnim;
