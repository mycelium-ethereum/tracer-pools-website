import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Indices/UnlockMarket/Header"
import LottieAnim from "@components/Shared/LottieAnim"

const UnlockMarket: React.FC<{}> = () => {
    return (
        <Section
            id="section-3"
            className="h-[800px] bg-white sm:h-[415px] lg:h-[650px] 4xl:h-[1000px]"
        >
            <Container className="z-10 flex h-full items-center">
                <Header />
            </Container>
            {/* Desktop */}
            <LottieAnim
                loop={false}
                fullWidth={false}
                lottieFile={require("../../../public/img/indices/unlock-lottie.json")}
                className="absolute top-1/2 left-1/2 hidden h-[650px] w-[1600px] -translate-x-1/2 -translate-y-1/2 lg:block 4xl:scale-150"
            />
            {/* Tablet */}
            <LottieAnim
                loop={false}
                fullWidth={false}
                lottieFile={require("../../../public/img/indices/unlock-lottie-tablet.json")}
                className="absolute top-1/2 left-1/2 hidden h-[415px] w-[1040px] -translate-x-1/2 -translate-y-1/2 scale-[1.35] sm:block lg:hidden"
            />
            {/* Phone */}
            <LottieAnim
                loop={false}
                fullWidth={false}
                lottieFile={require("../../../public/img/indices/unlock-lottie-mobile.json")}
                className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 sm:hidden"
            />
        </Section>
    )
}

export default UnlockMarket
