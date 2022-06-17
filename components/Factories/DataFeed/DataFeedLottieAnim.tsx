import { useLottie } from "lottie-react"
import drops from "../../../public/img/factories/data-feed/drops.json"

const DataFeedLottieAnim: React.FC<{}> = () => {
    const options = {
        animationData: drops,
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options)

    return (
        <div className="relative -bottom-10 left-1/2 min-w-[100vw] -translate-x-1/2 sm:absolute sm:left-auto sm:right-0 sm:h-[460px] sm:w-[490px] sm:min-w-[unset] sm:translate-x-0 lg:right-auto lg:left-1/2 lg:h-full lg:min-h-[624px] lg:w-[50vw] lg:min-w-[707px]">
            {View}
        </div>
    )
}

export default DataFeedLottieAnim
