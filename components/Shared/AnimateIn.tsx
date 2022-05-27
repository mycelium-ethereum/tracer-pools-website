import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AnimateIn: React.FC<{
  delayLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  opacityOnly?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ delayLevel, opacityOnly, className, children }) => {
  const delayValues = [0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2, 3.6, 4];
  const animationControl = useAnimation();
  const { inView, ref } = useInView();
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: delayValues[delayLevel - 1],
        duration: 0.8,
      },
    });
  }
  return (
    <motion.div
      initial={{
        y: opacityOnly ? 0 : "-7px",
        opacity: 0,
      }}
      animate={animationControl}
      ref={ref}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;
