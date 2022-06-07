import { useLottie } from "lottie-react";
import indices from "../../../public/img/home/indices.json";

const IndicesLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: indices,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="absolute bottom-0 left-[10vw] h-full w-full 3xl:max-h-[1500px] 3xl:max-w-[3000px] 4xl:max-h-[1750px] 4xl:max-w-[3500px]">
      {View}
    </div>
  );
};

export default IndicesLottieAnim;
