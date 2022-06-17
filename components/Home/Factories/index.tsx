import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Home/Factories/Header"
import LottieAnim from "@components/Shared/LottieAnim"

const Factories: React.FC<{}> = () => {
    return (
        <Section
            id="section-4"
            className="bg-tracer-purple-dark py-20 lg:h-[800px] lg:py-16 4xl:h-[1200px]"
        >
            <Container className="flex h-full items-center text-white">
                <Header />
            </Container>
            {/* Desktop */}
            <LottieAnim
                lottieFile={require("../../../public/img/home/factories/tracks.json")}
                className="right-0 top-0 hidden lg:absolute lg:block lg:h-full lg:w-[40vw]"
            />
            {/* Mobile */}
            <div className="relative mt-5 block h-[290px] w-full md:h-[400px] lg:hidden">
                <LottieAnim
                    lottieFile={require("../../../public/img/home/factories/tracks-mobile.json")}
                    className="absolute top-0 -left-2 h-full w-[1000px]"
                />
            </div>
        </Section>
    )
}

export default Factories
