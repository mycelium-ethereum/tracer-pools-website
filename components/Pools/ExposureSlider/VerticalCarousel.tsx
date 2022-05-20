import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  exposureItems,
  settings,
} from "@components/Pools/ExposureSlider/presets";
import AnimateIn from "@components/Shared/AnimateIn";

const VerticalCarousel: React.FC<{}> = () => {
  const DELAY = 500;
  const [items, setItems] = useState<undefined | string[]>([]);
  const updatedSettings = {
    ...settings,
    beforeChange: () => resetAnimation(),
  };

  const resetAnimation = () => {
    const btcToken = document.querySelector(".btc-token");
    const linkToken = document.querySelector(".link-token");
    btcToken.classList.remove("animate-up");
    linkToken.classList.remove("animate-down");
    setTimeout(() => {
      btcToken.classList.add("animate-up");
      linkToken.classList.add("animate-down");
    }, DELAY);
  };
  useEffect(() => {
    //   Double amount of items in array to allow slider to animate
    exposureItems.push(...exposureItems);
    setItems(exposureItems);
  }, []);

  const Slide: React.FC<{ item: string }> = ({ item }) => (
    <span className="block text-center text-[30px] font-bold leading-[36px] text-cell-tertiary transition-colors duration-500 sm:whitespace-nowrap sm:text-[40px] sm:leading-[48px] xl:text-left 4xl:text-[64px] 4xl:leading-[72px]">
      {item}
    </span>
  );

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row">
      <span className="whitespace-nowrap text-2xl leading-[28px] text-action-active lg:text-[40px] lg:leading-[48px] 4xl:text-[64px] 4xl:leading-[72px]">
        Get exposure to
      </span>
      <AnimateIn className="mt-2 xl:ml-10" delayLevel={1}>
        <Slider {...updatedSettings} className="vertical-slider">
          {items &&
            items.map((item: string, i: number) => (
              <Slide item={item} key={i} />
            ))}
        </Slider>
      </AnimateIn>
    </div>
  );
};

export default VerticalCarousel;
