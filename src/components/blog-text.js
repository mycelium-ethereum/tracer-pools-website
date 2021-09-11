/* eslint-disable */
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
  useEffect(() => {
    const bodyTextHTML = marked(DOMPurify.sanitize(data.body_text));
    bodyText.current.innerHTML = bodyTextHTML;
  }, []);
  return (
    <>
      <section className="h-full w-full z-20 relative mt-16 bg-white">
        <div className="container relative w-full mx-auto pt-6 pb-6 lg:px-0 px-4">
          <div className="flex justify-between md:flex-row flex-col md:mb-32 mb-12">
            <div className="flex items-center text-gray-400">
              <Link to="/">
                <img className="w-4.5 h-4.5" src={Home} />
              </Link>
              <span className="mx-3">/</span>
              <Link to="/radar">Radar</Link>
              <span className="mx-3">/</span>
              <span>{data.title}</span>
            </div>
            <div className="flex items-center flex-wrap text-gray-400 md:mt-0 mt-3">
              <div className="flex items-center md:mb-0 mb-3">
                <img className="w-4.5 h-4.5 mr-3" src={Calendar} />
                <Moment className="md:mr-6 mr-3" format="Do MMMM, YYYY">
                  {data.publish_date}
                </Moment>
              </div>
              <div className="flex items-center md:mb-0 mb-3">
                <img className="w-4.5 h-4.5 mr-3" src={Clock} />
                <span>Read time: {data.read_time} minutes</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className=" text-black font-semibold mb-2 md:text-3xl text-2xl sm:text-center">
              {data.title}
            </h1>
            {/* Tagline */}
            <small className="block font-normal text-gray-500 sm:text-center sm:text-xl text-base">
              {data.tagline}
            </small>
            <div ref={bodyText} className="mt-12">
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogText;
