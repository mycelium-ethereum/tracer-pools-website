import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slide from "@components/Pools/BuildPortfolio/Slide"
import {
    settings,
    portfolioCarouselItems,
} from "@components/Pools/BuildPortfolio/presets"
import { pauseSlider } from "@lib/helpers"

const PortfolioCarousel: React.FC<{
    updatePosition: (newPosition: number) => void
}> = ({ updatePosition }) => {
    const [slider, setSlider] = useState(null)
    const updatedSettings = {
        ...settings,
        beforeChange: (current, next) => updatePosition(next),
    }

    return (
        <Slider
            {...updatedSettings}
            ref={(slider) => setSlider(slider)}
            className="portfolio-slider h-[550px] sm:h-[120px] sm:w-[470px] xl:h-[400px] xl:w-[400px] 4xl:h-[460px] 4xl:w-[625px]"
        >
            {portfolioCarouselItems.map((item, i) => (
                <Slide
                    key={item.title}
                    index={i}
                    item={item}
                    slider={slider}
                    pauseSlider={pauseSlider}
                />
            ))}
        </Slider>
    )
}

export default PortfolioCarousel
