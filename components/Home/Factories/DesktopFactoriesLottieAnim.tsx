import { useLottie } from "lottie-react";
import desktopTracks from "../../../public/img/home/factories/tracks.json";

const DesktopFactoriesLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: desktopTracks,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <div className="right-0 top-0 hidden lg:absolute lg:block lg:h-full lg:w-[40vw]">
        {View}
      </div>
    </>
  );
};

export default DesktopFactoriesLottieAnim;
