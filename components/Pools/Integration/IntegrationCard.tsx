import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
// import OptimisedImage from "@components/Shared/OptimisedImage";

const Integration: React.FC<{
  title: string;
  text: React.ReactNode;
}> = ({ title, text }) => {
  return (
    <div className="text-action-active">
      <img
        src="/img/shared/integration-placeholder.png"
        alt=""
        className="mb-4 h-[154px] w-[154px]"
      />
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        {title}
      </UnderlinedHeading>
      {text}
    </div>
  );
};

export default Integration;