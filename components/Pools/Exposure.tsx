import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";

const Exposure: React.FC<{}> = () => {
  return (
    <Section id="section-2">
      <Container className="relative flex items-center justify-center py-[310px]">
        <div className="flex items-center justify-center">
          <span className="text-[64px] font-light leading-[72px] text-action-active">
            Get exposure to
          </span>
        </div>
      </Container>
    </Section>
  );
};

export default Exposure;
