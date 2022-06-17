import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Home/Indices/Header"
import IndicesLottieAnim from "./IndicesLottieAnim"

const Indices: React.FC<{}> = () => {
    return (
        <Section
            id="section-5"
            className="h-[800px] bg-tracer-navy 4xl:h-[1200px]"
        >
            <Container className="flex h-full pt-20 text-white lg:items-center lg:py-16">
                <Header />
                <IndicesLottieAnim />
            </Container>
        </Section>
    )
}

export default Indices
