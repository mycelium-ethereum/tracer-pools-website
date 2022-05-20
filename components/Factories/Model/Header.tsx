import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import MoreInfoButtons from "@components/Factories/Model/MoreInfoButtons";
import H2 from "@components/Factories/H2";

const Header: React.FC<{}> = () => {
  return (
    <header className="max-w-[464px] text-action-active lg:max-w-[542px] xl:mb-0 3xl:max-w-[750px]">
      <UnderlinedHeading lineColor="blue" className="max-w-[294px]">
        THE FACTORY MODEL
      </UnderlinedHeading>
      <H2 className="max-w-[455px] 3xl:max-w-full">
        The base layer of the Tracer protocol combines smart contract templates
        and oracle data feeds to create unstoppable derivatives market
        infrastructure.
      </H2>
      <p className="text-tertiary">
        The creation of derivative markets on anything that can be represented
        by a price feed is powerful. With the Factory Model, we have the ability
        to bring stability to markets across the Metaverse and real world.
      </p>
    </header>
  );
};

export default Header;
