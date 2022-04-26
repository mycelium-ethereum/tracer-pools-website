import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
// import DOMPurify from "dompurify";
import Script from "next/script";
import { GetStaticPaths, GetStaticProps } from "next";
// Components
import SEO from "@/components/Shared/SEO";
import Container from "@/components/Shared/Container";
import MarkdownContent from "@/components/Radar/MarkdownContent";
import CategoryBubble from "@/components/Radar/CategoryBubble";
// Images
// import TwitterSVG from "../../components/SVG/TwitterSVG";
// import LinkedInSVG from "../../components/SVG/LinkedInSVG";
// import FacebookSVG from "../../components/SVG/FacebookSVG";
// import LinkSVG from "../../components/SVG/LinkSVG";

const Article = ({ data }) => {
  const [currentURL, setCurrentURL] = useState<string>("");
  const [currentPath, setCurrentPath] = useState<string>("");
  const [bannerImage, setBannerImage] = useState<string>("");
  const bodyText = useRef<HTMLDivElement>(null);

  const applyStyles = (e) => {
    const headingStyles =
      "relative uppercase tracking-[0.15em] mb-2 text-highlight mb-4 font-normal text-sm mt-10";
    if (e.tagName === "OL")
      e.setAttribute("class", "list-outside pl-4 list-style-number mb-4");
    if (e.tagName === "UL") e.setAttribute("class", "list-outside pl-4 mb-4");
    if (e.tagName === "A")
      e.setAttribute(
        "class",
        "underline text-tracer-lightblue hover:text-tracer-midblue transition-colors duration-300"
      );
    if (e.tagName === "P") e.setAttribute("class", "mb-4");
    if (e.tagName === "H1") e.setAttribute("class", headingStyles);
    if (e.tagName === "H2") e.setAttribute("class", headingStyles);
    if (e.tagName === "H3") e.setAttribute("class", headingStyles);
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

  const getTags = () => {
    const childElements = bodyText.current.childNodes;
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
  const getBannerImage = () => {
    let bannerImage = "";
    if (data.image[0].formats.small.url) {
      bannerImage = data.image[0].formats.small.url;
    } else if (data.image[0].formats.medium.url) {
      bannerImage = data.image[0].formats.medium.url;
    } else if (data.image[0].formats.large.url) {
      bannerImage = data.image[0].formats.large.url;
    }
    setBannerImage(bannerImage);
  };

  useEffect(() => {
    getTags();
    getBannerImage();
    setCurrentURL(window.location.href);
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      <SEO
        title={data.title}
        description={data.Description}
        image={data.image[0].formats.small.url}
        publishedTime={data.Publish_date}
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
            <div className="blog-content mt-9" ref={bodyText}>
              <MarkdownContent children={data.body_text} />
            </div>
          </div>
        </Container>
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

  const paths = articles.map((article) => {
    return {
      params: { slug: String(article.slug) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    },
  };
};

export default Article;
