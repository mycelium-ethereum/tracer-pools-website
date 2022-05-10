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
    <div className="pointer-events-none absolute -left-[150px] top-0 z-0 h-full w-full translate-y-[25vh] transform transition-all duration-300 sm:left-[150px] sm:translate-y-[5vh] sm:scale-[1.75] md:left-[400px] lg:left-[600px] lg:scale-[2.0] xl:left-[800px] 3xl:left-[1100px] 3xl:translate-y-[10vh] 4xl:left-[3500px] 4xl:translate-y-[55vh] 4xl:scale-[4.0] 5xl:left-[3200px] 5xl:translate-y-[75vh] 5xl:scale-[4.0]">
      <div className="bannerDiscAnim absolute left-[1000px] top-1/4 h-[1920px] w-[1080px]">
        {View}
      </div>
    </div>
  );
};

export default BannerLottieAnim;
