import OptimisedImage from "@components/Shared/OptimisedImage";

const Background: React.FC<{ image: string; className: string }> = ({
  image,
  className,
}) => {
  return (
    <OptimisedImage
      src={image}
      alt="Banner background"
      className={`absolute left-1/2 bottom-0 z-0 -translate-x-1/2 ${
        className ? className : ""
      }`}
    />
  );
};

export default Background;
