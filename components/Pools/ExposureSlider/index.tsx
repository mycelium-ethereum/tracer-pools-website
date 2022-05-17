import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import VerticalCarousel from "@components/Pools/ExposureSlider/VerticalCarousel";
import OptimisedImage from "@components/Shared/OptimisedImage";
import Button from "@components/Shared/Buttons/Button";

const ExposureSlider: React.FC<{}> = () => {
  return (
    <Section id="section-2">
      <Container className="relative flex flex-col items-center justify-center py-16 xl:py-40">
        <OptimisedImage
          src="/img/shared/link-token.png"
          alt="Link token"
          className="absolute top-8 -left-[150px] max-w-[420px] 2xl:top-[-20px] 2xl:left-[-270px] 2xl:max-w-[564px]"
        />
        <div className="flex flex-col items-center justify-center xl:flex-row">
          <span className="whitespace-nowrap text-[40px] font-light leading-[48px] text-action-active 4xl:text-[64px] 4xl:leading-[72px]">
            Get exposure to
          </span>
          <VerticalCarousel />
        </div>
        <OptimisedImage
          src="/img/shared/btc-token.png"
          alt="BTC token"
          className="absolute bottom-2 -right-24 max-w-[400px] 2xl:bottom-3 2xl:-right-52 2xl:max-w-[516px]"
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
