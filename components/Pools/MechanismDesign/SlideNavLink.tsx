const SlideNavLink: React.FC<{
  slider1: any;
  slider2: any;
  pauseSlider: (slider1: any, slider2: any) => void;
  num: number;
}> = ({ slider1, slider2, num, pauseSlider }) => (
  <button
    className="relative mx-2 text-xl font-light leading-[30px] text-action-inactive [transition:font-weight_0.3s_ease_0.1s,color_0.3s_ease_0.1s] xs:mx-3 xs:text-2xl sm:mx-0 sm:my-[15px] 4xl:my-[22px] 4xl:text-[40px] 4xl:leading-[44px]"
    onClick={() => pauseSlider(slider1, slider2)}
  >
    0{num}
  </button>
);

export default SlideNavLink;
