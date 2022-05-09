import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import BulletHeading from "@/components/Shared/BulletHeading";
import MeshDouble from "@/components/Pools/MeshDouble";
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
    <Section id="section-3">
      <Container className="flex items-center py-20">
        <div className="min-w-[589px]">
          <header className="text-action-active">
            <BulletHeading
              lineColor="blue"
              className="max-w-[294px] text-action-active"
            >
              Mechanism Design
            </BulletHeading>
            <h1 className="my-4 text-[40px] font-light leading-[44px]">
              Pool tokens entitle you to a
              <br />
              fractional share of long or short
              <br />
              collateral held in a pool.
            </h1>
            <p className="text-lg font-light leading-[30px] text-tertiary">
              When the underlying feed moves, funds are exchanged between
              <br /> sides, reflecting leveraged returns for token holders.
            </p>
          </header>
          <div className="mt-8 flex max-w-[420px] flex-wrap">
            <BulletHeading
              lineColor="blue"
              className="mb-4 max-w-[377px] text-action-active"
            >
              Looking for more information?
            </BulletHeading>
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
