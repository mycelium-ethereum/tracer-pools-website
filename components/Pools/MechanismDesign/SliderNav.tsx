import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "@components/Pools/MechanismDesign/Divider";
import NavIndicator from "@components/Pools/MechanismDesign/NavIndicator";
import SlideNavLink from "@components/Pools/MechanismDesign/SlideNavLink";
import { sliderNavSettings } from "@components/Pools/MechanismDesign/presets";

const SliderNav: React.FC<{
  slider2: any;
  setSlider1: React.Dispatch<any>;
  pauseSlider: () => void;
  TOTAL_SLIDES: number;
}> = ({ slider2, setSlider1, pauseSlider, TOTAL_SLIDES }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    ...sliderNavSettings,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const updateGradientPosition = () => {
    document.documentElement.style.setProperty(
      "--mechanism-nav-position",
      currentSlide.toString()
    );
  };

  useEffect(() => {
    updateGradientPosition();
  }, [currentSlide]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--total-mechanism-slides",
      TOTAL_SLIDES.toString()
    );
  }, [currentSlide]);
  return (
    <div className="relative mx-auto mt-4 sm:mr-10 sm:ml-[23px] sm:mt-0 sm:min-w-[43px] sm:px-0 4xl:ml-4 4xl:mr-16 4xl:min-w-[85px]">
      <Slider
        asNavFor={slider2}
        ref={(slider) => setSlider1(slider)}
        {...settings}
        className="slider-nav relative z-10 w-[calc(100vw-48px)] sm:h-[440px] sm:w-[43px] 4xl:h-[635px] 4xl:w-[53px] 4xl:pl-4"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((slideNum: number, i) => (
          <SlideNavLink key={i} num={i + 1} pauseSlider={pauseSlider} />
        ))}
      </Slider>
      <Divider />
      <NavIndicator />
    </div>
  );
};

export default SliderNav;
