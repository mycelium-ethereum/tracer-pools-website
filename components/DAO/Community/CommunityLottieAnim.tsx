import { useLottie } from "lottie-react";
import cubes from "../../../public/img/dao/cubes.json";

const CommunityLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: cubes,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="pointer-events-none absolute top-0 right-0 hidden md:block md:h-[200px] md:w-[200px] lg:h-[303px] lg:w-[337px] 3xl:h-[500px] 3xl:w-[500px]">
      {View}
    </div>
  );
};

export default CommunityLottieAnim;
