import { useLottie } from "lottie-react";

const StepLottieAnim: React.FC<{ lottieFile: string }> = ({ lottieFile }) => {
  const options = {
    animationData: lottieFile,
    // loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="h-auto w-full">{View}</div>;
};

export default StepLottieAnim;
