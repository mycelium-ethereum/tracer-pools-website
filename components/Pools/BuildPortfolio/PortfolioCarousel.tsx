import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import {
  settings,
  portfolioCarouselItems,
} from "@components/Pools/BuildPortfolio/presets";
import GradientLine from "@components/Shared/GradientLine";
import OptimisedImage from "@components/Shared/OptimisedImage";

const PortfolioCarousel: React.FC<{}> = () => {
  const [slider, setSlider] = useState(null);

  const pauseSlider = () => {
    slider.slickPause();
  };

  const Slide: React.FC<{ item: { title: string; text: string } }> = ({
    item,
  }) => (
    <button
      className="w-full pt-4 text-left text-action-active sm:w-[391px]"
      onClick={() => pauseSlider()}
    >
      <h2 className="text-2xl leading-[28px]">{item.title}</h2>
      <div className="content max-h-0 opacity-0 transition-all duration-300">
        <span className="mt-1 mb-4 block overflow-hidden font-light leading-[24px] sm:text-[40px] sm:leading-[44px] 3xl:text-[64px] 3xl:leading-[72px]">
          {item.text}
        </span>
        <OptimisedImage
          src="/img/pools/build-portfolio-diagram.png"
          alt="Perpetual Pools diagram"
          className="mx-auto my-2 block w-full sm:hidden"
        />
      </div>
      <div className="mt-4 max-w-[377px]">
        <GradientLine color="lightblue" />
      </div>
    </button>
  );

  return (
    <Slider
      {...settings}
      ref={(slider) => setSlider(slider)}
      className="portfolio-slider h-[650px] sm:h-[400px] sm:w-[400px]"
    >
      {portfolioCarouselItems.map((item) => (
        <Slide key={item.title} item={item} />
      ))}
    </Slider>
  );
};

export default PortfolioCarousel;
