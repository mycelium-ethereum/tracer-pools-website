import GradientLine from "@components/Shared/GradientLine"
import BuildPortfolioLottieAnim from "@components/Pools/BuildPortfolio/BuildPortfolioLottieAnim"
import VerticalDivider from "@components/Pools/BuildPortfolio/VerticalDivider"
import { lottieFiles } from "@components/Pools/BuildPortfolio/presets"

const Slide: React.FC<{
    index: number
    item: { title: string; text: string }
    slider: any
    pauseSlider: (slider: any) => void
}> = ({ index, item, slider, pauseSlider }) => (
    <button
        className="block h-auto w-full items-start pt-4 text-action-active sm:flex sm:h-[80px] sm:w-[391px] sm:text-left xl:block xl:h-auto 4xl:w-[625px]"
        onClick={() => pauseSlider(slider)}
    >
        <h2 className="text-2xl leading-[28px] transition-colors duration-300">
            {item.title}
        </h2>
        <VerticalDivider className="hidden last:hidden sm:block xl:hidden" />
        <span className="content static top-12 left-0 block h-full max-h-0 w-full opacity-0 transition-all duration-300 sm:absolute xl:static">
            <span className="mt-1 block overflow-hidden leading-6 sm:mb-4 xl:text-[40px] xl:font-light xl:leading-[44px] 4xl:text-[64px] 4xl:leading-[72px]">
                {item.text}
            </span>
            <BuildPortfolioLottieAnim
                file={lottieFiles[index]}
                className="mx-auto my-2 block w-full sm:hidden"
            />
        </span>
        {/* Desktop left-aligned gradient line */}
        <span className="mt-4 hidden max-w-[377px] xl:block">
            <GradientLine color="lightblue" />
        </span>
        {/* Mobile centered gradient line */}
        <span className="mt-4 block w-full sm:hidden">
            <GradientLine color="lightblue" center />
        </span>
    </button>
)

export default Slide
