import Lottie from "lottie-react"
import indices from "../../../public/img/home/indices.json"

const IndicesLottieAnim: React.FC = () => {
    return (
        <div className="absolute bottom-0 left-1/2 min-h-[308px] min-w-[720px] -translate-x-1/2 sm:min-h-[578px] sm:min-w-[1350px] lg:absolute lg:-left-[100px] lg:min-h-[1200px] lg:min-w-[2400px] lg:translate-x-0 3xl:-left-[200px] 3xl:min-h-[1500px] 3xl:min-w-[3000px] 4xl:-left-[100px] 4xl:min-h-[2000px] 4xl:min-w-[4000px]">
            <Lottie
                animationData={indices}
                autoPlay={true}
                loop={true}
                className="absolute bottom-0 left-1/2 min-h-full min-w-full -translate-x-1/2 lg:right-0 lg:left-auto lg:h-full lg:min-h-[unset] lg:w-auto lg:min-w-[unset] lg:translate-x-0"
            />
        </div>
    )
}

export default IndicesLottieAnim
