import ShareButton from "@components/Shared/Buttons/ShareButton";
import TweetButton from "@components/Shared/Buttons/TweetButton";

const ShareButtons: React.FC<{
  title: string;
  smallerMargin?: boolean;
  className?: string;
}> = ({ title, smallerMargin, className }) => {
  return (
    <div className={`flex w-max ${className ? className : ""}`}>
      <ShareButton title={title} />
      <TweetButton className={smallerMargin ? "ml-1" : "ml-2"} />
    </div>
  );
};
export default ShareButtons;
