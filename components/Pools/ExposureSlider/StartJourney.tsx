import Button from "@components/Shared/Buttons/Button";

const StartJourney: React.FC<{}> = () => {
  return (
    <div className="mx-auto mt-7 w-max lg:mt-4">
      <span className="block text-lg leading-[28px] text-action-active">
        Start your Journey now!
      </span>
      <Button lightBlueGradient className="mx-auto mt-2">
        Browse Tokens
      </Button>
    </div>
  );
};

export default StartJourney;
