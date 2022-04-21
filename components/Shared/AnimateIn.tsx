import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AnimateIn: React.FC<{ delay: number; children: React.ReactNode }> = ({
  delay,
  children,
}) => {
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
    <div ref={ref}>
      <motion.div
        initial={{
          y: "-7px",
          opacity: 0,
        }}
        animate={animationControl}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateIn;
