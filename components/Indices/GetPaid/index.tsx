import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Indices/GetPaid/Header";
import OptimisedImage from "@components/Shared/OptimisedImage";

const GetPaid: React.FC<{}> = () => {
  return (
    <Section id="section-2" className="h-[662px]">
      <Container className="flex h-full items-center">
        <Header />
      </Container>
      <OptimisedImage
        src="/img/indices/get-paid-bg.png"
        alt="Get paid background"
        className="absolute right-0 top-0 h-[662px] max-w-[1170px]"
      />
    </Section>
  );
};

export default GetPaid;
