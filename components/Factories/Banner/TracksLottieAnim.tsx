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
    <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
      <div className="absolute bottom-[100px] left-0 h-auto w-full min-w-[2000px]">
        {View}
      </div>
    </div>
  );
};

export default TracksLottieAnim;
