import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import LottieAnim from "@components/Shared/LottieAnim"
import Header from "@components/Home/AccessibleMarkets/Header"
import InfoParagraphs from "@components/Home/AccessibleMarkets/InfoParagraphs"
import RailroadsText from "@components/Home/AccessibleMarkets/RailroadsText"

const AccessibleMarkets: React.FC<{}> = () => {
    return (
        <Section id="section-2" className="bg-white pt-20 xl:py-40 4xl:py-60">
            <Container className="flex h-full flex-col justify-center text-action-active">
                <Header />
                <InfoParagraphs />
                <RailroadsText />
            </Container>
            <LottieAnim
                loop={false}
                lottieFile={require("../../../public/img/home/accessible-markets-lottie.json")}
                className="relative bottom-0 right-0 z-0 -mb-10 flex h-[320px] w-full items-end justify-end pl-20 xs:h-[380px] sm:mb-0 sm:h-[400px] sm:pl-0 xl:absolute xl:bottom-0 xl:right-0 xl:h-[368px] xl:w-[368px] 4xl:h-[666px] 4xl:w-[666px]"
            />
        </Section>
    )
}

export default AccessibleMarkets
