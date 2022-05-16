import ChevronDownSVG from "@components/SVG/ChevronDownSVG";
import Button from "@components/Shared/Buttons/Button";

const LaunchAppButton: React.FC<{
  dropdownOpen: boolean;
}> = ({ dropdownOpen }) => {
  const activeChevronStyles = "rotate-180";
  const inactiveChevronStyles = "rotate-0";

  return (
    <Button
      darkBlueGradient
      className={`text-white ${
        dropdownOpen ? "xs:bg-action-active xs:bg-opacity-80" : ""
      }`}
    >
      Launch
      <ChevronDownSVG
        className={`ml-2.5 h-1.5 w-3 transition-all duration-300 ${
          dropdownOpen ? activeChevronStyles : inactiveChevronStyles
        }`}
      />
    </Button>
  );
};

export default LaunchAppButton;
