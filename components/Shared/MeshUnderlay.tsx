import OptimisedImage from "@/components/Shared/OptimisedImage";

const MeshUnderlay: React.FC<{ fullPage?: boolean }> = ({ fullPage }) => {
  return (
    <>
      {fullPage ? (
        <OptimisedImage
          src="/img/shared/mesh.png"
          alt=""
          absolute
          className="pointer-events-none top-0 right-0 z-0 h-full min-h-[1080px] w-full min-w-[1920px]"
        />
      ) : (
        <OptimisedImage
          src="/img/shared/mesh-top-right.png"
          alt=""
          absolute
          className="pointer-events-none top-0 right-0 z-0 h-[1080px] w-[1920px]"
        />
      )}
    </>
  );
};

export default MeshUnderlay;
