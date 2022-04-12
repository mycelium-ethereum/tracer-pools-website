const BackgroundVideo: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="absolute top-0 left-0 z-[-1] h-full w-full">
      {/* <div className="absolute top-0 left-0 z-10 h-full w-full bg-tracer-navy mix-blend-multiply" /> */}
      {/* <img
        className="absolute top-0 left-0 z-20 h-full w-full object-cover"
        src="/img/home/mesh.svg"
      /> */}
      <video
        className="relative h-full w-full object-cover object-left"
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
