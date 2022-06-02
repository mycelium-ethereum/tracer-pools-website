import AnimateIn from "@components/Shared/AnimateIn";
import { useLottie } from "lottie-react";
import tracks from "../../../public/img/factories/tracks-lottie/tracks.json";

const TracksLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: tracks,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <AnimateIn
      delayLevel={5}
      opacityOnly
      className="pointer-events-none absolute top-0 left-0 h-full w-full"
    >
      <div className="absolute bottom-0 left-0 h-auto w-full min-w-[2000px] xl:bottom-[100px]">
        {View}
      </div>
    </AnimateIn>
  );
};

export default TracksLottieAnim;
