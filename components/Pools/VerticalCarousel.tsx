import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const VerticalCarousel: React.FC<{}> = () => {
  const exposureItems = [
    "Commodities",
    "Foreign Exchange",
    "Equities",
    "Cryptocurrencies",
    "NFTs",
    "Custom Indexes",
    "Sophisticated Strategies",
  ];
  //   Double items in array to allow slider to animate
  exposureItems.push(...exposureItems);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    draggable: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    useTransform: false,
  };

  const slide = (item: string) => (
    <span className="whitespace-nowrap text-[40px] font-bold leading-[48px] text-cell-tertiary transition-colors duration-500 4xl:text-[64px] 4xl:leading-[72px]">
      {item}
    </span>
  );

  return (
    <div className="ml-10">
      <Slider {...settings}>
        {exposureItems.map((item: string) => slide(item))}
      </Slider>
    </div>
  );
};

export default VerticalCarousel;
