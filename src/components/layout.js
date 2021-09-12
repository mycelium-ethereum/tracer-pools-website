import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import BackgroundParallax from "./parallax";
import Scripts from "./scripts";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <BackgroundParallax />
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
          ease: "easeIn",
          duration: 0.3,
          delay: 1,
        }}
      >
        {children}
      </motion.main>
      <Footer />
      <Scripts />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
