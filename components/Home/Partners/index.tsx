import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import OptimisedImage from "@/components/Shared/OptimisedImage";

const Partners: React.FC<{}> = () => {
  return (
    <Section id="section-7" className="bg-tracer-navy">
      <Container className="relative pt-16 pb-20">
        <header className="mb-8 h-full w-full max-w-[678px]">
          <div className="mb-2 flex items-center">
            <img
              src="/img/icons/bullet.svg"
              alt="Bullet"
              className="mr-2 h-2.5 w-2.5"
            />
            <span className="inline-block tracking-[0.15em]">PARTNERS</span>
          </div>
          <hr className="line-gradient-lightblue h-[1px] w-full border-none" />
        </header>
        <div className="flex">
          <img
            src="/img/logos/framework.svg"
            alt="Framework Logo"
            className="mr-8"
          />
          <img src="/img/logos/dacm.svg" alt="DACM Logo" className="mr-8" />
          <img src="/img/logos/koji.svg" alt="Koji Logo" className="mr-8" />
          <img src="/img/logos/gsr.svg" alt="GSR Logo" className="mr-8" />
          <img
            src="/img/logos/distributed-global.svg"
            alt="Distributed Global Logo"
            className="mr-8"
          />
        </div>
        <div className="mt-9 flex">
          <img
            src="/img/logos/apollo.svg"
            alt="Apollo Logo"
            className="mr-12"
          />
          <img src="/img/logos/lao.svg" alt="The LAO Logo" className="mr-12" />
          <img src="/img/logos/b.svg" alt="B Logo" className="mr-12" />
          <img src="/img/logos/maven.svg" alt="Maven Logo" className="mr-12" />
          <img
            src="/img/logos/efficient-frontier.svg"
            alt="Efficient Frontier Logo"
            className="mr-8"
          />
        </div>
      </Container>
      <img
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full object-cover object-right"
        src="/img/home/mesh.svg"
      />
    </Section>
  );
};

export default Partners;
