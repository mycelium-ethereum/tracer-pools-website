import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Indices/GetPaid/Header"
import TenPercentLottieAnim from "@components/Indices/GetPaid/TenPercentLottieAnim"

const GetPaid: React.FC<{}> = () => {
    return (
        <Section
            id="section-2"
            className="h-[650px] bg-white pt-16 lg:pt-0 4xl:h-[1000px]"
        >
            <Container className="flex h-full lg:items-center">
                <Header />
                <TenPercentLottieAnim />
            </Container>
        </Section>
    )
}

export default GetPaid
