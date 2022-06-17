import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Tokens from "@components/Home/PerpetualPools/Tokens"
import LottieAnim from "@components/Shared/LottieAnim"
import Header from "@components/Home/PerpetualPools/Header"

const PerpetualPools: React.FC = () => {
    return (
        <Section
            id="section-3"
            className="bg-tracer-navy pt-10 md:py-16 lg:h-[800px] 4xl:h-[1200px]"
        >
            <Container className="z-10 flex h-full flex-col text-white">
                <Header />
            </Container>
            <div className="relative h-[370px] sm:h-[50vh] sm:min-h-[500px] lg:static lg:h-auto lg:min-h-[unset]">
                <Tokens />
                <LottieAnim
                    loop={false}
                    lottieFile={require("../../../public/img/home/v2-lottie.json")}
                    className="absolute bottom-0 -right-[100px] z-0 h-full w-[150vw] sm:bottom-20 sm:w-[125vw] lg:top-1/2 lg:-right-[600px] lg:-translate-y-[calc(50%+100px)] 2xl:top-1/2 2xl:-right-[465px] 2xl:w-[1670px] 2xl:-translate-y-[calc(50%+250px)] 4xl:top-1/2 4xl:-right-[450px] 4xl:h-[2160px] 4xl:w-[2370px] 4xl:-translate-y-[calc(50%+50px)]"
                />
            </div>
        </Section>
    )
}

export default PerpetualPools
