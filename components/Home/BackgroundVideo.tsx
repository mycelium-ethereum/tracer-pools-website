const BackgroundVideo: React.FC<{ src: string; loop?: boolean }> = ({
  src,
  loop,
}) => {
  return (
    <div className="absolute top-0 left-0 z-[-1] h-full w-full">
      <video
        className="relative h-full w-full object-cover object-left"
        autoPlay
        loop={loop}
        muted
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
