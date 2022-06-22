import {
    appButtonContent,
    linkContent,
    socialLinkContent,
} from "@components/Shared/Navbar/LaunchDropdown/presets"
import AppItem from "@components/Shared/Navbar/LaunchDropdown/AppItem"
import LinkItem from "@components/Shared/Navbar/LaunchDropdown/LinkItem"
import SocialItem from "./SocialItem"

const LaunchDropdown: React.FC<{
    dropdownOpen: boolean
    handleDropdownClose: () => void
}> = ({ dropdownOpen, handleDropdownClose }) => {
    const activeStyles = "active pointer-events-auto"
    const inactiveStyles = "pointer-events-none"

    return (
        <div
            onMouseLeave={handleDropdownClose}
            onClick={handleDropdownClose}
            className={`launch-dropdown absolute right-0 top-14 w-[280px] text-white ${
                dropdownOpen ? activeStyles : inactiveStyles
            }`}
        >
            <div className="grid grid-cols-2 rounded-tl-md rounded-tr-md border border-action-active">
                {appButtonContent.map((app) => (
                    <AppItem key={app.logo} {...app} />
                ))}
            </div>
            {linkContent.map((item) => (
                <LinkItem key={item.label} {...item} />
            ))}
            <div className="flex justify-center rounded-bl-md rounded-br-md border-b border-r border-l border-action-active py-4">
                {socialLinkContent.map((item) => (
                    <SocialItem key={item.link} {...item} />
                ))}
            </div>
        </div>
    )
}

export default LaunchDropdown
