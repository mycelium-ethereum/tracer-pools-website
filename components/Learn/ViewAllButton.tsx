import Button from "@components/Shared/Buttons/Button";

const ViewAllButton: React.FC<{
  handleShowAll?: (
    setShowAll: (value: React.SetStateAction<boolean>) => void
  ) => void;
  outgoingLink?: string;
  children: string;
}> = ({ handleShowAll, outgoingLink, children }) => {
  return (
    <>
      <Button
        lightBlueGradient
        className="btn-full-width mt-8 grid-cols-1 gap-x-4 sm:col-start-2 sm:-translate-x-1/2 lg:col-start-2 lg:translate-x-0 3xl:translate-x-1/2 4xl:col-start-3 4xl:translate-x-0"
        action={handleShowAll}
        outgoingLink={outgoingLink}
      >
        {children}
      </Button>
    </>
  );
};

export default ViewAllButton;
