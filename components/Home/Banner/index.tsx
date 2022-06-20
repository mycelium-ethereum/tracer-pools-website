import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Button from "@components/Shared/Buttons/Button"
import AnimateIn from "@components/Shared/AnimateIn"
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay"
import BannerLottieAnim from "@components/Home/Banner/BannerLottieAnim"

const Banner: React.FC<{}> = () => {
    return (
        <Section id="section-1" className="bg-tracer-navy">
            <Container className="h-[800px] items-center pb-16 pt-28 sm:h-screen sm:max-h-[unset] sm:min-h-[850px] md:flex md:min-h-[700px] md:pt-0">
                <header className="relative z-10">
                    <AnimateIn delayLevel={1}>
                        <h1 className="mb-1 text-[40px] font-thin leading-[44px] text-white sm:text-6xl sm:leading-[60px]">
                            The Evolution
                            <br /> of Global
                            <br className="block md:hidden" /> Derivatives
                        </h1>
                    </AnimateIn>
                    <AnimateIn delayLevel={2}>
                        <p className="text-action-active">
                            We Create Infrastructure to Power
                            <br className="block sm:hidden" /> the Next
                            <br className="hidden sm:block" /> Generation of
                            Global Trade
                        </p>
                    </AnimateIn>
                    <AnimateIn delayLevel={3}>
                        <Button darkBlueGradient className="mt-4 text-white">
                            Learn More
                        </Button>
                        <Button blueTransparent className="mt-4">
                            Documentation
                        </Button>
                    </AnimateIn>
                </header>
                <BannerLottieAnim />
            </Container>
            <MeshUnderlay fullPage />
        </Section>
    )
}

export default Banner
