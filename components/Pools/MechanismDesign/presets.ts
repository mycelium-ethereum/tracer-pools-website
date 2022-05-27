export const exposureItems = [
    {
        image: "/img/pools/mechanism-design/step-1.jpg",
        text: "Deposit collateral into either the long or short side of a pool to mint a leveraged token.",
    },
    {
        image: "/img/pools/mechanism-design/step-2.jpg",
        text: "Your token represents your fractional share of the collateral in that side of the pool.",
    },
    {
        image: "/img/pools/mechanism-design/step-3.jpg",
        text: "When the underlying feed increases, collateral is transferred from the shorts to the longs - increasing the value of the Long Tokens.",
    },
    {
        image: "/img/pools/mechanism-design/step-4.jpg",
        text: "When the underlying feed decreases, collateral is transferred from the longs to the shorts - increasing the value of the Short Tokens.",
    },
    {
        image: "/img/pools/mechanism-design/step-5.jpg",
        text: "The magnitude of the value transfer is determined by the magnitude of the price move and the pool’s target leverage.",
    },
    {
        image: "/img/pools/mechanism-design/step-6.jpg",
        text: "The value transfer calculation prevents 100% of any traders collateral from ever being transferred away - preventing all pool participants from ever being liquidated.",
    },
    {
        image: "/img/pools/mechanism-design/step-7.jpg",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
];

const sliderRootSettings = {
    accessibility: false,
    dots: false,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    focusOnSelect: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                draggable: true,
                swipe: true,
                touchMove: true,
            }
        },
    ]
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