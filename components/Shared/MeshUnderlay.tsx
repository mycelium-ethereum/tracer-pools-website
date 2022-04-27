import OptimisedImage from "@/components/Shared/OptimisedImage";

const MeshUnderlay: React.FC<{}> = ({}) => {
  return (
    <OptimisedImage
      src="/img/shared/mesh-top-right.png"
      alt=""
      absolute
      className="pointer-events-none top-0 right-0 z-0 h-[1080px] w-[1920px]"
    />
  );
};

export default MeshUnderlay;
