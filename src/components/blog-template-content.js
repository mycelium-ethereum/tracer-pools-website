import React, { useEffect, useRef } from "react";
import Home from "../../static/img/blog-posts/home.svg";
import Calendar from "../../static/img/blog-posts/calendar.svg";
import Clock from "../../static/img/blog-posts/clock.svg";
import { Link } from "gatsby";
import Moment from "react-moment";
import marked from "marked";
import DOMPurify from "dompurify";

const BlogText = ({ data }) => {
  const bodyText = useRef();
  const setBodyText = () => {
    const bodyTextHTML = marked(DOMPurify.sanitize(data.body_text));
    bodyText.current.innerHTML = bodyTextHTML;
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
    }
    if (e.tagName === "H2") {
      e.setAttribute("class", "text-black text-xl font-semibold");
    }
    if (e.tagName === "IMG") {
      e.setAttribute("class", "mx-auto rounded-lg");
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
  });
  return (
    <>
      <section className="h-full w-full z-20 relative mt-16 bg-white select-dark">
        <div className="container relative w-full mx-auto pt-6 lg:px-0 sm:pb-24 pb-12 px-4">
          <div className="flex justify-between md:flex-row flex-col lg:mb-32 md:md-20 mb-12">
            <div className="flex sm:items-center items-start text-gray-400">
              <Link to="/" className="flex items-center w-5 h-6">
                <img className="home-icon" src={Home} alt="Home" />
              </Link>
              <span className="mx-3">/</span>
              <Link to="/radar">Radar</Link>
              <span className="mx-3">/</span>
              <span>{data.title}</span>
            </div>
            <div className="flex items-center flex-wrap text-gray-400 md:mt-0 mt-3">
              <div className="flex items-center md:mb-0 mb-3">
                <img
                  className="w-4.5 h-4.5 mr-3"
                  src={Calendar}
                  alt="Calendar"
                />
                <Moment className="md:mr-6 mr-3" format="Do MMMM, YYYY">
                  {data.publish_date}
                </Moment>
              </div>
              <div className="flex items-center md:mb-0 mb-3">
                <img className="w-4.5 h-4.5 mr-3" src={Clock} alt="Clock" />
                <span>
                  Read time: {data.read_time}{" "}
                  {parseInt(data.read_time) === 1 ? "minute" : "minutes"}
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <h1 className=" text-black font-semibold mb-2 md:text-3xl text-2xl sm:text-center">
              {data.title}
            </h1>
            {/* Tagline */}
            <small className="block font-normal text-gray-500 sm:text-center sm:text-xl text-base">
              {data.tagline}
            </small>
            <div
              ref={bodyText}
              className="mt-6 md:pr-0 pr-8 prose mx-auto"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogText;
