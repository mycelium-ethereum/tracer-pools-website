import OptimisedImage from "@components/Shared/OptimisedImage";

const Slide: React.FC<{ item: { image: string; text: string } }> = ({
  item,
}) => (
  <div className="flex flex-col-reverse p-6 sm:flex-col sm:py-10 sm:pr-10 4xl:px-12 4xl:pt-12 justify-center h-full">
    <OptimisedImage
      src={item.image}
      alt=""
      className="h-full"
    />
    <p className="mx-auto mb-4 h-[100px] max-w-[818px] text-action-active sm:mt-4 sm:mb-0 sm:h-[50px] xl:h-[100px] 4xl:h-[50px] 4xl:text-center 4xl:text-xl 4xl:leading-[28px]">
      {item.text}
    </p>
  </div>
);

export default Slide;
