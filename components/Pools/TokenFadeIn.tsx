import { Fade } from "react-awesome-reveal";

const TokenFadeIn: React.FC<{
  delay: number;
  className?: string;
  children: React.ReactNode;
}> = ({ delay, className, children }) => {
  return (
    <div className={`absolute h-full w-full ${className ? className : ""}`}>
      <Fade delay={delay} triggerOnce={true}>
        {children}
      </Fade>
    </div>
  );
};

export default TokenFadeIn;
