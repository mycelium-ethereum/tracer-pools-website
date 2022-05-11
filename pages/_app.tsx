// Import css
import "@styles/globals.css";
import AnimateLayout from "@components/Shared/AnimateLayout";
import { AnimatePresence } from "framer-motion";
import Navbar from "@components/Shared/Navbar";
import Footer from "@components/Shared/Footer/";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const route = useRouter().pathname;
  const path = useRouter().asPath;
  return (
    <>
      <Navbar route={route} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <AnimateLayout key={path} path={path}>
          <Component {...pageProps} />
        </AnimateLayout>
      </AnimatePresence>
      <Footer route={route} />
    </>
  );
}

export default MyApp;
