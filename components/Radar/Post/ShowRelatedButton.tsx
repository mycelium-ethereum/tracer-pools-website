const ShowRelatedButton: React.FC<{
  showRelated: boolean;
  handleClick: () => void;
}> = ({ showRelated, handleClick }) => {
  return (
    <button className="leading-[24px] text-highlight" onClick={handleClick}>
      {showRelated ? "Hide" : "View"} Related Articles
    </button>
  );
};

export default ShowRelatedButton;
