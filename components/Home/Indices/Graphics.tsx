import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <div className="absolute right-0 top-0 hidden h-full w-full max-w-[1340px] lg:block 4xl:hidden">
        <OptimisedImage
          src="/img/home/data-feeds-bg.png"
          alt="Data Feeds Background"
          cover
          position="left"
        />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[70vw] max-w-[2177px] 4xl:block">
        <OptimisedImage
          src="/img/home/data-feeds-xl-bg.png"
          alt="Data Feeds Background"
          cover
          position="left"
        />
      </div>
      <div className="relative block h-[458px] w-full lg:hidden">
        <OptimisedImage
          className="absolute bottom-0 right-0 h-[1012px] w-[1805px]"
          src="/img/home/data-feeds-mobile-bg.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Graphics;
