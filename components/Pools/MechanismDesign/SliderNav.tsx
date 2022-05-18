import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderNavSettings } from "@components/Pools/MechanismDesign/presets";

const SliderNav: React.FC<{
  slider2: any;
  setSlider1: React.Dispatch<any>;
  pauseSlider: () => void;
  TOTAL_SLIDES: number;
}> = ({ slider2, setSlider1, pauseSlider, TOTAL_SLIDES }) => {
  const SlideNavLink: React.FC<{ num: number }> = ({ num }) => (
    <button
      className="relative mx-3 text-2xl font-light leading-[30px] text-action-inactive transition-colors duration-300 sm:mx-0 sm:my-[15px] 3xl:my-[22px] 3xl:text-[40px] 3xl:leading-[44px]"
      onClick={() => pauseSlider()}
    >
      {num}
    </button>
  );

  return (
    <div className="relative mx-auto mt-4 px-6 sm:mr-10 sm:ml-[23px] sm:mt-0 sm:min-w-[43px] sm:px-0 3xl:ml-4 3xl:mr-16 3xl:min-w-[42px]">
      <Slider
        asNavFor={slider2}
        ref={(slider) => setSlider1(slider)}
        {...sliderNavSettings}
        className="slider-nav relative z-10 w-[calc(100vw-48px)] sm:h-[440px] sm:w-[43px] 3xl:h-[635px] 3xl:w-[42px]"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((slideNum: number, i) => (
          <SlideNavLink key={i} num={i + 1} />
        ))}
      </Slider>
      <span className="slider-nav-gradient absolute right-0 -bottom-[5px] block h-[1px] w-full flex-grow -translate-y-1/2 sm:top-1/2 sm:h-full sm:w-[1px] 3xl:h-[calc(100%+20px)]" />
    </div>
  );
};

export default SliderNav;
