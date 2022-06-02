import { useLottie } from "lottie-react";
import drops from "../../../public/img/factories/data-feed/drops.json";

const DataFeedLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: drops,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="-bottom-10 left-1/2 h-full w-full min-w-[420px] sm:absolute sm:min-h-[655px] sm:w-[50vw] sm:min-w-[655px]">
      {View}
    </div>
  );
};

export default DataFeedLottieAnim;
