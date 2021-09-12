import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import BackgroundParallax from "./parallax";
import Scripts from "./scripts";
import Socials from "./socials";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Socials />
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
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <BackgroundParallax />
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
