import TwitterGreySVG from "@components/SVG/TwitterGreySVG";
import { useEffect, useState } from "react";

const TweetButton: React.FC<{ className?: string }> = ({ className }) => {
  const [currentURL, setCurrentURL] = useState<string>("");

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  return (
    <a
      href={`https://twitter.com/intent/tweet?url=${currentURL}&text=`}
      target="_blank"
    >
      <button
        className={`flex h-7 items-center rounded-lg px-2 leading-[24px] text-tertiary transition-colors duration-300 hover:bg-action-cell hover:text-action-active ${
          className ? className : ""
        }`}
      >
        Tweet
        <TwitterGreySVG alt="Share icon" className="ml-2 h-3 w-3" />
      </button>
    </a>
  );
};

export default TweetButton;
