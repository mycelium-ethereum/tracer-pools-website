import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Navbar from "./navbar"
import Footer from "./footer"

// Global CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "/static/css/style.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <motion.main
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2
        }}
      >
        {children}
      </motion.main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
