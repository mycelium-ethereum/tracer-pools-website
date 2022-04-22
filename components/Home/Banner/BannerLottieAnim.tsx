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
    <div className="absolute top-0 right-0 z-10 h-full w-full translate-y-[150px] -translate-x-[40vw] scale-[2.0] transform 4xl:translate-y-[900px] 4xl:-translate-x-[80vw] 4xl:scale-[3.5]">
      <div className="bannerDiscAnim absolute top-0 right-0 h-full w-[1440px]">
        {View}
      </div>
    </div>
  );
};

export default BannerLottieAnim;
