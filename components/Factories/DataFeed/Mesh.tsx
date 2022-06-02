import OptimisedImage from "@components/Shared/OptimisedImage";

const Mesh: React.FC<{}> = () => {
  return (
    <>
      <OptimisedImage
        src="/img/factories/mesh.png"
        alt="Mesh overlay"
        className="absolute right-0 top-0 h-full max-w-[1440px]"
      />
    </>
  );
};

export default Mesh;
