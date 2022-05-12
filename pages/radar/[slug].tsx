import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { GetStaticPaths, GetStaticProps } from "next";
import { marked } from "marked";
import DOMPurify from "dompurify";
import SEO from "@components/Shared/SEO";
import Container from "@components/Shared/Container";
import SidebarWrapper from "@components/Shared/SidebarWrapper";
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay";
import CallToAction from "@components/Radar/Post/CallToAction";
import PostSidebarContent from "@components/Radar/Post/PostSidebarContent";
import PostHeader from "@components/Radar/Post/PostHeader";
import ShareButtons from "@components/Radar/Post/ShareButtons";

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
        "mx-auto rounded-lg transition-all duration-300 cursor-pointer bg-white mb-4 relative z-10"
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

  useEffect(() => {
    setBodyText();
    getTags();
  }, [data]);

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        image={data.image[0].formats.small.url}
        publishedTime={data.publish_date}
      />
      <section className="relative z-20 pt-[140px] pb-5">
        <Container className="leading-[24px] text-tertiary">
          <div className="max-w-[840px]">
            <PostHeader data={data} />
            <div className="prose mt-9" ref={bodyTextRef} />
          </div>
          <ShareButtons title={data.title} className="mt-10 mb-12" />
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

const sleep = (ms = 500) => {
  return new Promise((res) => setTimeout(res, ms));
};

export const avoidRateLimit = async () => {
  process.env.NODE_ENV === "production" && (await sleep());
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let success = false;
  let articles = [];
  while (!success) {
    try {
      await avoidRateLimit();
      articles = await fetch(
        "https://mycelium-content.uc.r.appspot.com/tracer-blogs"
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));
      success = true;
    } catch {
      console.error("Failed to fetch article");
    }
  }
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
