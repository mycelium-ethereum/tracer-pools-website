const SlideNavLink: React.FC<{ pauseSlider: () => void; num: number }> = ({
  pauseSlider,
  num,
}) => (
  <button
    className="relative mx-2 text-xl font-light leading-[30px] text-action-inactive transition-colors duration-300 xs:mx-3 xs:text-2xl sm:mx-0 sm:my-[15px] 4xl:my-[22px] 4xl:text-[40px] 4xl:leading-[44px]"
    onClick={() => pauseSlider()}
  >
    0{num}
  </button>
);

export default SlideNavLink;
