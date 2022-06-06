import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { useOnScreen } from "hooks";

const StepLottieAnim: React.FC<{ lottieFile: string }> = ({ lottieFile }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef(null);

  const onScreen = useOnScreen(containerRef);

  useEffect(() => {
    if (onScreen) {
      lottieRef.current.play();
      setTimeout(() => {
        lottieRef.current.pause();
      }, 2500);
    }
  }, [onScreen]);

  useEffect(() => {
    lottieRef.current.goToAndStop(0, true);
  }, []);

  return (
    <div className="h-auto w-full" ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={lottieFile}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};

export default StepLottieAnim;
