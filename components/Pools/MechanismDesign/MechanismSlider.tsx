import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react"
import {
    slideItems,
    sliderMainSettings,
} from "@components/Pools/MechanismDesign/presets"
import SliderNav from "@components/Pools/MechanismDesign/SliderNav"
import Slide from "@components/Pools/MechanismDesign/Slide"
import { pauseSlider } from "@lib/helpers"

const MechanismSlider: React.FC<{}> = () => {
    const [position, setPosition] = useState(0)
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)

    const TOTAL_SLIDES = slideItems.length

    const updatePosition = (next: number) => {
        setPosition(next)
    }

    const updatedSettings = {
        ...sliderMainSettings,
        beforeChange: (current: number, next: number) => updatePosition(next),
    }

    return (
        <div className="relative z-10 flex w-[calc(100%+48px)] -translate-x-6 flex-col border-t border-b border-action-active bg-white py-6 [box-shadow:_0px_4px_10px_2px_rgba(26,85,245,0.1)] sm:w-full sm:translate-x-0 sm:flex-row sm:items-center sm:border 2xl:ml-12 2xl:max-w-[767px] 3xl:max-w-[1477px]">
            <SliderNav
                slider1={slider1}
                slider2={slider2}
                setSlider1={setSlider1}
                pauseSlider={pauseSlider}
                TOTAL_SLIDES={TOTAL_SLIDES}
            />
            <Slider
                asNavFor={slider1}
                ref={(slider) => setSlider2(slider)}
                {...updatedSettings}
                className="mechanism-slider mx-auto md:w-[700px] 2xl:w-auto"
            >
                {slideItems.map(
                    (item: { image: string; text: string }, i: number) => (
                        <Slide item={item} currentSlide={position} key={i} />
                    )
                )}
            </Slider>
        </div>
    )
}

export default MechanismSlider
