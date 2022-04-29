import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import VerticalCarousel from "./VerticalCarousel";
import OptimisedImage from "../Shared/OptimisedImage";

const Exposure: React.FC<{}> = () => {
  return (
    <Section id="section-2">
      <Container className="relative flex items-center justify-center pt-40 pb-20">
        <OptimisedImage
          src="/img/shared/link-token.png"
          alt="Link token"
          absolute
          className="top-[-20px] left-[-270px] max-h-[542px] max-w-[564px]"
        />
        <div className="flex items-center justify-center">
          <span className="whitespace-nowrap text-[40px] font-light leading-[48px] text-action-active 4xl:text-[64px] 4xl:leading-[72px]">
            Get exposure to
          </span>
          <VerticalCarousel />
        </div>
      </Container>
    </Section>
  );
};

export default Exposure;
