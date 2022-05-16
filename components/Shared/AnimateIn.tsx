import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AnimateIn: React.FC<{
  delay: number;
  className?: string;
  children: React.ReactNode;
}> = ({ delay, className, children }) => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    });
  }
  return (
    <motion.div
      initial={{
        y: "-7px",
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
