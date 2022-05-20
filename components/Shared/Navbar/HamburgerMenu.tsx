type HBMenuProps = {
  navOpen: boolean;
  hamburgerColour: string;
  toggleNavMenu: () => void;
};

const HamburgerMenu: React.FC<HBMenuProps> = ({
  navOpen,
  hamburgerColour,
  toggleNavMenu,
}) => {
  return (
    <button
      className="z-20 flex w-6 flex-col items-end md:hidden"
      onClick={toggleNavMenu}
      aria-label="nav-menu"
    >
      <span
        className={`block h-0.5 w-[17px] transform-gpu transition-all duration-500 ${
          navOpen
            ? `translate-y-2 rotate-45 bg-white`
            : `rotate-0 ${hamburgerColour}`
        }`}
      />
      <span
        className={`mt-1.5 block h-0.5 w-[17px] transform-gpu transition-all duration-500 ${
          navOpen ? `bg-white opacity-0` : `opacity-100 ${hamburgerColour}`
        }`}
      />
      <span
        className={`mt-1.5 block h-0.5 w-[17px] transition-all duration-500 ${
          navOpen ? `-translate-y-2 -rotate-45 bg-white` : `${hamburgerColour}`
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;
