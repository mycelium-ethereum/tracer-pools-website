import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[542px] 3xl:max-w-[720px]">
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        GET PAID FOR YOUR CREATIVITY
      </UnderlinedHeading>
      <h2 className="mb-4 max-w-[455px] text-2xl leading-[28px] 3xl:max-w-full 4xl:text-[40px] 4xl:leading-[44px]">
        <span className="inline-block text-[40px] sm:leading-[44px] 4xl:text-[64px] 4xl:leading-[72px]">
          10% of fees
        </span>
        <br />
        earned on a Perpetual Pool market get sent to the deployer of the price
        feed.
      </h2>
      <p className="max-w-[305px] text-tertiary">
        The more highly demanded the data you bring on chain, the greater the
        reward.
      </p>
    </header>
  );
};

export default Header;
