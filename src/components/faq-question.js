/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import ChevronIcon from "/static/img/learn/chevron-down.png";

const FAQQuestion = ({ content }) => {
  const [open, setOpen] = useState(false);
  const panel = useRef(null);
  const handleClick = (e) => {
    let panel = e.target.nextElementSibling;
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
    <div className="group mb-5 rounded-xl bg-[#00007A] bg-opacity-50 text-lg text-white transition-colors duration-500 hover:bg-opacity-70 focus:outline-none">
      <button
        class="relative flex w-full cursor-pointer items-center border-0 p-6 text-left font-semibold outline-none transition-all duration-500"
        onClick={handleClick}
      >
        {content.question}
        <img
          src={ChevronIcon}
          className={`pointer-events-none absolute right-6 top-6 h-5 w-5 transform transition-all duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={panel}
        class="max-h-0 overflow-hidden px-6 transition-all duration-300 ease-out"
      >
        {content.answer}
      </div>
    </div>
  );
};

export default FAQQuestion;
