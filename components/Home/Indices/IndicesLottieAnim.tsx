import Lottie from "lottie-react";
import indices from "../../../public/img/home/indices.json";

const IndicesLottieAnim: React.FC<{}> = ({}) => {
  return (
    <div className="absolute bottom-0 left-1/2 h-[80%] w-full -translate-x-1/2 3xl:min-h-[1500px] 3xl:min-w-[3000px] 4xl:min-h-[2000px] 4xl:min-w-[4000px]">
      <Lottie
        animationData={indices}
        autoPlay={true}
        loop={true}
        className="absolute bottom-0 right-0 h-full w-auto"
      />
    </div>
  );
};

export default IndicesLottieAnim;
