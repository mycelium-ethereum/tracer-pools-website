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
                    className="absolute -bottom-32 left-1/2 z-0 h-[600px] -translate-x-[calc(50%-20px)] sm:top-auto sm:-bottom-40 sm:-left-[100px] sm:h-[900px] sm:w-[1300px] sm:translate-x-0 sm:translate-y-0 md:-bottom-60 lg:top-1/2 lg:right-auto lg:left-[200px] lg:h-[1500px] lg:w-[1600px] lg:-translate-y-[calc(50%+50px)] 2xl:left-[200px] 2xl:h-[1500px] 2xl:w-[1800px] 3xl:left-auto 3xl:-right-[100px] 3xl:h-[1700px] 4xl:-right-[450px] 4xl:h-[2160px] 4xl:w-[2370px] 4xl:-translate-y-[calc(50%+50px)]"
                />
            </div>
        </Section>
    )
}

export default PerpetualPools
