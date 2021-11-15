import React, { useState } from "react";
import PDFIcon from "../../static/img/learn/pdf-icon.svg";

const PaperDownload = ({ title, header, image, link }) => {
  const [showDownload, setShowDownload] = useState(false);
  return (
    <>
      <div className="col-span-1 overflow-hidden">
        <div className="relative w-full lg:h-28 md:h-20 h-28 flex flex-col items-center justify-center border-0 overflow-hidden">
          <div className="relative z-10 text-center">
            <small className="lg:text-2xl md:text-base text-2xl text-tracer-300 font-normal">
              Tracer
            </small>
            <h1 className="xl:text-2xl md:text-xl text-2xl text-white font-bold">
              {title}
            </h1>
          </div>
        </div>
        <div className="relative" onMouseEnter={() => setShowDownload(true)} onMouseLeave={() => setShowDownload(false)}>
          <a href={link} rel="noreferrer" target="_blank" className="block">
            <img src={image} alt="Research Paper page" />
          </a>
          <a
            className={`${showDownload ? 'flex' : 'hidden'} absolute inset-0 m-auto transition-colors duration-500 w-32 h-12 rounded-xl font-semibold text-white items-center justify-center bg-blue-600 hover:bg-blue-800`}
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
