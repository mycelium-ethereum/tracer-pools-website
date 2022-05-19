import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import H2 from "@components/Shared/Heading/H2";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[542px]">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        GET PAID FOR YOUR CREATIVITY
      </UnderlinedHeading>
      <H2 className=" max-w-[455px] text-2xl leading-[28px] text-action-active">
        10% of fees
        <br />
        <span className="inline-block text-2xl leading-[28px]">
          earned on a Perpetual Pool market get sent to the deployer of the
          price feed.
        </span>
      </H2>
      <Paragraph className="max-w-[305px] text-tertiary">
        The more highly demanded the data you bring on chain, the greater the
        reward.
      </Paragraph>
    </header>
  );
};

export default Header;
