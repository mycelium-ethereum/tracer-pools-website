import Section from "@components/Shared/Section";
import Container from "@components/Shared/Container";
import Button from "@components/Shared/Buttons/Button";
import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";
import MechanismSlider from "./MechanismSlider";

const MechanismDesign: React.FC<{}> = () => {
  const moreInfoButtons = [
    {
      text: "Explained like I'm 5",
      link: "/radar/tracer-perpetual-pools-eli5/",
    },
    {
      text: "Whitepaper",
      link: "/",
    },
    {
      text: "Litepaper",
      link: "/",
    },
    {
      text: "FAQs",
      link: "/",
    },
    {
      text: "Documentation",
      link: "/",
    },
  ];
  return (
    <Section id="section-3" className="bg-secondary">
      <Container className="flex items-center justify-between py-20">
        <div className="min-w-[589px]">
          <header className="text-action-active">
            <UnderlinedHeading
              lineColor="blue"
              className="max-w-[294px] text-action-active"
            >
              Mechanism Design
            </UnderlinedHeading>
            <h1 className="mb-4 text-2xl font-light leading-[28px] 3xl:text-[40px] 3xl:leading-[44px]">
              Pool tokens entitle you to a
              <br />
              fractional share of long or short
              <br />
              collateral held in a pool.
            </h1>
            <p className="font-light text-tertiary 3xl:text-xl 3xl:leading-[30px]">
              When the underlying feed moves, funds are exchanged between
              <br /> sides, reflecting leveraged returns for token holders.
            </p>
          </header>
          <div className="mt-8 flex max-w-[420px] flex-wrap">
            <UnderlinedHeading
              lineColor="blue"
              className="max-w-[377px] text-action-active"
            >
              Looking for more information?
            </UnderlinedHeading>
            {moreInfoButtons.map((button, i) => (
              <Button
                key={i}
                link={button.link}
                blueTransparent
                className="mb-4 mr-4"
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
        <MechanismSlider />
      </Container>
      <MeshDouble />
    </Section>
  );
};

export default MechanismDesign;
