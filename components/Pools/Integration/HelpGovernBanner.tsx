import Button from "@components/Shared/Buttons/Button";
import MeshDouble from "@components/Shared/Mesh/MeshDouble";

const HelpGovernBanner: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-tracer-midblue py-[22px] text-xl leading-[28px] text-white lg:flex-row xl:h-[84px] xl:py-0">
      <span className="text-center">
        Want to help govern
        <br className="block lg:hidden" /> the Tracer DAO?
      </span>
      <Button ultralightBlueGradient className="mt-2 xl:mt-0 xl:ml-6">
        Join the Conversation
      </Button>
      <Button ultralightBlueGradient className="mt-2 xl:ml-4 xl:mt-0">
        Launch the Governance App
      </Button>
      <MeshDouble />
    </div>
  );
};

export default HelpGovernBanner;
