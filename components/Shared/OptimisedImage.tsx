import Image from "next/image";

type OptimisedImageProps = {
  src: string;
  alt: string;
  cover?: boolean;
  position?: "top" | "bottom" | "center" | "left" | "right";
  stretch?: boolean;
  className?: string;
};

const OptimisedImage: React.FC<OptimisedImageProps> = ({
  src,
  alt,
  cover,
  position,
  stretch,
  className,
}) => {
  return (
    <>
      {cover ? (
        <Image
          src={src}
          alt={alt}
          objectFit={cover ? "cover" : null}
          layout="fill"
          className={`image-cover-${position ? position : ""} ${
            className ? className : ""
          }`}
          draggable={false}
          loading="eager"
        />
      ) : (
        <div
          className={`overflow-hidden 
      ${stretch ? "image-container-stretch" : "image-container"} 
      ${className ? className : ""}`}
        >
          <Image
            src={src}
            alt={alt}
            objectFit={cover ? "cover" : null}
            layout="fill"
            className="image"
            draggable={false}
            loading="eager"
            // lazyBoundary="-200px"
          />
        </div>
      )}
    </>
  );
};

export default OptimisedImage;
