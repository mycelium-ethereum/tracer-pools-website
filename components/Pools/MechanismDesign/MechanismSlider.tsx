import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import {
  exposureItems,
  sliderMainSettings,
} from "@components/Pools/MechanismDesign/presets";
import SliderNav from "./SliderNav";

const MechanismSlider: React.FC<{}> = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const TOTAL_SLIDES = exposureItems.length;

  const pauseSlider = () => {
    slider1.slickPause();
    slider2.slickPause();
  };

  const Slide: React.FC<{ item: { image: string; text: string } }> = ({
    item,
  }) => (
    <div className="flex flex-col-reverse p-6 sm:flex-col sm:py-10 sm:pr-10 3xl:px-12 3xl:pt-12">
      {/* Will be replaced by Lottie animations in future */}
      <img
        src={item.image}
        alt=""
        draggable={false}
        className="w-full object-center sm:h-[324px] sm:object-cover 3xl:h-[585px]"
      />
      <p className="mb-4 text-action-active sm:mt-4 sm:mb-0 3xl:text-center 3xl:text-xl 3xl:leading-[28px]">
        {item.text}
      </p>
    </div>
  );

  return (
    <div className="relative z-10 -ml-6 flex w-[calc(100%+48px)] flex-col border-t border-b border-action-active bg-white [box-shadow:_0px_4px_10px_2px_rgba(26,85,245,0.1)] sm:ml-0 sm:w-full sm:flex-row sm:items-center sm:border xl:ml-12 xl:max-w-[767px] 3xl:max-w-[1477px]">
      <SliderNav
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
