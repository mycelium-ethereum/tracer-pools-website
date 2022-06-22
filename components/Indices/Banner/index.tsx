import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import MeshDouble from "@components/Shared/Mesh/MeshDouble"
import LargeHeader from "@components/Shared/LargeHeader"
import BottomText from "@components/Indices/Banner/BottomText"
import { headerInfo } from "@components/Indices/Banner/presets"
import LottieAnim from "@components/Shared/LottieAnim"
import AnimateIn from "@components/Shared/AnimateIn"

const Banner: React.FC<{}> = () => {
    return (
        <Section
            id="section-1"
            className="h-[950px] bg-tracer-darkblue pt-[100px] pb-10 sm:h-screen sm:pt-[131px] sm:pb-36 xl:min-h-[1200px] 4xl:min-h-[1440px]"
        >
            <Container>
                <LargeHeader {...headerInfo} />
            </Container>
            <BottomText />
            <MeshDouble />
            <AnimateIn
                delayLevel={5}
                opacityOnly
                className="absolute bottom-0 right-0 z-0 h-[750px] w-full 4xl:h-[1300px]"
            >
                <LottieAnim
                    lottieFile={require("/public/img/indices/indices-chart-lottie.json")}
                    className="absolute top-0 left-1/2 h-full w-[1500px] -translate-x-1/2 4xl:w-[2600px]"
                />
            </AnimateIn>
        </Section>
    )
}

export default Banner
