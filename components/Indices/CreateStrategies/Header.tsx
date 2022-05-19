import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import H2 from "@components/Shared/Heading/H2";

const Header: React.FC<{}> = () => {
  return (
    <header className="text-action-active sm:max-w-[448px]">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        STRATEGIES
      </UnderlinedHeading>
      <H2 className=" max-w-[344px] text-2xl leading-[28px] text-action-active">
        Create Market
        <br /> Neutral Strategies
      </H2>
      <Paragraph className="max-w-[319px] text-tertiary">
        Bet on the relative performance of two assets by taking the ratio of two
        data feeds.
      </Paragraph>
    </header>
  );
};

export default Header;
