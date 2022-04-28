import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import Script from "next/script";
import { GetStaticPaths, GetStaticProps } from "next";
import { marked } from "marked";
import DOMPurify from "dompurify";
import SEO from "@/components/Shared/SEO";
import Container from "@/components/Shared/Container";
import CategoryBubble from "@/components/Radar/CategoryBubble";
import SidebarWrapper from "@/components/Shared/SidebarWrapper";
import MeshUnderlay from "@/components/Shared/MeshUnderlay";
import CallToAction from "@/components/Radar/CallToAction";
import PostSidebarContent from "@/components/Radar/PostSidebarContent";
import { useRouter } from "next/router";

const Article = ({ data, articles }) => {
  const bodyTextRef = useRef<HTMLDivElement>(null);

  const applyStyles = (e) => {
    const headingStyles =
      "relative uppercase tracking-[0.15em] mb-2 text-highlight mb-4 font-normal text-sm mt-10";
    if (e.tagName === "OL")
      e.setAttribute("class", "list-outside pl-4 list-style-number");
    if (e.tagName === "UL") e.setAttribute("class", "list-outside pl-4");
    if (e.tagName === "A")
      e.setAttribute(
        "class",
        "underline text-tracer-lightblue hover:text-tracer-midblue transition-colors duration-300"
      );
    // if (e.tagName === "P") e.setAttribute("class", "mb-4");
    if (e.tagName === "H1") e.setAttribute("class", headingStyles);
    if (e.tagName === "H2") e.setAttribute("class", headingStyles);
    if (e.tagName === "H3") e.setAttribute("class", headingStyles);
    // if (e.tagName === "HR") e.setAttribute("class", "mb-4");
    if (e.tagName === "IMG") {
      e.setAttribute(
        "class",
        "mx-auto rounded-lg transition-all duration-300 cursor-pointer bg-white mb-4"
      );
      e.onclick = function () {
        this.classList.toggle("enlarge");
      };
    }
  };

  const setBodyText = () => {
    bodyTextRef.current.innerHTML = marked(
      DOMPurify.sanitize(data.body_text, {
        FORCE_BODY: true,
        ADD_TAGS: ["script"],
      })
    );
  };

  const getTags = () => {
    const childElements = bodyTextRef.current.childNodes;
    childElements.forEach((e) => {
      const nestedChildren = e.childNodes;
      applyStyles(e);
      if (!!nestedChildren) {
        nestedChildren.forEach((e) => {
          applyStyles(e);
        });
      }
    });
  };

  const removeURLParameters = () => {
    const url = document.location.href;
    window.history.pushState({}, "", url.split("?")[0]);
  };

  useEffect(() => {
    removeURLParameters();
    setBodyText();
    getTags();
    // setCurrentURL(window.location.href);
    // setCurrentPath(window.location.pathname);
  }, [data]);

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        image={data.image[0].formats.small.url}
        publishedTime={data.publish_date}
      />
      <section className="pt-[140px] pb-1.5">
        <Container className="leading-[24px] text-tertiary">
          <div className="max-w-[840px]">
            <header>
              <h1 className="text-[40px] font-bold leading-[48px] text-highlight">
                {data.title}
              </h1>
              <small className="mt-2 block text-xl font-light leading-[30px]">
                {data.tagline}
              </small>
              <div className="flex pt-[66px]">
                <Moment format="Do MMMM, YYYY" className="mr-2 text-highlight">
                  {data.publish_date}
                </Moment>
                <span>
                  Read time: {data.read_time}&nbsp;
                  {data.read_time === 1 ? "minute" : "minutes"}
                </span>
              </div>
              {data.category && (
                <div className="my-2.5">
                  <CategoryBubble category={data.category} large />
                </div>
              )}
            </header>
            <div className="prose mt-9" ref={bodyTextRef} />
          </div>
          <CallToAction />
        </Container>
        <SidebarWrapper bodyTextRef={bodyTextRef}>
          <PostSidebarContent currentArticle={data} articles={articles} />
        </SidebarWrapper>
        <MeshUnderlay />
      </section>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetch(
    "https://mycelium-content.uc.r.appspot.com/tracer-blogs"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const paths = articles.map((article: any) => {
    return {
      params: { slug: String(article.slug) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const sleep = (ms = 100) => {
  return new Promise((res) => setTimeout(res, ms));
};

export const avoidRateLimit = async () => {
  process.env.NODE_ENV === "production" && (await sleep());
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await avoidRateLimit();
  const articles = await fetch(
    "https://mycelium-content.uc.r.appspot.com/tracer-blogs"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  let articleID = 0;
  articles.map((article) => {
    if (article.slug === params.slug) {
      articleID = article.id;
    }
  });

  const data = await fetch(
    `https://mycelium-content.uc.r.appspot.com/tracer-blogs/${articleID}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    props: {
      data,
      articles,
    },
  };
};

export default Article;
