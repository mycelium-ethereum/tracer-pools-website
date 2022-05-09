import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const MechanismSlider: React.FC<{}> = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const exposureItems = [
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder-2.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder-2.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder-2.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
  ];
  const TOTAL_SLIDES = exposureItems.length;

  const sliderNavSettings = {
    accessibility: false,
    dots: false,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    draggable: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 7,
    focusOnSelect: true,
    pauseOnFocus: true,
  };

  const sliderMainSettings = {
    accessibility: false,
    dots: false,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    draggable: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    variableWidth: true,
    pauseOnFocus: true,
  };

  const Slide: React.FC<{ item: { image: string; text: string } }> = ({
    item,
  }) => (
    <div className="py-10 pr-10 3xl:px-12 3xl:pt-12">
      {/* Will be replaced by Lottie animations in future */}
      <img
        src={item.image}
        alt=""
        className="h-[324px] w-full object-cover object-center 3xl:h-[585px]"
      />
      <p className="mt-4 text-action-active 3xl:text-center 3xl:text-xl 3xl:leading-[28px]">
        {item.text}
      </p>
    </div>
  );

  const SlideNavLink: React.FC<{ num: number }> = ({ num }) => (
    <button className="relative my-[15px] text-2xl font-light leading-[30px] text-action-inactive transition-colors duration-300 3xl:my-[22px] 3xl:text-[40px] 3xl:leading-[44px]">
      {num}
    </button>
  );

  return (
    <div className="relative z-10 ml-10 flex w-full max-w-[767px] items-center border border-action-active bg-white [box-shadow:_0px_4px_10px_2px_rgba(26,85,245,0.1)] 3xl:max-w-[1477px]">
      <div className="relative ml-[23px] mr-10 min-w-[43px] 3xl:ml-4 3xl:mr-16 3xl:min-w-[42px]">
        <Slider
          asNavFor={slider2}
          ref={(slider) => setSlider1(slider)}
          {...sliderNavSettings}
          className="slider-nav relative z-10 h-[440px] w-[43px] 3xl:h-[635px] 3xl:w-[42px]"
        >
          {Array.from({ length: TOTAL_SLIDES }).map((slideNum: number, i) => (
            <SlideNavLink key={i} num={i + 1} />
          ))}
        </Slider>
        <span className="slider-nav-gradient absolute right-0 top-1/2 block h-full w-[1px] flex-grow -translate-y-1/2 3xl:h-[calc(100%+20px)]" />
      </div>
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
