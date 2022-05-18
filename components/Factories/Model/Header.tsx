import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";
import MoreInfoButtons from "@components/Factories/Model/MoreInfoButtons";

const Header: React.FC<{}> = () => {
  return (
    <header className="mb-10 text-action-active sm:max-w-[542px] xl:mb-0">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        THE FACTORY MODEL
      </UnderlinedHeading>
      <h2 className="mb-4 max-w-[455px] text-2xl leading-[28px] text-action-active">
        The base layer of the Tracer protocol combines smart contract templates
        and oracle data feeds to create unstoppable derivatives market
        infrastructure.
      </h2>
      <Paragraph className="text-tertiary">
        The creation of derivative markets on anything that can be represented
        by a price feed is powerful. With the Factory Model, we have the ability
        to bring stability to markets across the Metaverse and real world.
      </Paragraph>
      <MoreInfoButtons className="hidden xl:flex" />
    </header>
  );
};

export default Header;
