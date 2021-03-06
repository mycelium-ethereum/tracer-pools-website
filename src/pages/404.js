import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <SEO title="404: Not found" />
        <section className="h-screen w-full relative z-10">
          <div className="container w-full h-screen min-h-body relative flex items-center justify-center xl:px-0 sm:pt-18 pt-16 px-4 mx-auto">
            <header className="text-white text-center">
              <h1 className="sm:text-7xl text-5xl font-black">
                This page does not exist
              </h1>
              <Link
                to="/"
                className="flex items-center justify-center text-normal font-normal rounded-lg h-12 w-48 transition-all duration-500 border-2 border-white hover:text-blue-400 hover:bg-white mx-auto mt-12"
              >
                Back to home
              </Link>
            </header>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFoundPage;
