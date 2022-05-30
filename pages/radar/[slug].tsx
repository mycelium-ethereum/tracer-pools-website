import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { GetStaticPaths, GetStaticProps } from "next";
import { marked } from "marked";
import DOMPurify from "dompurify";
import SEO from "@components/Shared/SEO";
import Container from "@components/Shared/Container";
import SidebarWrapper from "@components/Shared/SidebarWrapper";
import MeshUnderlay from "@components/Shared/Mesh/MeshUnderlay";
import CallToAction from "@components/Radar/Post/CallToAction";
import PostSidebarContent from "@components/Radar/Sidebar/PostSidebarContent";
import PostHeader from "@components/Radar/Post/PostHeader";
import ShareButtons from "@components/Radar/Post/ShareButtons";
import CurrentArticlePopout from "@components/Radar/Post/CurrentArticlePopout";
import ScrollTopButton from "@components/Radar/Post/ScrollTopButton";

const Article = ({ data, articles }) => {
  const bodyTextRef = useRef<HTMLDivElement>(null);

  const applyAttributes = (e) => {
    if (e.tagName === "A") {
      e.setAttribute("target", "_blank");
    }
    if (e.tagName === "IMG") {
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
    childElements.forEach((child) => {
      const nestedChildren = child.childNodes;
      applyAttributes(child);
      if (!!nestedChildren) {
        nestedChildren.forEach((child) => {
          applyAttributes(child);
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
      <section
        className="relative z-20 pt-[123px] sm:pt-[140px] lg:pb-5"
        id="top"
      >
        <CurrentArticlePopout data={data} articles={articles} />
        <Container className="leading-[24px] text-tertiary">
          <div className="lg:max-w-[calc(100%-296px)] xl:max-w-[880px]">
            <PostHeader data={data} />
            <div className="prose mt-9" ref={bodyTextRef} />
          </div>
          <ShareButtons
            title={data.title}
            className="mx-auto mt-10 mb-6 lg:mx-0 lg:-translate-x-2"
          />
          <ScrollTopButton className="mx-auto mb-[34px] lg:mx-0" />
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
  let firstSuccess = false;
  let secondSuccess = false;
  let articles = [];
  let articleID = 0;
  while (!firstSuccess) {
    try {
      await avoidRateLimit();
      articles = await fetch(
        "https://mycelium-content.uc.r.appspot.com/tracer-blogs"
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));
      articles.map((article) => {
        if (article.slug === params.slug) {
          articleID = article.id;
        }
      });
      firstSuccess = true;
    } catch {
      console.error("Failed to fetch article");
    }
  }

  let data = [];
  while (!secondSuccess) {
    try {
      await avoidRateLimit();
      data = await fetch(
        `https://mycelium-content.uc.r.appspot.com/tracer-blogs/${articleID}`
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));
      secondSuccess = true;
    } catch {
      console.error("Failed to fetch article");
    }
  }

  return {
    props: {
      data,
      articles,
    },
  };
};

export default Article;
