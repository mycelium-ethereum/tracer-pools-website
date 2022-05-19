import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import H2 from "@components/Shared/Heading/H2";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[542px] 3xl:max-w-[720px]">
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        GET PAID FOR YOUR CREATIVITY
      </UnderlinedHeading>
      <H2 className="max-w-[455px] 3xl:max-w-full">
        <span className="inline-block text-2xl leading-[28px] sm:text-[40px] sm:leading-[44px] 3xl:text-[64px] 3xl:leading-[72px]">
          10% of fees
        </span>
        <br />
        earned on a Perpetual Pool market get sent to the deployer of the price
        feed.
      </H2>
      <p className="max-w-[305px] text-tertiary">
        The more highly demanded the data you bring on chain, the greater the
        reward.
      </p>
    </header>
  );
};

export default Header;
