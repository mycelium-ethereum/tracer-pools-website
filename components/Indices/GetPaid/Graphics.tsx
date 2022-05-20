import OptimisedImage from "@components/Shared/OptimisedImage";

const Graphics: React.FC<{}> = () => {
  return (
    <>
      <OptimisedImage
        src="/img/indices/get-paid-bg.png"
        alt="Mesh graphic"
        className="absolute right-0 bottom-0 block h-[400px] max-w-[700px] lg:h-[662px] lg:max-w-[1170px] 4xl:hidden"
      />
      <OptimisedImage
        src="/img/indices/get-paid-xl-bg.png"
        alt="Mesh graphic"
        className="absolute right-0 top-0 hidden h-[1000px] max-w-[2654px] 4xl:block"
      />
    </>
  );
};

export default Graphics;
