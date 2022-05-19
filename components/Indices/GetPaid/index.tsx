import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Header from "@components/Indices/GetPaid/Header";
import OptimisedImage from "@components/Shared/OptimisedImage";

const GetPaid: React.FC<{}> = () => {
  return (
    <Section id="section-2" className="h-[662px] bg-white 3xl:h-[1000px]">
      <Container className="flex h-full items-center">
        <Header />
      </Container>
      <OptimisedImage
        src="/img/indices/get-paid-bg.png"
        alt="Mesh graphic"
        className="absolute right-0 top-0 block h-[662px] max-w-[1170px] 3xl:hidden"
      />
      <OptimisedImage
        src="/img/indices/get-paid-xl-bg.png"
        alt="Mesh graphic"
        className="absolute right-0 top-0 hidden h-[1000px] max-w-[2654px] 3xl:block"
      />
    </Section>
  );
};

export default GetPaid;
