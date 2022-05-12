import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import VerticalCarousel from "@components/Pools/ExposureSlider/VerticalCarousel";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Button from "@components/Shared/Buttons/Button";

const ExposureSlider: React.FC<{}> = () => {
  return (
    <Section id="section-2">
      <Container className="relative flex flex-col items-center justify-center pt-40 pb-20">
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
        <OptimisedImage
          src="/img/shared/btc-token.png"
          alt="BTC token"
          absolute
          className="bottom-3 -right-52 max-h-[518px] max-w-[516px]"
        />
        <div className="mx-auto mt-4 w-max">
          <span className="block text-lg leading-[28px] text-action-active">
            Start your Journey now!
          </span>
          <Button lightBlueGradient className="mx-auto mt-2">
            Browse Tokens
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ExposureSlider;
