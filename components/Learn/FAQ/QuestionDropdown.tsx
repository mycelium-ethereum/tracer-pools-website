import GradientLine from "@components/Shared/GradientLine";
import { useEffect, useState, useRef } from "react";

const QuestionDropdown: React.FC<{
  content: {
    question: string;
    answer: JSX.Element;
  };
  className?: string;
}> = ({ content, className }) => {
  const [open, setOpen] = useState(false);
  const panel = useRef(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let panel = (e.target as HTMLButtonElement)
      .nextElementSibling as HTMLDivElement;
    if (panel && panel.style.maxHeight) {
      panel.style.maxHeight = null;
      setOpen(false);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      setOpen(true);
    }
  };

  const handleResize = () => {
    if (panel.current.style.maxHeight)
      panel.current.style.maxHeight = panel.current.scrollHeight + "px";
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`group mb-4 h-min w-[calc(50%-8px)] flex-shrink rounded-lg bg-white text-lg text-white transition-colors duration-300 [box-shadow:_0px_2px_4px_rgba(0,0,0,0.1)] focus:outline-none
      ${open ? "" : "hover:bg-action-cell"}
      ${className ? className : ""}`}
    >
      <button
        className={`relative flex w-full cursor-pointer select-none items-center border-0 p-4 text-left font-bold text-action-active outline-none transition-all duration-300 ${
          open ? "pb-2" : ""
        }`}
        onClick={handleClick}
      >
        {content.question}
        <img
          src="/img/icons/chevron-down-blue.svg"
          className={`h[6px] pointer-events-none absolute right-6 top-6 w-[11px] transform transition-all duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={panel}
        className={`max-h-0 overflow-hidden px-4 transition-all duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <GradientLine color="lightblue" />
        {content.answer}
      </div>
    </div>
  );
};

export default QuestionDropdown;
