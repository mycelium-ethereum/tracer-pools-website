import Button from "@components/Shared/Buttons/Button";
import AnimateIn from "@components/Shared/AnimateIn";
import { SVGProps } from "types";

const LargeHeader: React.FC<{
  title: string | React.ReactNode;
  subheading: string | React.ReactNode;
  button1Text: string;
  button1Link?: string;
  button2Text: string;
  button2Link?: string;
  Logo: React.FC<SVGProps>;
  logoClassName: string;
  className?: string;
}> = ({
  title,
  subheading,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  Logo,
  logoClassName,
  className,
}) => {
  return (
    <header
      className={`relative z-20 mx-auto text-center ${
        className ? className : ""
      }`}
    >
      <AnimateIn delay={0.2}>
        <Logo className={`mx-auto mb-8 sm:mb-4 ${logoClassName}`} />
      </AnimateIn>
      <AnimateIn delay={0.5}>
        <h1 className="mb-4 text-[40px] font-light leading-[44px] transition-all duration-500 sm:text-[48px] sm:leading-[60px] md:text-[70px] md:leading-[ç] xl:text-[120px] xl:leading-[132px]">
          {title}
        </h1>
      </AnimateIn>
      <AnimateIn delay={0.8}>
        <p className="mx-auto max-w-[700px] text-xl leading-[30px] text-action-active transition-all duration-500 sm:text-2xl sm:leading-[28px]">
          {subheading}
        </p>
      </AnimateIn>
      <AnimateIn delay={1.1} className="mx-auto w-max">
        <div className="mt-4 flex flex-col items-center sm:flex-row 4xl:mt-8">
          <Button darkBlueGradient link={button1Link}>
            {button1Text}
          </Button>
          <Button
            blueTransparent
            link={button2Link}
            className="mt-4 sm:ml-4 sm:mt-0"
          >
            {button2Text}
          </Button>
        </div>
      </AnimateIn>
    </header>
  );
};

export default LargeHeader;
