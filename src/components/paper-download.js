import React, { useState } from "react";
import PDFIcon from "../../static/img/learn/pdf-icon.svg";

const PaperDownload = ({ title, header, image, link }) => {
  const [showDownload, setShowDownload] = useState(false);
  return (
    <>
      <div className="col-span-1">
        <div className="relative mb-5 flex h-12 w-full items-start justify-center border-0 sm:h-auto md:h-14">
          <div className="relative z-10 text-center">
            <h1 className="font-semibold text-white md:text-lg">{title}</h1>
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setShowDownload(true)}
          onMouseLeave={() => setShowDownload(false)}
        >
          <a href={link} target="_blank" className="block">
            <img
              className={"shadow-2xl"}
              src={image}
              alt="Research Paper page"
            />
          </a>
          <a
            className={`${
              showDownload ? "opacity-100" : "opacity-0"
            } absolute inset-0 m-auto flex h-12 w-32 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:bg-blue-800`}
            href={link}
            download
          >
            Download
            <img className="ml-2 w-3" src={PDFIcon} alt="PDF Download" />
          </a>
        </div>
      </div>
    </>
  );
};

export default PaperDownload;
