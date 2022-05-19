import AnimateIn from "@components/Shared/AnimateIn";
import H1 from "@components/Home/H1";
import Paragraph from "@components/Home/Paragraph";

const RailroadsText: React.FC<{}> = () => {
  return (
    <div className="mt-20 flex max-w-[561px] flex-col justify-center sm:mt-24">
      <AnimateIn delay={0.2}>
        <H1 className="mb-4">
          Not just one protocol, but the railroads of the future of derivatives
        </H1>
      </AnimateIn>
      <AnimateIn delay={0.6}>
        <Paragraph>
          We build factory contracts which are fully modular and
          <br className="hidden sm:block" />
          permissionless to deploy.
        </Paragraph>
        <Paragraph className="mt-2">
          A derivative product suite including applications and contracts
          <br className="hidden sm:block" />
          to enable truly global financial stability.
        </Paragraph>
      </AnimateIn>
    </div>
  );
};

export default RailroadsText;
