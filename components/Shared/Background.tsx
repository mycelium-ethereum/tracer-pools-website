import OptimisedImage from "@components/Shared/OptimisedImage";

const Background: React.FC<{ image: string; className: string }> = ({
  image,
  className,
}) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <OptimisedImage
        src={image}
        cover
        position="center"
        alt="Banner background"
        className={`banner-bg absolute left-1/2 bottom-0 z-0 -translate-x-1/2 ${
          className ? className : ""
        }`}
      />
    </div>
  );
};

export default Background;
