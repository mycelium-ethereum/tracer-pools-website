import ChevronDownSVG from "@components/SVG/ChevronDownSVG";
import Button from "@components/Shared/Buttons/Button";

const LaunchAppButton: React.FC<{
  dropdownOpen: boolean;
  navColour: string;
}> = ({ dropdownOpen, navColour }) => {
  const activeChevronStyles = "rotate-180";
  const inactiveChevronStyles = "rotate-0";
  const btnColour =
    navColour === "text-action-active"
      ? "text-action-active btn-gradient-blue-light"
      : "text-white btn-gradient-blue-dark";
  // btn-gradient-blue-light
  // btn-gradient-blue-dark
  return (
    <Button
      className={`${btnColour} border-action-active transition-colors duration-300 ${
        dropdownOpen ? "xs:bg-action-active xs:bg-opacity-80 xs:text-white" : ""
      }`}
    >
      Launch
      <ChevronDownSVG
        className={`pointer-events-none ml-2.5 h-1.5 w-3 ${
          dropdownOpen ? activeChevronStyles : inactiveChevronStyles
        }`}
      />
    </Button>
  );
};

export default LaunchAppButton;
