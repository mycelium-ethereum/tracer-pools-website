import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <div className="absolute left-1/2 bottom-0 block h-[380px] w-full max-w-[820px] -translate-x-1/2 lg:hidden">
        <OptimisedImage
          src="/img/factories/data-feed-mobile-bg.png"
          alt="Data feed graphic"
          cover
          position="center"
        />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[30vw] max-w-[479px] lg:block 3xl:hidden">
        <OptimisedImage
          src="/img/factories/data-feed-bg.png"
          alt="Data feed graphic"
          cover
          position="left"
        />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[35vw] max-w-[1000px] 3xl:block">
        <OptimisedImage
          src="/img/factories/data-feed-xl-bg.png"
          alt="Data feed graphic"
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
