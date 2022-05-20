import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <div className="absolute top-0 right-0 hidden h-full w-[50vw] max-w-[792px] lg:block 4xl:max-w-full">
        <OptimisedImage
          cover
          position="left"
          src="/img/home/factories-section-bg.png"
          alt=""
        />
      </div>
      <div className="relative block h-[430px] w-full lg:hidden">
        <OptimisedImage
          className="absolute top-0 right-0 h-[430px] min-w-[1030px]"
          src="/img/home/factories-section-mobile-bg.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Graphics;
