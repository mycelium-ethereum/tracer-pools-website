/* eslint-disable */
import React, { useEffect, useRef } from "react";
import Home from "../../static/img/blog-posts/home.svg";
import Calendar from "../../static/img/blog-posts/calendar.svg";
import Clock from "../../static/img/blog-posts/clock.svg";
import { Link } from "gatsby";
import Moment from "react-moment";
import marked from "marked";
import DOMPurify from "dompurify";
import Container from "../../components/container";

const BlogText = ({ data }) => {
  const bodyText = useRef();
  const setBodyText = () => {
    bodyText.current.innerHTML = marked(DOMPurify.sanitize(data.body_text));
  };
  const applyStyles = (e) => {
    if (e.tagName === "P") {
      e.setAttribute("class", "mb-4");
    }
    if (e.tagName === "OL") {
      e.setAttribute("class", "list-decimal list-outside pl-4 mb-4");
    }
    if (e.tagName === "UL") {
      e.setAttribute("class", "list-disc list-outside pl-4 mb-4");
    }
    if (e.tagName === "A") {
      e.setAttribute("class", "text-blue-500");
    }
    if (e.tagName === "H2") {
      e.setAttribute("class", "text-black text-xl mt-8 mb-4 font-semibold");
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
  }, []);
  return (
    <>
      <section className="select-dark relative z-20 mt-16 h-full w-full bg-white">
        <Container className="pt-6 pb-6">
          <div className="md:md-20 mb-12 flex flex-col justify-between md:flex-row lg:mb-32">
            <div className="flex items-center text-gray-400">
              <Link to="/">
                <img className="w-4.5 h-4.5" src={Home} alt={"Home"} />
              </Link>
              <span className="mx-3">/</span>
              <Link to="/radar">Radar</Link>
              <span className="mx-3">/</span>
              <span>{data.title}</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center text-gray-400 md:mt-0">
              <div className="mb-3 flex items-center md:mb-0">
                <img
                  className="w-4.5 h-4.5 mr-3"
                  src={Calendar}
                  alt={"Calendar"}
                />
                <Moment className="mr-3 md:mr-6" format="Do MMMM, YYYY">
                  {data.publish_date}
                </Moment>
              </div>
              <div className="mb-3 flex items-center md:mb-0">
                <img className="w-4.5 h-4.5 mr-3" src={Clock} alt={"Clock"} />
                <span>Read time: {data.read_time} minutes</span>
              </div>
            </div>
          </div>
          <div className="max-w-blog mx-auto">
            <h1 className=" mb-2 text-2xl font-semibold text-black sm:text-center md:text-3xl">
              {data.title}
            </h1>
            {/* Tagline */}
            <small className="block text-base font-normal text-gray-500 sm:text-center sm:text-xl">
              {data.tagline}
            </small>
            <div ref={bodyText} className="mt-12 pr-8 md:pr-0" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogText;
