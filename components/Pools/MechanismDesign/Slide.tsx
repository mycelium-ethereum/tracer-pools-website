import OptimisedImage from "@components/Shared/OptimisedImage";
import StepLottieAnim from "@components/Pools/MechanismDesign/StepLottieAnim";

const Slide: React.FC<{
  item: { image: string; lottieFile?: any; text: string };
  currentSlide: number;
}> = ({ item, currentSlide }) => {
  return (
    <div className="flex h-full flex-col-reverse justify-center p-6 sm:flex-col sm:py-10 sm:pr-10 4xl:px-12 4xl:pt-12">
      {item.image && (
        <OptimisedImage src={item.image} alt="" className="h-full" />
      )}
      {item.lottieFile && (
        <StepLottieAnim lottieFile={item.lottieFile} key={currentSlide} />
      )}
      <p className="mx-auto mb-4 h-[100px] max-w-[818px] text-action-active sm:mt-4 sm:mb-0 sm:h-[50px] xl:h-[100px] 4xl:h-[50px] 4xl:text-center 4xl:text-xl 4xl:leading-[28px]">
        {item.text}
      </p>
    </div>
  );
};

export default Slide;
