import { useLottie } from "lottie-react";
import integration from "../../../public/img/pools/integration.json";

const IntegrationLottieAnim: React.FC<{}> = () => {
  const options = {
    animationData: integration,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
      <div className="w-[160px] h-[160px]">
        {View}
      </div>
  );
};

export default IntegrationLottieAnim;
