import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Indices/GetPaid/Header"
import LottieAnim from "@components/Shared/LottieAnim"

const GetPaid: React.FC<{}> = () => {
    return (
        <Section
            id="section-2"
            className="bg-white py-20 xl:py-[142px] 4xl:py-[195px]"
        >
            <Container className="flex h-full flex-col md:flex-row lg:items-center">
                <Header />
                <LottieAnim
                    loop={false}
                    lottieFile={require("/public/img/indices/ten-percent-lottie.json")}
                    className="mx-auto min-w-[566px] md:mx-0 xl:w-[804px] 4xl:w-[1140px]"
                />
            </Container>
        </Section>
    )
}

export default GetPaid
