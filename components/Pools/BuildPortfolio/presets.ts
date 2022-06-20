import create from "../../../public/img/pools/build-portfolio/create.json";
import redeem from "../../../public/img/pools/build-portfolio/redeem.json";
import staking from "../../../public/img/pools/build-portfolio/staking.json";
import trade from "../../../public/img/pools/build-portfolio/trade.json";

export const lottieFiles = [
    create,
    trade,
    staking,
    redeem,
]

export const portfolioCarouselItems = [
    { title: "Create", text: "Mint new long or short tokens with a single deposit." },
    { title: "Trade", text: "Buy and sell leveraged tokens on Balancer/Curve etc." },
    { title: "Stake", text: "Native staking on Tracer to earn rewards." },
    { title: "Redeem", text: "Burn long and short tokens to redeem your funds." },
];

export const settings = {
    accessibility: false,
    dots: false,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    draggable: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 4,
    focusOnSelect: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 640,
            settings: {
                vertical: true,
            }
        },
    ]
};