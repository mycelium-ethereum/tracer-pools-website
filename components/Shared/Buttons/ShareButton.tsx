import ShareSVG from "@components/SVG/ShareSVG";
import { useEffect, useRef, useState } from "react";

const ShareButton: React.FC<{ title: string }> = ({ title }) => {
  const [currentURL, setCurrentURL] = useState<string>("");
  const shareButtonElement = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: currentURL,
        })
        .then(() => {})
        .catch(console.error);
    } else {
      // fallback - copy URL to clipboard
      copyToClipboard(currentURL);
      shareButtonElement.current.innerText = "Copied!";
      setTimeout(() => {
        shareButtonElement.current.innerText = "Share";
      }, 1000);
    }
  };

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject("The Clipboard API is not available.");
  };

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  return (
    <button
      onClick={handleClick}
      ref={shareButtonElement}
      className="flex h-7 items-center rounded-lg px-2 leading-[24px] text-tertiary transition-colors duration-300 hover:bg-action-cell hover:text-action-active"
    >
      Share
      <ShareSVG alt="Share icon" className="ml-2 h-3 w-3" />
    </button>
  );
};

export default ShareButton;
