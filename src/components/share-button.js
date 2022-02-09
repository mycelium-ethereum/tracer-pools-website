import React, { useEffect, useRef } from "react";

const ShareButton = ({ url, title }) => {
  const shareButtonElement = useRef(null);
  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share " + title,
          url: { url },
        })
        .then(() => {
          shareButtonElement.text("Copied!");
          setTimeout(() => {
            shareButtonElement.text("Share");
          }, 1000);
        })
        .catch(console.error);
    } else {
      // fallback - copy URL to clipboard
      shareButtonElement.text("Copied!");
      setTimeout(() => {
        shareButtonElement.text("Share");
      }, 1000);
    }
  };

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject("The Clipboard API is not available.");
  };

  return (
    <button
      onClick={handleClick}
      ref={shareButtonElement}
      className="group ml-4 flex h-10 w-[122px] items-center justify-center rounded-xl bg-tracer-gray font-semibold transition-colors duration-500 hover:bg-blue-600 hover:text-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3.5 h-4 w-4"
        aria-label="Share"
      >
        <path
          d="M12.9999 6C13.6091 6.00002 14.2038 5.8146 14.705 5.4684C15.2062 5.1222 15.5902 4.63162 15.8058 4.06191C16.0214 3.49219 16.0585 2.87034 15.9121 2.27904C15.7657 1.68774 15.4428 1.15501 14.9863 0.751702C14.5297 0.348394 13.9613 0.0936156 13.3564 0.0212481C12.7516 -0.0511194 12.139 0.0623529 11.6003 0.346575C11.0615 0.630798 10.622 1.0723 10.3402 1.61238C10.0585 2.15245 9.9478 2.7655 10.0229 3.37L5.08293 5.84C4.65916 5.43136 4.12453 5.15642 3.54562 5.04945C2.96672 4.94247 2.36914 5.00819 1.82731 5.2384C1.28549 5.46862 0.823377 5.85317 0.498537 6.34414C0.173697 6.83511 0.000488281 7.4108 0.000488281 7.9995C0.000488281 8.58821 0.173697 9.1639 0.498537 9.65487C0.823377 10.1458 1.28549 10.5304 1.82731 10.7606C2.36914 10.9908 2.96672 11.0565 3.54562 10.9496C4.12453 10.8426 4.65916 10.5676 5.08293 10.159L10.0229 12.629C9.93543 13.3312 10.099 14.0418 10.4847 14.6351C10.8704 15.2284 11.4535 15.6663 12.1308 15.8713C12.8081 16.0763 13.5361 16.0353 14.1861 15.7555C14.8361 15.4757 15.3663 14.9751 15.6829 14.3422C15.9995 13.7093 16.0822 12.9849 15.9164 12.2969C15.7505 11.6089 15.3468 11.0017 14.7766 10.5826C14.2064 10.1635 13.5064 9.95951 12.8003 10.0066C12.0942 10.0537 11.4274 10.3489 10.9179 10.84L5.97793 8.37C6.00819 8.12426 6.00819 7.87574 5.97793 7.63L10.9179 5.16C11.4559 5.68 12.1899 6 12.9999 6Z"
          className="fill-[#374151] transition-colors duration-500 group-hover:fill-white"
        />
      </svg>
      Share
    </button>
  );
};

export default ShareButton;
