import ShareButton from "@components/Shared/Buttons/ShareButton";
import TweetButton from "@components/Shared/Buttons/TweetButton";

const ShareButtons: React.FC<{
  title: string;
  smallerMargin?: boolean;
  className?: string;
}> = ({ title, smallerMargin, className }) => {
  return (
    <div className={`flex ${className ? className : ""}`}>
      <ShareButton title={title} />
      <TweetButton className={smallerMargin ? "ml-1" : "ml-2"} />
    </div>
  );
};
export default ShareButtons;
