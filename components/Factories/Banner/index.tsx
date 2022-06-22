import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import MeshDouble from "@components/Shared/Mesh/MeshDouble"
import LargeHeader from "@components/Shared/LargeHeader"
import AnimateIn from "@components/Shared/AnimateIn"
import LottieAnim from "@components/Shared/LottieAnim"
import { headerInfo } from "@components/Factories/Banner/presets"

const Banner: React.FC<{}> = () => {
    return (
        <Section
            id="section-1"
            className="h-[950px] bg-tracer-darkblue pt-[100px] sm:h-[900px] sm:pt-[131px] lg:pb-36 xl:h-screen xl:min-h-[1100px] 4xl:min-h-[1440px]"
        >
            <Container>
                <LargeHeader {...headerInfo} />
            </Container>
            <MeshDouble />
            <AnimateIn
                delayLevel={5}
                opacityOnly
                className="pointer-events-none absolute top-0 left-0 h-full w-full"
            >
                <LottieAnim
                    lottieFile={require("/public/img/factories/tracks-lottie/tracks.json")}
                    className="absolute bottom-0 left-0 h-auto w-full min-w-[2000px] xl:bottom-[100px]"
                />
            </AnimateIn>
        </Section>
    )
}

export default Banner
