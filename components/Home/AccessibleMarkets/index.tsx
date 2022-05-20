import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import LottieAnim from "@components/Home/AccessibleMarkets/LottieAnim";
import Header from "@components/Home/AccessibleMarkets/Header";
import InfoParagraphs from "@components/Home/AccessibleMarkets/InfoParagraphs";
import RailroadsText from "@components/Home/AccessibleMarkets/RailroadsText";

const AccessibleMarkets: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="bg-white pt-28 lg:h-[1254px] xl:pb-[300px] 3xl:h-[1500px]"
    >
      <Container className="flex h-full flex-col justify-center text-action-active">
        <Header />
        <InfoParagraphs />
        <RailroadsText />
      </Container>
      <LottieAnim />
    </Section>
  );
};

export default AccessibleMarkets;
