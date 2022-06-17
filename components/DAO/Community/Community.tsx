import Container from "@components/Shared/Container"
import H2 from "@components/Shared/Heading/H2"
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading"
import PageSection from "@components/Shared/Section"
import InfoCard from "@components/DAO/InfoCard"
import GridContainer from "@components/DAO/GridContainer"
import LottieAnim from "@components/Shared/LottieAnim"
import { communityCards } from "@components/DAO/presets"

export const Community: React.FC<{}> = () => {
    return (
        <PageSection className="bg-white pb-16 lg:py-[70px]">
            <LottieAnim
                loop={true}
                lottieFile={require("../../../public/img/dao/cubes.json")}
                className="pointer-events-none absolute top-0 right-0 hidden md:block md:h-[200px] md:w-[200px] lg:h-[303px] lg:w-[337px] 3xl:h-[500px] 3xl:w-[500px]"
            />
            <Container className="text-action-active">
                <UnderlinedHeading
                    lineColor="lightblue"
                    hideBullet
                    className="max-w-[294px]"
                >
                    COMMUNITY
                </UnderlinedHeading>
                <H2>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit. At
                    <br /> felis sit ipsum posuere.
                </H2>
                <GridContainer>
                    {communityCards.map((card, index) => (
                        <InfoCard key={index} {...card} />
                    ))}
                </GridContainer>
            </Container>
        </PageSection>
    )
}
