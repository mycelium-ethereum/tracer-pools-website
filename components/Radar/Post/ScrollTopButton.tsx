import { handleAnchorClick } from "@lib/helpers";

const ScrollTopButton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a
      className="leading-[24px] text-highlight"
      onClick={handleAnchorClick}
      href="#top"
    >
      <button
        className={`pointer-events-none flex items-center ${
          className ? className : ""
        }`}
      >
        Back to Top
        <img
          src="/img/icons/arrow-up.svg"
          alt="Back to Top"
          className="ml-2.5 h-[15px] w-2.5"
        />
      </button>
    </a>
  );
};

export default ScrollTopButton;
