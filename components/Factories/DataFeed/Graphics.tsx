import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <OptimisedImage
        src="/img/factories/data-feed-bg.png"
        alt="Model background"
        className="absolute right-0 top-0 block h-full max-w-[479px] 3xl:hidden"
      />
      <div className="absolute right-0 top-0 hidden h-full w-[35vw] max-w-[1000px] 3xl:block">
        <OptimisedImage
          src="/img/factories/data-feed-xl-bg.png"
          alt="Model background"
          cover
          position="left"
        />
      </div>
      <OptimisedImage
        src="/img/factories/mesh.png"
        alt="Mesh overlay"
        className="absolute right-0 top-0 h-full max-w-[1440px]"
      />
    </>
  );
};

export default Graphics;
