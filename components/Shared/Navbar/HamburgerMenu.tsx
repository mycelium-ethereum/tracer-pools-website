type HBMenuProps = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu: React.FC<HBMenuProps> = ({ navOpen, setNavOpen }) => {
  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <button
      className="z-20 flex w-6 flex-col items-end xl:hidden"
      onClick={handleClick}
      aria-label="nav-menu"
    >
      <span
        className={`block h-0.5 w-[17px] transform-gpu bg-white transition-all duration-500 ${
          navOpen ? "translate-y-2 -rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`mt-1.5 block h-0.5 w-[17px] transform-gpu bg-white transition-all duration-500 ${
          navOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`mt-1.5 block h-0.5 w-[17px] bg-white transition-all duration-500 ${
          navOpen ? "-translate-y-2 rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;
