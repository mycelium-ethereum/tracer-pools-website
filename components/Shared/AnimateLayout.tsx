import { motion } from "framer-motion";

const AnimateLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ease: "linear",
        duration: 0.4,
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default AnimateLayout;
