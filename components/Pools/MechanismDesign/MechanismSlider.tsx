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
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
      text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
      image: "/img/pools/mechanism-design-placeholder.png",
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
    // autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 500,
    draggable: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 7,
    // slidesToScroll: 1,
    focusOnSelect: true,
  };

  const sliderMainSettings = {
    accessibility: false,
    dots: false,
    arrows: false,
    // infinite: true,
    vertical: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 500,
    draggable: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
  };

  const Slide: React.FC<{ item: { image: string; text: string } }> = ({
    item,
  }) => (
    <div className="p-12">
      {/* Will be replaced by Lottie animations in future */}
      <img
        src={item.image}
        alt=""
        className="h-[585px] w-full object-cover object-center"
      />
      <p className="mt-4 text-center text-lg leading-[28px] text-action-active">
        {item.text}
      </p>
    </div>
  );

  const SlideNavLink: React.FC<{ num: number }> = ({ num }) => (
    <button className="relative my-[22px] text-[40px] font-light leading-[44px] text-action-inactive transition-colors duration-300">
      {num}
    </button>
  );

  return (
    <div className="relative ml-10 flex w-full max-w-[1477px] items-center border border-action-active [box-shadow:_0px_4px_10px_2px_rgba(26,85,245,0.1)]">
      <div className="relative ml-4 mr-16 min-w-[42px]">
        <Slider
          asNavFor={slider2}
          ref={(slider) => setSlider1(slider)}
          {...sliderNavSettings}
          className="slider-nav relative z-10 h-[635px] w-[42px]"
        >
          {Array.from({ length: TOTAL_SLIDES }).map((slideNum: number, i) => (
            <SlideNavLink key={i} num={i + 1} />
          ))}
        </Slider>
        <span className="slider-nav-gradient absolute right-0 top-1/2 block h-[calc(100%+60px)] w-[1px] flex-grow -translate-y-1/2" />
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
