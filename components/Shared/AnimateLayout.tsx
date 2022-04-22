import { motion } from "framer-motion";

const AnimateLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
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
      className="min-h-screen overflow-hidden"
    >
      {children}
    </motion.main>
  );
};

export default AnimateLayout;
