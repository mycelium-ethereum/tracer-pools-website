const SolidButton = ({
  className = "",
  children,
  link,
  blue = false,
  download = false,
}) => {
  return (
    //   Only download if link is not external
    <a href={link} download={download} target={download ? null : "_blank"}>
      <button
        className={`mx-auto flex h-[43px] w-[274px] items-center justify-center rounded-lg  border-0 font-semibold outline-none transition-colors duration-300 ${
          className ? className : ""
        }
        ${
          blue
            ? "hover:bg-tracer-800 bg-[#1C64F2] text-white"
            : "bg-[#F1F2F4] text-black hover:bg-[#1C64F2] hover:text-white"
        }`}
      >
        {children}
      </button>
    </a>
  );
};

export default SolidButton;
