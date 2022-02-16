import { Link } from "gatsby";
import React from "react";

const FooterLink = ({ content }) => {
  const URL = content.url;
  return (
    <>
      {/* If outgoing URL */}
      {URL.includes("https") && URL !== "" && (
        <a
          href={URL}
          target="_blank"
          className="text-white transition-colors duration-300 hover:text-blue-400"
        >
          {content.text}
        </a>
      )}
      {/* If local URL */}
      {!URL.includes("https") && URL !== "" && (
        <Link
          to={URL}
          className="text-white transition-colors duration-300 hover:text-blue-400"
        >
          {content.text}
        </Link>
      )}
      {/* If no URL (coming soon) */}
      {URL === "" && (
        <div className="flex items-center">
          <span className="text-white transition-colors duration-300 hover:text-blue-400"></span>
          {content.text}
          <span className="ml-2.5 flex h-[17px] w-[46px] items-center justify-center rounded-lg bg-tracer-400 text-[10px] font-bold">
            SOON
          </span>
        </div>
      )}
    </>
  );
};

export default FooterLink;
