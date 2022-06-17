import OptimisedImage from "@components/Shared/OptimisedImage"
import LottieAnim from "@components/Shared/LottieAnim"

const Slide: React.FC<{
    item: { image: string; lottieFile?: any; text: string }
    currentSlide: number
}> = ({ item, currentSlide }) => {
    const imageStyles =
        "w-full h-[calc(100vw*0.6)] sm:h-[304px] sm:max-w-[500px] lg:h-[364px] lg:max-w-[607px]"
    return (
        <div className="flex h-full flex-col-reverse justify-center p-6 sm:flex-col sm:py-10 sm:pr-10 3xl:w-full 3xl:items-center 4xl:px-12 4xl:pt-12">
            {item.image && (
                <OptimisedImage
                    src={item.image}
                    alt=""
                    className={`${imageStyles} mx-auto`}
                />
            )}
            {item.lottieFile && (
                <LottieAnim
                    key={currentSlide}
                    loop={false}
                    lottieFile={item.lottieFile}
                    className={imageStyles}
                />
            )}
            <p className="mx-auto mb-4 h-[100px] max-w-[818px] text-action-active sm:mt-4 sm:mb-0 sm:h-[50px] xl:h-[100px] 4xl:h-[50px] 4xl:text-center 4xl:text-xl 4xl:leading-[28px]">
                {item.text}
            </p>
        </div>
    )
}

export default Slide
