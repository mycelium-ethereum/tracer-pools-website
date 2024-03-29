import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import BackgroundParallax from "./parallax";
import Scripts from "./scripts";
import Socials from "./socials";
import MyceliumPopup from "../components/mycelium-modal";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Socials />
      <MyceliumPopup />
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
          duration: 0.5,
          delay: 0.4,
        }}
        className="relative overflow-hidden"
      >
        <BackgroundParallax />
        {children}
        <Footer />
      </motion.main>
      <Scripts />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
