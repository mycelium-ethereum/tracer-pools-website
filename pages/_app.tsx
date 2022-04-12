import Layout from "@/components/Shared/Layout";
// Import css
import "@/styles/globals.css";
import AnimateLayout from "@/components/Shared/AnimateLayout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@/components/Shared/Navbar";

function MyApp({ Component, pageProps }) {
  const route = useRouter().pathname;

  return (
    <Layout>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <AnimateLayout key={route}>
          <Component {...pageProps} />
        </AnimateLayout>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
