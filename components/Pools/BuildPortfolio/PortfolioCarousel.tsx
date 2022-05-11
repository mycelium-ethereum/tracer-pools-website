import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import {
  settings,
  portfolioCarouselItems,
} from "@components/Pools/BuildPortfolio/presets";
import GradientLine from "@components/Shared/GradientLine";

const PortfolioCarousel: React.FC<{}> = () => {
  const [slider, setSlider] = useState(null);

  const pauseSlider = () => {
    slider.slickPause();
  };

  const Slide: React.FC<{ item: { title: string; text: string } }> = ({
    item,
  }) => (
    <button
      className="w-[391px] pt-4 text-left text-action-active"
      onClick={() => pauseSlider()}
    >
      <h2 className="text-2xl leading-[28px]">{item.title}</h2>
      <span className="mt-1 mb-4 block max-h-0 overflow-hidden text-[40px] font-light leading-[44px] opacity-0 transition-all duration-300 3xl:text-[64px] 3xl:leading-[72px]">
        {item.text}
      </span>
      <div className="max-w-[377px]">
        <GradientLine color="lightblue" />
      </div>
    </button>
  );

  return (
    <Slider
      {...settings}
      ref={(slider) => setSlider(slider)}
      className="portfolio-slider h-[400px] w-[400px]"
    >
      {portfolioCarouselItems.map((item) => (
        <Slide key={item.title} item={item} />
      ))}
    </Slider>
  );
};

export default PortfolioCarousel;
