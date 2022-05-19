import Button from "@components/Shared/Buttons/Button";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";

const HelpGovernBanner: React.FC = () => {
  return (
    <div className="relative -ml-3 flex w-full min-w-[calc(100%+24px)] flex-col items-center justify-center overflow-hidden rounded-md bg-tracer-midblue py-[22px] text-xl leading-[28px] text-white md:ml-0 md:min-w-full lg:flex-row xl:h-[84px] xl:py-0">
      <span className="text-center">
        Want to help govern
        <br className="block lg:hidden" /> the Tracer DAO?
      </span>
      <Button ultralightBlueGradient className="mt-2 lg:mt-0 lg:ml-6">
        Join the Conversation
      </Button>
      <Button ultralightBlueGradient className="mt-2 lg:ml-4 lg:mt-0">
        Launch the Governance App
      </Button>
      <MeshDouble />
    </div>
  );
};

export default HelpGovernBanner;
