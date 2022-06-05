import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import unlock from "../../../public/img/indices/unlock-lottie.json";
import { useOnScreen } from "hooks";

const UnlockMarketLottieAnim: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef(null);

  const onScreen = useOnScreen(containerRef);

  useEffect(() => {
    if (onScreen) {
      lottieRef.current.play();
    }
  }, [onScreen]);

  useEffect(() => {
    lottieRef.current.goToAndStop(0, true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 left-1/2 h-[650px] w-[1600px] -translate-x-1/2 -translate-y-1/2"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={unlock}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};

export default UnlockMarketLottieAnim;
