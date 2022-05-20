export const exposureItems = [
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder-2.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder-2.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder-2.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
    },
    {
        image: "/img/pools/mechanism-design-placeholder.png",
        text: "When there is more collateral in one side of the pool, traders taking the less popular position benefit from a greater effective leverage on gains than they experience on losses.",
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