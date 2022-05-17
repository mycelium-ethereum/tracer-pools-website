import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  exposureItems,
  settings,
} from "@components/Pools/ExposureSlider/presets";

const VerticalCarousel: React.FC<{}> = () => {
  //   Double amount of items in array to allow slider to animate
  exposureItems.push(...exposureItems);

  const Slide: React.FC<{ item: string }> = ({ item }) => (
    <span className="block whitespace-nowrap text-center text-[40px] font-bold leading-[48px] text-cell-tertiary transition-colors duration-500 xl:text-left 4xl:text-[64px] 4xl:leading-[72px]">
      {item}
    </span>
  );

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row">
      <span className="whitespace-nowrap text-2xl leading-[28px] text-action-active lg:text-[40px] lg:leading-[48px] 4xl:text-[64px] 4xl:leading-[72px]">
        Get exposure to
      </span>
      <div className="mt-2 xl:ml-10">
        <Slider {...settings} className="vertical-slider">
          {exposureItems.map((item: string, i: number) => (
            <Slide item={item} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VerticalCarousel;
