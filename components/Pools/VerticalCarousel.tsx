import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const VerticalCarousel: React.FC<{}> = () => {
  const exposureItems = ["Commodities", "Cryptocurrency", "NFTs", "Indexes"];
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    speed: 500,
    autoPlay: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
  };
  return <Slider {...settings}></Slider>;
};

export default VerticalCarousel;
