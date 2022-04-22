import { useLottie } from "lottie-react";
import circles from "../../../public/img/home/banner-lottie.json";

const BannerLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: circles,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return (
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-full translate-y-[150px] scale-[2.0] transform 4xl:scale-[2.0]">
      <div className="bannerDiscAnim absolute top-0 right-0 h-full w-full">
        {View}
      </div>
    </div>
  );
};

export default BannerLottieAnim;
