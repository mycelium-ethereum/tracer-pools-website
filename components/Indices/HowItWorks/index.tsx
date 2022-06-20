import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Indices/HowItWorks/Header"
import Mesh from "@components/Factories/DataFeed/Mesh"

const HowItWorks: React.FC<{}> = () => {
    return (
        <Section id="section-4" className="bg-secondary py-16 md:py-20">
            <Container className="flex h-full flex-col justify-between lg:flex-row lg:items-center">
                <Header />
            </Container>
            <Mesh />
        </Section>
    )
}

export default HowItWorks
