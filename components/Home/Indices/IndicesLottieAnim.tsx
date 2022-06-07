import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import indices from "../../../public/img/home/indices.json";
import { useOnScreen } from "hooks";

const IndicesLottieAnim: React.FC<{}> = ({}) => {
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
    <div ref={containerRef} className="absolute bottom-0 translate-x-[20vw] right-0 h-[80%] max-h-[1000px] w-full">
      <Lottie
        lottieRef={lottieRef}
        animationData={indices}
        autoPlay={false}
        loop={false}
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  );
};

export default IndicesLottieAnim;
