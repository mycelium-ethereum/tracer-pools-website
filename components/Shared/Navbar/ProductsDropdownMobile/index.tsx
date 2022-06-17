import MobileLink from "@components/Shared/Navbar/MobileNav/MobileLink"
import GradientLine from "@components/Shared/GradientLine"
import { dropdownLinks } from "@components/Shared/Navbar/ProductsDropdownMobile/presets"

const ProductsDropdown: React.FC<{
    mobileProductsDropdownOpen: boolean
    handleClose: () => void
    handleMobileProductsDropdownToggle: () => void
}> = ({
    mobileProductsDropdownOpen,
    handleClose,
    handleMobileProductsDropdownToggle,
}) => {
    return (
        <>
            <button
                onClick={handleMobileProductsDropdownToggle}
                className="nav-link w-full px-4 text-left"
            >
                <span
                    className={`relative z-10 block overflow-hidden py-4 text-[40px] leading-[44px] transition-all duration-300 ${
                        mobileProductsDropdownOpen ? "font-bold" : "font-light"
                    }`}
                >
                    Products
                </span>
                {!mobileProductsDropdownOpen && (
                    <GradientLine color="lightblue" />
                )}
            </button>
            <div className="relative">
                <div
                    className={`relative z-10 w-full overflow-hidden transition-[height] duration-500 ${
                        mobileProductsDropdownOpen ? "h-[230px]" : "h-0"
                    }`}
                >
                    {dropdownLinks.map((link, i) => (
                        <MobileLink
                            key={i}
                            link={link.href}
                            onClickAction={handleClose}
                            border={i !== dropdownLinks.length - 1}
                            nestedLink
                            noHover
                        >
                            {link.label}
                        </MobileLink>
                    ))}
                </div>
                <div
                    className={`absolute top-0 left-0 z-0 w-full transition-[height] duration-500 ${
                        mobileProductsDropdownOpen ? "h-[230px]" : "h-0"
                    }`}
                >
                    <div className="absolute top-0 left-1/2 h-full w-[calc(100%+32px)] -translate-x-1/2 bg-action-active" />
                </div>
            </div>
        </>
    )
}

export default ProductsDropdown
