import { motion } from "framer-motion";

const AnimateLayout: React.FC<{
  path: string;
  children: React.ReactNode;
}> = ({ path, children }) => {
  return (
    <motion.main
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
    </motion.main>
  );
};

export default AnimateLayout;
