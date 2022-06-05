import { useLottie } from "lottie-react";
import mobileTracks from "../../../public/img/home/factories/tracks-mobile.json";

const MobileFactoriesLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: mobileTracks,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="relative mt-5 block h-[290px] w-full md:h-[400px] lg:hidden">
      <div className="absolute top-0 left-0 h-full w-[1000px]">{View}</div>
    </div>
  );
};

export default MobileFactoriesLottieAnim;
