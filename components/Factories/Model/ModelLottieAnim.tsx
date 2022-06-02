import { useLottie } from "lottie-react";
import model from "../../../public/img/factories/model.json";

const ModelLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: model,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="mt-8 flex h-auto w-full justify-center md:h-[520px] lg:mt-0 lg:block lg:w-[520px]">
      {View}
    </div>
  );
};

export default ModelLottieAnim;
