import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Button from "@components/Shared/Buttons/Button"
import AnimateIn from "@components/Shared/AnimateIn"
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay"
import LottieAnim from "@components/Shared/LottieAnim"

const Banner: React.FC<{}> = () => {
    return (
        <Section id="section-1" className="bg-tracer-navy">
            <Container className="h-[800px] items-center pb-16 pt-28 sm:max-h-[unset] sm:min-h-[850px] md:flex md:min-h-[700px] md:pt-0 lg:h-screen">
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
                <div className="pointer-events-none absolute -left-[150px] top-0 z-0 h-full w-full translate-y-[25vh] transform transition-all duration-300 sm:left-[150px] sm:translate-y-[5vh] sm:scale-[1.75] md:left-[450px] lg:left-[600px] lg:scale-[2.0] xl:left-[800px] 3xl:left-[1100px] 3xl:translate-y-[10vh] 4xl:left-[3500px] 4xl:translate-y-[55vh] 4xl:scale-[4.0] 5xl:left-[3200px] 5xl:translate-y-[75vh] 5xl:scale-[4.0]">
                    <LottieAnim
                        lottieFile={require("../../../public/img/home/banner-lottie.json")}
                        className="bannerDiscAnim absolute left-[1000px] top-1/4 h-[1920px] w-[1080px]"
                    />
                </div>
            </Container>
            <MeshUnderlay fullPage />
            {/* <BackgroundVideo loop src="/img/home/banner.mp4" /> */}
        </Section>
    )
}

export default Banner
