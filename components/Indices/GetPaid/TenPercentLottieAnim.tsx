import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import tenPercent from "../../../public/img/indices/ten-percent-lottie.json";
import { useOnScreen } from "hooks";

const StepLottieAnim: React.FC<{}> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef(null);

  const onScreen = useOnScreen(containerRef);

  useEffect(() => {
    let timeout = null;
    if (onScreen) {
      lottieRef.current.play();
      setTimeout(() => {
        lottieRef.current.pause();
      }, 4900);
    }
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [onScreen]);

  useEffect(() => {
    lottieRef.current.goToAndStop(0, true);
  }, []);

  return (
    <div ref={containerRef} className="w-[604px] 4xl:w-[940px]">
      <Lottie
        lottieRef={lottieRef}
        animationData={tenPercent}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};

export default StepLottieAnim;
