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
    <div className="pointer-events-none absolute left-[800px] top-0 z-0 h-full w-full translate-y-[5vh] scale-[2.0] transform 4xl:left-[1000px] 4xl:translate-y-[55vh] 4xl:scale-[3.0] 5xl:left-[1500px] 5xl:translate-y-[75vh] 5xl:scale-[4.0]">
      <div className="bannerDiscAnim absolute left-[1000px] top-1/4 h-[1920px] w-[1080px]">
        {View}
      </div>
    </div>
  );
};

export default BannerLottieAnim;
