const Slide: React.FC<{ item: { image: string; text: string } }> = ({
  item,
}) => (
  <div className="flex flex-col-reverse p-6 sm:flex-col sm:py-10 sm:pr-10 4xl:px-12 4xl:pt-12">
    {/* Will be replaced by Lottie animations in future */}
    <img
      src={item.image}
      alt=""
      draggable={false}
      className="w-full object-center sm:h-[324px] sm:object-cover 4xl:h-[585px]"
    />
    <p className="mx-auto mb-4 h-[100px] max-w-[818px] text-action-active sm:mt-4 sm:mb-0 sm:h-[50px] xl:h-[100px] 4xl:text-center 4xl:text-xl 4xl:leading-[28px]">
      {item.text}
    </p>
  </div>
);

export default Slide;
