import AnimateIn from "@components/Shared/AnimateIn";
import H1 from "@components/Home/H1";
import Paragraph from "@components/Home/Paragraph";

const Header: React.FC<{}> = () => {
  return (
    <header className="flex flex-col justify-center 3xl:max-w-[1043px]">
      <AnimateIn delay={0.2}>
        <H1 className="mb-4">
          Any market,
          <br className="block lg:hidden" />
          Accessible Anywhere,
          <br />
          For Anyone
        </H1>
      </AnimateIn>
      <AnimateIn delay={0.6}>
        <Paragraph>
          Leveraging base layer blockchain technology to
          <br className="hidden sm:block" /> democratise access to risk
          management tooling.
        </Paragraph>
      </AnimateIn>
    </header>
  );
};

export default Header;
