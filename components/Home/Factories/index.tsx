import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Home/Factories/Header"
import LottieAnim from "@components/Shared/LottieAnim"
import MeshDouble from "@components/Shared/Mesh/MeshDouble"

const Factories: React.FC<{}> = () => {
    return (
        <Section
            id="section-4"
            className="bg-tracer-darkblue py-20 lg:h-[800px] lg:py-16 4xl:h-[1200px]"
        >
            <Container className="flex h-full items-center text-white">
                <Header />
                {/* Desktop */}
                <LottieAnim
                    lottieFile={require("../../../public/img/home/factories/tracks.json")}
                    className="-right-11 top-1/2 hidden -translate-y-1/2 lg:absolute lg:block lg:h-[120vh] lg:w-max"
                />
            </Container>

            {/* Mobile */}
            <div className="relative mt-5 block h-[290px] w-full md:h-[400px] lg:hidden">
                <LottieAnim
                    lottieFile={require("../../../public/img/home/factories/tracks-mobile.json")}
                    className="absolute top-0 -left-2 h-full w-[1000px]"
                />
            </div>
            <MeshDouble />
        </Section>
    )
}

export default Factories
