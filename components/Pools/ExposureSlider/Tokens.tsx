import OptimisedImage from "@components/Shared/OptimisedImage";

const Tokens: React.FC<{}> = () => {
  return (
    <div className="relative mx-auto h-[350px] w-[250px] md:static md:mx-0 md:h-auto">
      <OptimisedImage
        src="/img/shared/link-token.png"
        alt="Link token"
        className="absolute top-8 -left-[100px] max-w-[263px] md:-left-[150px] md:max-w-[300px] lg:max-w-[420px] 2xl:top-[-20px] 2xl:left-[-270px] 2xl:max-w-[564px]"
      />
      <OptimisedImage
        src="/img/shared/btc-token.png"
        alt="BTC token"
        className="absolute bottom-2 -right-24 max-w-[244px] md:max-w-[280px] lg:max-w-[400px] 2xl:bottom-3 2xl:-right-52 2xl:max-w-[516px]"
      />
    </div>
  );
};

export default Tokens;
