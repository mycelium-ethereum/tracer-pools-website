import UnderlinedHeading from "@components/Shared/Heading/UnderlinedHeading";
import Paragraph from "@components/Home/Paragraph";

const Header: React.FC<{}> = () => {
  return (
    <header className="mb-10 w-full text-action-active sm:max-w-[335px] xl:mb-0 xl:mr-20">
      <UnderlinedHeading
        lineColor="blue"
        className="max-w-[294px] text-action-active"
      >
        CURRENT FACTORIES
      </UnderlinedHeading>
      <h2 className="mb-4 text-2xl leading-[28px] text-action-active">
        Data and Pools are just the beginning.
      </h2>
      <Paragraph className="max-w-[305px] text-tertiary">
        Help us build the future by submitting a proposal for your own Factory
        Template to the Tracer DAO.
      </Paragraph>
    </header>
  );
};

export default Header;
