/* eslint-disable */
import React, { useEffect, useState } from "react";
import Dropdown from "../../static/img/general/chevron-down.svg";
import { Link } from "gatsby";
// Litepaper
import PoolsPDF from "../../static/img/learn/pools/perpetual-pools.pdf";

const PrivacyText = () => {
  const [protocolDropdownOpen, setProtocolDropdownOpen] = useState(false);
  const [websiteDropdownOpen, setWebsiteDropdownOpen] = useState(false);
  const isMobile = () => {
    const width = window.innerWidth;
    return width < 1024;
  };
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (isMobile()) {
        setProtocolDropdownOpen(false);
        setWebsiteDropdownOpen(false);
      }
    });
  }, []);
  return (
    <>
      <section className="h-full w-full z-20 relative mt-16 bg-white">
        <div className="container relative w-full mx-auto pt-6 pb-6 lg:px-0 px-4 md:grid block grid-cols-12">
          <aside className="md:w-60 w-full h-auto col-span-1">
            <button
              className="relative md:hidden inline-flex mr-4 justify-start items-center text-base font-semibold w-28 h-11 rounded-xl bg-gray-50 pl-4"
              onClick={() => {
                setProtocolDropdownOpen((wasOpen) => !wasOpen);
                setWebsiteDropdownOpen(false);
              }}
            >
              Protocol
              <img
                className="absolute top-1/2 transform -translate-y-1/2 right-2 w-4 h-auto"
                src={Dropdown}
                alt="Dropdown toggle"
              />
            </button>
            <button
              className="relative md:hidden inline-flex justify-start items-center text-base font-semibold w-28 h-11 rounded-xl bg-gray-50 pl-4"
              onClick={() => {
                setWebsiteDropdownOpen((wasOpen) => !wasOpen);
                setProtocolDropdownOpen(false);
              }}
            >
              Website
              <img
                className="absolute top-1/2 transform -translate-y-1/2 right-2 w-4 h-auto"
                src={Dropdown}
                alt="Dropdown toggle"
              />
            </button>
            <div
              className={
                "md:static md:block absolute top-18 md:rounded-none md:p-0 md:shadow-none shadow p-4 rounded-xl md:bg-transparent bg-white " +
                (protocolDropdownOpen ? "block" : "hidden")
              }
            >
              <span className="text-3xl font-semibold md:block hidden">
                Protocol
              </span>
              <ul className="md:mt-2 md:pl-4">
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">
                  <a className="text-gray-500" href="#">
                    Disclaimer
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500" href="#">
                    Terms of Use
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500" href="#">
                    Participation Agreement
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                "mt-12 md:static md:block absolute left-36 top-5 md:rounded-none md:p-0 md:shadow-none shadow p-4 rounded-xl md:bg-transparent bg-white " +
                (websiteDropdownOpen ? "block" : "hidden")
              }
            >
              <span className="text-3xl font-semibold md:block hidden">
                Website
              </span>
              <ul className="md:mt-2 md:pl-4">
                <li className="mb-2">
                  <a href={PoolsPDF} className="text-gray-500" download>
                    Litepaper
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-gray-500"
                    href="https://app.gitbook.com/login/tracer-1/pool-swaps"
                  >
                    Documentation (Gitbook)
                  </a>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-500" to="/radar/sigma-prime-audit">
                    Security Audit
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <div
            className="lg:col-start-4 lg:col-span-9 md:col-start-5 md:col-span-8 md:pr-0 pr-9 text-gray-500 md:mt-0 mt-4"
            onClick={() => {
              setProtocolDropdownOpen(false);
              setWebsiteDropdownOpen(false);
            }}
          >
            <h1 className="text-black text-4xl mb-4 font-semibold">
              Privacy Policy
            </h1>
            <p className="mb-4">
              In this Privacy Policy, ‘us’ ‘we’ or ‘our’ means Tracer DAO. We
              are committed to respecting your privacy. Our Privacy Policy sets
              out how we collect, use, store and disclose your personal
              information.
            </p>
            <p className="mb-4">
              This Privacy Policy applies to our services, which include the
              services we provide on https://tracer.finance/ or any other
              websites, pages, features, or content we own or operate or when
              you use related services. If you do not agree with the terms of
              this Privacy Policy, do not access or use the services, websites,
              or any other aspect of our business.
            </p>
            <p className="mb-4">
              By providing personal information to us, you consent to our
              collection, use and disclosure of your personal information in
              accordance with this Privacy Policy and any other arrangements
              that apply between us. We may change our Privacy Policy from time
              to time by publishing changes to it on our website. We encourage
              you to check our website periodically to ensure that you are aware
              of our current Privacy Policy.
            </p>
            <p className="mb-4">
              Personal information includes information or an opinion about an
              individual that is reasonably identifiable.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>How do we collect personal information?</b>
            </p>
            <p className="mb-4">
              We may collect these types of personal information either directly
              from you, or from third parties. We may collect this information
              when you:
            </p>
            <ul className="list-disc list-outside pl-4 mb-4">
              <li>register on our website or app;</li>
              <li>
                communicate with us through correspondence, chats, email, or
                when you share information with us from other social
                applications, services or websites; or
              </li>
              <li>
                interact with our sites, services, content and advertising.
              </li>
            </ul>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Why do we collect, use and disclose personal information?</b>
            </p>
            <p className="mb-4">
              We may collect, hold, use and disclose your personal information
              for the following purposes:
            </p>
            <ul className="list-disc list-outside pl-4 mb-4">
              <li>
                to enable you to access and use our website, services and app;
              </li>

              <li>
                to operate, protect, improve and optimise our website, services
                and app, business and our users’ experience, such as to perform
                analytics, conduct research and for advertising and marketing;
              </li>
              <li>
                to send you service, support and administrative messages,
                reminders, technical notices, updates, security alerts, and
                information requested by you;
              </li>

              <li>
                to send you marketing and promotional messages and other
                information that may be of interest to you, including
                information sent by, or on behalf of, our business partners that
                we think you may find interesting;
              </li>
              <li>
                to administer rewards, surveys, contests, or other promotional
                activities or events sponsored or managed by us or our business
                partners;
              </li>
              <li>
                to comply with our legal obligations, resolve any disputes that
                we may have with any of our users, and enforce our agreements
                with third parties; and to consider your employment application.
              </li>
            </ul>
            <p className="mb-4">
              We may also disclose your personal information to a trusted third
              party who also holds other information about you. This third party
              may combine that information in order to enable it and us to
              develop anonymised consumer insights so that we can better
              understand your preferences and interests, personalise your
              experience and enhance the products and services that you receive.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Using our website and cookies</b>
            </p>
            <p className="mb-4">
              We may collect personal information about you when you use and
              access our website.
              <br /> While we do not use browsing information to identify you
              personally, we may record certain information about your use of
              our website, such as which pages you visit, the time and date of
              your visit and the internet protocol address assigned to your
              computer.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Integrated third party services</b>
            </p>
            <p className="mb-4">
              Various third party services are integrated with our website,
              including MetaMask. Unless expressly stated otherwise, we are not
              responsible for the privacy practices of integrated third party
              services, and have no control over or rights in those linked
              services. The privacy policies that apply to integrated third
              party services may differ substantially from our Privacy Policy,
              so we encourage individuals to read them before using those
              services.
            </p>

            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Accessing or correcting your personal information</b>
            </p>
            <p className="mb-4">
              You can access the personal information we hold about you by
              contacting us at hello@tracer.finance. Sometimes, we may not be
              able to provide you with access to all of your personal
              information and, where this is the case, we will tell you why. We
              may also need to verify your identity when you request your
              personal information. If you think that any personal information
              we hold about you is inaccurate, please contact us and we will
              take reasonable steps to ensure that it is corrected.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Contact Us</b>
            </p>
            <p className="mb-4">
              For further information about our Privacy Policy or practices, or
              to access or correct your personal information, or make a
              complaint, please contact us at
              <a href="mailto:hello@tracer.finance">hello@tracer.finance</a>.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>What personal information do we collect?</b>
            </p>
            <p className="mb-4">
              For further information about our Privacy Policy or practices, or
              to access or correct your personal information, or make a
              complaint, please contact us at
              <a href="mailto:hello@tracer.finance">hello@tracer.finance</a>.
            </p>
            <p className="mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-outside pl-4 mb-4">
              <li>contact information, such as your email address;</li>
              <li>
                transactional information, such as information about the
                transactions you make on our services, such as the type, time or
                amount of a transaction;
              </li>
              <li>
                correspondence, such as your feedback or questionnaire and other
                survey responses;
              </li>
              <li>
                online identifiers, such as your blockchain address, device ID,
                device type, geo-location information, computer and connection
                information, statistics on page views, traffic to and from the
                sites, ad data, IP address and standard web log information;
              </li>

              <li>
                usage data, such as user preferences and other data collected
                via cookies and similar technologies;
              </li>

              <li>
                details of the products and services we have provided to you or
                that you have enquired about, including any additional
                information necessary to deliver those products and services and
                respond to your enquiries;
              </li>

              <li>
                any additional information relating to you that you provide to
                us directly through our website or app or indirectly through
                your use of our website or app or online presence or through
                other websites or accounts from which you permit us to collect
                information; or
              </li>

              <li>
                any other personal information that may be required in order to
                facilitate your dealings with us.
              </li>
            </ul>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Do we use your personal information for direct marketing?</b>
            </p>
            <p className="mb-4">
              We and/or our carefully selected business partners may send you
              direct marketing communications and information about our service
              and products. This may take the form of emails, Discord messages,
              or other forms of communication, in accordance with the OECD
              Guidelines on the Protection of Privacy and Transborder Flows of
              Personal Data. You may opt-out of receiving marketing materials
              from us by contacting us using the details set out below or by
              using the opt-out facilities provided (eg an unsubscribe link).
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>To whom do we disclose your personal information?</b>
            </p>
            <p className="mb-4">
              We may disclose personal information for the purposes described in
              this privacy policy to:
            </p>
            <ul className="list-disc list-outside pl-4 mb-4">
              <li>
                third party suppliers and service providers (including providers
                for the operation of our websites and/or our business or in
                connection with providing our products and services to you);
              </li>
              <li>
                our existing or potential agents, business partners or partners;
              </li>
              <li>
                our sponsors or promoters of any competition that we conduct via
                our services;
              </li>
              <li>
                anyone to whom our assets or businesses (or any part of them)
                are transferred;
              </li>
              <li>
                specific third parties authorised by you to receive information
                held by us; and/or
              </li>
              <li>
                other persons, including government agencies, regulatory bodies
                and law enforcement agencies, or as required, authorised or
                permitted by law.
              </li>
            </ul>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Disclosure of personal information</b>
            </p>
            <p className="mb-4">
              When you provide your personal information to us, you consent to
              the disclosure of your information globally. We will, however,
              take reasonable steps to ensure that any overseas recipient will
              deal with such personal information in a way that is consistent
              with the OECD Guidelines on the Protection of Privacy and
              Transborder Flows of Personal Data.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Security</b>
            </p>
            <p className="mb-4">
              We may hold your personal information in either electronic or hard
              copy form. We take reasonable steps to protect your personal
              information from misuse, interference and loss, as well as
              unauthorised access, modification or disclosure and we use a
              number of physical, administrative, personnel and technical
              measures to protect your personal information. However, we cannot
              guarantee the security of your personal information.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Links</b>
            </p>
            <p className="mb-4">
              Our website may contain links to websites operated by third
              parties. Those links are provided for convenience and may not
              remain current or be maintained. Unless expressly stated
              otherwise, we are not responsible for the privacy practices of, or
              any content on, those linked websites, and have no control over or
              rights in those linked websites. The privacy policies that apply
              to those other websites may differ substantially from our Privacy
              Policy, so we encourage individuals to read them before using
              those websites.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Making a complaint</b>
            </p>
            <p className="mb-4">
              If you think we have breached the OECD Guidelines on the
              Protection of Privacy and Transborder Flows of Personal Data, or
              you wish to make a complaint about the way we have handled your
              personal information, you can contact us at hello@tracer.finance.
              Please include your name or Discord username and clearly describe
              your complaint. We will acknowledge your complaint and respond to
              you regarding your complaint within a reasonable period of time.
              If you think that we have failed to resolve the complaint
              satisfactorily, we will provide you with information about the
              further steps you can take.
            </p>
            <p className="mb-4 mt-8 font-semibold text-black text-lg">
              <b>Effective</b>
            </p>
            <p className="mb-4">23 April, 2021</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyText;
