import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "@components/Pools/BuildPortfolio/Slide";
import {
  settings,
  portfolioCarouselItems,
} from "@components/Pools/BuildPortfolio/presets";
import { pauseSlider } from "@lib/helpers";

const PortfolioCarousel: React.FC<{}> = () => {
  const [slider, setSlider] = useState(null);

  return (
    <Slider
      {...settings}
      ref={(slider) => setSlider(slider)}
      className="portfolio-slider h-[650px] sm:h-[400px] sm:w-[400px] 4xl:h-[460px] 4xl:w-[625px]"
    >
      {portfolioCarouselItems.map((item) => (
        <Slide
          key={item.title}
          item={item}
          slider={slider}
          pauseSlider={pauseSlider}
        />
      ))}
    </Slider>
  );
};

export default PortfolioCarousel;
