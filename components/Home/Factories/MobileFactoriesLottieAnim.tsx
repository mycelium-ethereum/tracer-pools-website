import { useLottie } from "lottie-react";
import mobileTracks from "../../../public/img/factories/tracks-lottie/tracks.json";

const MobileFactoriesLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: mobileTracks,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="relative block h-[290px] w-full md:h-[400px] lg:hidden">
      <div className="absolute top-0 left-0 h-full w-[1200px]">{View}</div>
    </div>
  );
};

export default MobileFactoriesLottieAnim;
