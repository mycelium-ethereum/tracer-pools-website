import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
    return (
      <>
        <Layout>
          <SEO title="404: Not found" />
          <section className="h-screen w-full relative z-10">
            <div className="container w-full h-screen min-h-body relative flex items-center justify-center xl:px-0 sm:pt-18 pt-16 px-4 mx-auto">
              <header className="text-white text-6xl font-black">
                <h1>This page does not exist.</h1>
              </header>
            </div>
          </section>
        </Layout>
      </>
    );
}

export default NotFoundPage;
