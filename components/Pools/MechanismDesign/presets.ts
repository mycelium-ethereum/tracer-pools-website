export const exposureItems = [
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "A perpetual pool has long and short sides, where users can deposit ERC20 tokens.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "Users are minted a pool token, representing their share of the side. This token can be burnt in exchange for the underlying at any time, which is where the pool token’s value is derived from.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "The pool tracks the movement of some underlying feed. This feed can go up or down. When the underlying feed increases, shorts pay longs, increasing the value of the Long Tokens.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "When the underlying feed decreases, longs pay shorts, increasing the value of the Short Tokens.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "New entrants can deposit into the pool. Their tokens will be minted using the current value.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "The value in the long and short side may not always be equal. When the sides are skewed, the sides are not exposed to the same value of potential gains.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "Asymmetric upside as a result of the skew is a natural incentive for people to enter the side with less funds, bringing the sides closer to balanced.",
    },
];

const sliderRootSettings = {
    accessibility: false,
    dots: false,
    arrows: false,
    vertical: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    draggable: false,
    focusOnSelect: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: false,
    touchMove: false,
}

export const sliderNavSettings = {
    ...sliderRootSettings,
    slidesToShow: 7,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                vertical: false,
                variableWidth: true,
            }
        },
    ]
};

export const sliderMainSettings = {
    ...sliderRootSettings,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    fade: true,
};

export const buttonContent = [
    {
        text: "Explained like I'm 5",
        link: "/radar/tracer-perpetual-pools-eli5/",
    },
    {
        text: "Whitepaper",
        link: "/",
    },
    {
        text: "Litepaper",
        link: "/",
    },
    {
        text: "FAQs",
        link: "/",
    },
    {
        text: "Documentation",
        link: "/",
    },
];