import Button from "@components/Shared/Buttons/Button";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";

const HelpGovernBanner: React.FC = () => {
  return (
    <div className="relative -ml-3 flex w-full min-w-[calc(100%+24px)] flex-col items-center justify-center overflow-hidden rounded-md bg-tracer-midblue py-[22px] text-xl leading-[28px] text-white md:ml-0 md:min-w-full lg:flex-row xl:h-[84px] xl:py-0">
      <span className="text-center">
        Want to help govern
        <br className="block md:hidden" /> the Tracer DAO?
      </span>
      <div className="flex flex-col items-center md:mt-2 md:flex-row lg:mt-0">
        <Button ultralightBlueGradient className="mt-2 ml-0 md:mt-0 lg:ml-6">
          Join the Conversation
        </Button>
        <Button ultralightBlueGradient className="mt-2 md:ml-4 md:mt-0 lg:ml-4">
          Launch the Governance App
        </Button>
        <MeshDouble />
      </div>
    </div>
  );
};

export default HelpGovernBanner;
