import OptimisedImage from "@/components/Shared/OptimisedImage";

const MeshUnderlay: React.FC<{}> = ({}) => {
  return (
    <OptimisedImage
      src="/img/general/mesh-top-right.png"
      alt=""
      absolute
      className="pointer-events-none top-0 right-0 w-full"
    />
  );
};

export default MeshUnderlay;
