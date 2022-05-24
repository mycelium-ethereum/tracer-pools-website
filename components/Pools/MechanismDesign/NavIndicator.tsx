const NavIndicator: React.FC<{}> = ({}) => {
  return (
    <div className="absolute bottom-0 left-1/2 h-[1px] w-[265px] -translate-x-1/2 xs:min-w-[calc(100%+40px)] sm:left-auto sm:right-0 sm:bottom-auto sm:top-0 sm:h-full sm:w-[1px] sm:translate-x-0">
      <span className="slide-indicator pointer-events-none absolute right-0 h-[1px] w-[36px] transition-all duration-500 xs:w-[50px] sm:h-[65px] sm:w-[1px] 4xl:h-[90px]" />
    </div>
  );
};

export default NavIndicator;
