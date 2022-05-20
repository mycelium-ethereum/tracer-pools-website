import { useOnScreen } from "hooks";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import linework from "../../../public/img/home/v2-lottie.json";

const V2LottieAnim: React.FC<{}> = () => {
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
      className="absolute bottom-0 -right-[100px] z-0 h-full w-[150vw] sm:bottom-20 sm:w-[125vw] lg:top-1/2 lg:-right-[600px] lg:-translate-y-[calc(50%+100px)] 2xl:top-1/2 2xl:-right-[465px] 2xl:w-[1670px] 2xl:-translate-y-[calc(50%+250px)] 4xl:top-1/2 4xl:-right-[600px] 4xl:w-[2370px] 4xl:-translate-y-[calc(50%+300px)]"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={linework}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};

export default V2LottieAnim;
