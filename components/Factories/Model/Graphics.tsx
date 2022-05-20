import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <div className="absolute bottom-0 right-0 block h-[366px] w-[650px] md:w-[830px] lg:h-full lg:w-[50vw] lg:max-w-[830px] 4xl:hidden">
        <OptimisedImage
          src="/img/factories/model-bg.png"
          alt="Model background"
          cover
          position="right"
        />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[70vw] max-w-[1742px] 4xl:block">
        <OptimisedImage
          src="/img/factories/model-xl-bg.png"
          alt="Model background"
          cover
          position="left"
        />
      </div>
    </>
  );
};

export default Graphics;
