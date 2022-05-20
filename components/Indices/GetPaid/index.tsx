import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Indices/GetPaid/Header";
import Graphics from "@components/Indices/GetPaid/Graphics";

const GetPaid: React.FC<{}> = () => {
  return (
    <Section
      id="section-2"
      className="h-[650px] bg-white pt-16 lg:pt-0 4xl:h-[1000px]"
    >
      <Container className="flex h-full lg:items-center">
        <Header />
      </Container>
      <Graphics />
    </Section>
  );
};

export default GetPaid;
