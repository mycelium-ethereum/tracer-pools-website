import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Indices/UnlockMarket/Header"
import LottieAnim from "@components/Shared/LottieAnim"

const UnlockMarket: React.FC<{}> = () => {
    return (
        <Section
            id="section-3"
            className="h-[400px] bg-white lg:h-[650px] 4xl:h-[1000px]"
        >
            <Container className="z-10 flex h-full items-center">
                <Header />
            </Container>
            <LottieAnim
                loop={false}
                lottieFile={require("../../../public/img/indices/unlock-lottie.json")}
                className="absolute top-1/2 left-1/2 h-[650px] w-[1600px] -translate-x-1/2 -translate-y-1/2 4xl:scale-150"
            />
        </Section>
    )
}

export default UnlockMarket
