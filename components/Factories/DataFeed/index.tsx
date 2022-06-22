import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Factories/DataFeed/Header"
import Mesh from "@components/Factories/DataFeed/Mesh"
import LottieAnim from "@components/Shared/LottieAnim"

const DataFeed: React.FC<{}> = () => {
    return (
        <Section
            id="section-3"
            className="h-[650px] bg-secondary pt-16 lg:pt-0 4xl:h-[1000px]"
        >
            <Container className="flex h-full flex-col justify-between sm:flex-row lg:items-center">
                <Header />
                <LottieAnim
                    playImmediately
                    lottieFile={require("/public/img/factories/data-feed/drops.json")}
                    className="relative -bottom-10 left-1/2 min-w-[100vw] -translate-x-1/2 sm:absolute sm:left-auto sm:right-0 sm:h-[460px] sm:w-[490px] sm:min-w-[unset] sm:translate-x-0 lg:right-auto lg:left-1/2 lg:h-full lg:min-h-[624px] lg:w-[50vw] lg:min-w-[707px]"
                />
            </Container>
            <Mesh />
        </Section>
    )
}

export default DataFeed
