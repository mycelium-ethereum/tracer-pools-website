import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import Moment from "react-moment";
import marked from "marked";
import DOMPurify from "dompurify";
import CallToAction from "./call-to-action";
import TweetButton from "../tweet-button";
import ShareButton from "../share-button";
import Container from "../container";

// Images
import Home from "../../../static/img/blog-posts/home.svg";
import Calendar from "../../../static/img/blog-posts/calendar.svg";
import Clock from "../../../static/img/blog-posts/clock.svg";

const BlogText = ({ data }) => {
  const [currentURL, setCurrentURL] = useState("");
  const bodyText = useRef();
  const setBodyText = () => {
    bodyText.current.innerHTML = marked(
      DOMPurify.sanitize(data.body_text, {
        FORCE_BODY: true,
        ADD_TAGS: ["script"],
      })
    );
  };

  const applyStyles = (e) => {
    if (e.tagName === "OL") {
      e.setAttribute("class", "list-outside");
    }
    if (e.tagName === "UL") {
      e.setAttribute("class", "list-outside");
    }
    if (e.tagName === "A") {
      e.setAttribute("class", "text-blue-500");
      e.setAttribute("target", "_blank");
      e.setAttribute("rel", "noopener noreferrer");
    }
    if (e.tagName === "H2") {
      e.setAttribute("class", "text-black text-xl font-semibold");
    }
    if (e.tagName === "IMG") {
      e.setAttribute(
        "class",
        "mx-auto rounded-lg transition-all duration-300 cursor-pointer"
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
  useEffect(() => {
    setBodyText();
    getTags();
    setCurrentURL(window.location.href);
  });
  return (
    <>
      <section className="select-dark relative z-20 mt-16 h-full w-full bg-white">
        <Container className="pt-6 pb-24 sm:pb-24">
          <div className="md:md-20 mb-12 flex flex-col justify-between md:flex-row lg:mb-32">
            <div className="flex items-start text-gray-400 sm:mr-6 lg:items-center">
              <Link to="/" className="flex h-6 w-5 items-center">
                <img className="home-icon" src={Home} alt="Home" />
              </Link>
              <span className="mx-3">/</span>
              <Link to="/radar">Radar</Link>
              <span className="mx-3">/</span>
              <Link to={currentURL}>
                <span className="block truncate sm:whitespace-normal">
                  {data.title}
                </span>
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap items-center text-gray-400 md:mt-0">
              <div className="mb-3 flex items-center md:mb-0">
                <img
                  className="w-4.5 h-4.5 mr-3"
                  src={Calendar}
                  alt="Calendar"
                />
                <Moment className="mr-3 md:mr-6" format="Do MMMM, YYYY">
                  {data.publish_date}
                </Moment>
              </div>
              <div className="mb-3 flex items-center md:mb-0">
                <img className="w-4.5 h-4.5 mr-3" src={Clock} alt="Clock" />
                <span>
                  Read time: {data.read_time}{" "}
                  {parseInt(data.read_time) === 1 ? "minute" : "minutes"}
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-blog mx-auto pr-8 md:pr-0">
            <h1 className=" mb-2 text-3xl font-semibold text-black sm:text-center md:text-4xl">
              {data.title}
            </h1>
            {/* Tagline */}
            <small className="block text-base font-normal text-gray-500 sm:text-center sm:text-xl">
              {data.tagline}
            </small>
            <div ref={bodyText} className="prose mx-auto mt-6 mb-10" />
            <div className="mx-auto flex w-min">
              <TweetButton url={currentURL} />
              <ShareButton url={currentURL} title={data.title} />
            </div>
            <CallToAction />
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogText;
