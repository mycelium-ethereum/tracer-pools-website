import OptimisedImage from "@components/Shared/OptimisedImage";

const MeshUnderlay: React.FC<{ fullPage?: boolean }> = ({ fullPage }) => {
  return (
    <>
      {fullPage ? (
        <OptimisedImage
          src="/img/shared/mesh.png"
          alt=""
          className="pointer-events-none absolute top-0 right-0 z-0 h-full w-full select-none md:min-h-[1080px] md:min-w-[1920px]"
        />
      ) : (
        <OptimisedImage
          src="/img/shared/mesh-top-right.png"
          alt=""
          className="pointer-events-none absolute top-0 right-0 z-0 h-[1080px] w-[1920px] select-none"
        />
      )}
    </>
  );
};

export default MeshUnderlay;
