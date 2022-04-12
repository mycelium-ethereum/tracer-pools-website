import Image from "next/image";

type OptimisedImageProps = {
  src: string;
  alt: string;
  absolute?: boolean;
  stretch?: boolean;
  className?: string;
};

const OptimisedImage: React.FC<OptimisedImageProps> = ({
  src,
  alt,
  absolute,
  stretch,
  className,
}) => {
  return (
    <div
      className={`overflow-hidden 
      ${stretch ? "image-container-stretch" : "image-container"} 
      ${className ? className : ""} 
      ${absolute ? "absolute" : "relative"}`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="image"
        draggable={false}
        loading="eager"
        // lazyBoundary="-200px"
      />
    </div>
  );
};

export default OptimisedImage;
