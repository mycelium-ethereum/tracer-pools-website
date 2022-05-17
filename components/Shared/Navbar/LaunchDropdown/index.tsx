import {
  appButtonContent,
  linkContent,
  socialLinkContent,
} from "@components/Shared/Navbar/LaunchDropdown/presets";
import AppItem from "@components/Shared/Navbar/LaunchDropdown/AppItem";
import LinkItem from "@components/Shared/Navbar/LaunchDropdown/LinkItem";
import SocialItem from "./SocialItem";

const LaunchDropdown: React.FC<{
  dropdownOpen: boolean;
  handleDropdownClose: () => void;
}> = ({ dropdownOpen, handleDropdownClose }) => {
  const activeStyles =
    "[transform:scale3d(1,1,1)_perspective(999px)_translate3d(0,0,0)] pointer-events-auto opacity-100";
  const inactiveStyles =
    "[transform:scale3d(0.98,0.98,1)_perspective(999px)_translate3d(0,0,0)] pointer-events-none opacity-0";

  return (
    <div
      onMouseLeave={handleDropdownClose}
      onClick={handleDropdownClose}
      className={`absolute right-0 top-14 w-[280px] rounded-md border border-action-active bg-tracer-midblue bg-opacity-80 text-white transition-all duration-300 ${
        dropdownOpen ? activeStyles : inactiveStyles
      }`}
    >
      <div className="grid grid-cols-2 gap-y-2 border-b border-action-active p-2">
        {appButtonContent.map((app) => (
          <AppItem key={app.logo} {...app} />
        ))}
      </div>
      {linkContent.map((item) => (
        <LinkItem key={item.label} {...item} />
      ))}
      <div className="flex justify-center py-4">
        {socialLinkContent.map((item) => (
          <SocialItem key={item.link} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LaunchDropdown;
