import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import Header from "@components/Factories/Model/Header"
import MoreInfoButtons from "@components/Factories/Model/MoreInfoButtons"
import LottieAnim from "@components/Shared/LottieAnim"

const Model: React.FC<{}> = () => {
    return (
        <Section id="section-2" className="bg-white py-16 4xl:h-[1000px]">
            <Container className="flex h-full flex-col justify-between md:flex-row">
                <div className="mr-10 flex flex-col justify-center">
                    <Header />
                    <MoreInfoButtons />
                </div>
                <LottieAnim
                    lottieFile={require("../../../public/img/factories/model.json")}
                    className="mt-8 flex h-auto w-full justify-center md:h-[264px] md:w-[364px] lg:mt-0 lg:block xl:h-[520px] xl:w-[520px]"
                />
            </Container>
        </Section>
    )
}

export default Model
