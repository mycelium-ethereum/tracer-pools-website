import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import {
  exposureItems,
  sliderMainSettings,
} from "@components/Pools/MechanismDesign/presets";
import SliderNav from "@components/Pools/MechanismDesign/SliderNav";
import Slide from "@components/Pools/MechanismDesign/Slide";
import { pauseSlider } from "@lib/helpers";

const MechanismSlider: React.FC<{}> = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const TOTAL_SLIDES = exposureItems.length;

  return (
    <div className="relative z-10 -ml-6 flex w-[calc(100%+48px)] flex-col border-t border-b border-action-active bg-white [box-shadow:_0px_4px_10px_2px_rgba(26,85,245,0.1)] sm:ml-0 sm:w-full sm:flex-row sm:items-center sm:border xl:ml-12 xl:max-w-[767px] 4xl:max-w-[1477px]">
      <SliderNav
        slider1={slider1}
        slider2={slider2}
        setSlider1={setSlider1}
        pauseSlider={pauseSlider}
        TOTAL_SLIDES={TOTAL_SLIDES}
      />
      <Slider
        asNavFor={slider1}
        ref={(slider) => setSlider2(slider)}
        {...sliderMainSettings}
      >
        {exposureItems.map(
          (item: { image: string; text: string }, i: number) => (
            <Slide item={item} key={i} />
          )
        )}
      </Slider>
    </div>
  );
};

export default MechanismSlider;
