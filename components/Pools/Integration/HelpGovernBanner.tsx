import Button from "@components/Shared/Button";
import MeshUnderlay from "@components/Shared/MeshUnderlay";

const HelpGovernBanner: React.FC = () => {
  return (
    <div className="relative flex h-[84px] w-full items-center justify-center rounded-md bg-tracer-midblue">
      <span>Want to help govern the Tracer DAO?</span>
      <Button darkBlueGradient className="ml-6">
        Join the Conversation
      </Button>
      <Button darkBlueGradient className="ml-4">
        Launch the Governance App
      </Button>
      <MeshUnderlay fullPage />
    </div>
  );
};

export default HelpGovernBanner;
