import GradientLine from "@components/Shared/GradientLine";
import BuildPortfolioLottieAnim from "@components/Pools/BuildPortfolio/BuildPortfolioLottieAnim";
import { lottieFiles } from "@components/Pools/BuildPortfolio/presets";

const Slide: React.FC<{
  index: number;
  item: { title: string; text: string };
  slider: any;
  pauseSlider: (slider: any) => void;
}> = ({ index, item, slider, pauseSlider }) => (
  <button
    className="w-full pt-4 text-action-active sm:w-[391px] sm:text-left 4xl:w-[625px]"
    onClick={() => pauseSlider(slider)}
  >
    <h2 className="text-2xl leading-[28px] transition-colors duration-300">
      {item.title}
    </h2>
    <div className="content max-h-0 opacity-0 transition-all duration-300">
      <span className="mt-1 mb-4 block overflow-hidden font-light leading-[24px] sm:text-[40px] sm:leading-[44px] 4xl:text-[64px] 4xl:leading-[72px]">
        {item.text}
      </span>
      <BuildPortfolioLottieAnim
        file={lottieFiles[index]}
        className="mx-auto my-2 block w-full sm:hidden"
      />
    </div>
    <div className="mt-4 max-w-[377px]">
      <GradientLine color="lightblue" />
    </div>
  </button>
);

export default Slide;
