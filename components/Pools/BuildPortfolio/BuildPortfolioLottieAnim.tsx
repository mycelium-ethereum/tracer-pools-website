import { useLottie } from "lottie-react";

const BuildPortfolioLottieAnim: React.FC<{
  file: any;
  position?: number;
  curPosition?: number;
  className?: string;
}> = ({ file, position, curPosition, className }) => {
  const options = {
    animationData: file,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      className={`transition-opacity duration-500 ${
        position === curPosition ? "sm:opacity-100" : "sm:opacity-0"
      } ${className ? className : ""}`}
    >
      {View}
    </div>
  );
};

export default BuildPortfolioLottieAnim;
