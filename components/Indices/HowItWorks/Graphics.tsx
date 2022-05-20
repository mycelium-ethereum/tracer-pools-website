import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <div className="absolute -right-24 bottom-0 block w-[375px] max-w-[883px] md:-right-12 md:bottom-auto md:top-0 md:h-full md:w-[70vw] lg:w-[60vw] 4xl:hidden">
        <OptimisedImage
          src="/img/indices/how-it-works-bg.png"
          alt="Background graphic"
        />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[60vw] max-w-[1607px] 4xl:block">
        <OptimisedImage
          src="/img/indices/how-it-works-xl-bg.png"
          alt="Background graphic"
          className="absolute right-0 top-0 hidden h-full max-w-[1607px] 4xl:block"
        />
      </div>
      <OptimisedImage
        src="/img/indices/mesh.png"
        alt="Mesh overlay"
        className="absolute right-0 top-0 h-full max-w-[1440px]"
      />
    </>
  );
};

export default Graphics;
