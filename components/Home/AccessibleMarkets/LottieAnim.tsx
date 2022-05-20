import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import squares from "../../../public/img/home/accessible-markets-lottie.json";
import { useOnScreen } from "hooks";

const LottieAnim: React.FC<{}> = () => {
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
      className="relative bottom-0 right-0 z-0 flex h-[320px] w-full justify-end xs:h-[380px] sm:h-[400px] xl:absolute xl:h-[676px] xl:w-[676px]"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={squares}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};

export default LottieAnim;
