import ChevronDownSVG from "@components/SVG/ChevronDownSVG";

const LaunchAppButton: React.FC<{
  onClickAction?: () => void;
}> = ({ onClickAction }) => {
  return (
    <button
      onClick={onClickAction}
      className="btn-gradient-blue-dark flex h-9 w-36 items-center justify-center rounded-md border border-action-active text-sm"
    >
      Launch App
      <ChevronDownSVG className="ml-2.5 h-1.5 w-3" />
    </button>
  );
};

export default LaunchAppButton;
