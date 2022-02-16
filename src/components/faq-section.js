import React from "react";
import { Link } from "gatsby";
// Components
import LearnHeader from "../components/learn-header";
import FAQQuestion from "../components/faq-question";
import OpenLinkIcon from "/static/img/learn/open-link.svg";
import Container from "../components/container";

const FAQSection = () => {
  const faqQuestions = [
    {
      question: "How do I use Perpertual Pools on Arbitrum?",
      answer: (
        <p className="mb-6">
          To use Perpetual Pools, you’ll need to be on a network called
          Arbitrum. Arbitrum is an Ethereum L2, which means it has the security
          of the Ethereum blockchain but is cheaper and faster to use. Once
          you’re connected, minting leveraged tokens is a breeze. Check out our{" "}
          <Link
            to="/radar/bridging-to-arbitrum/"
            className="text-blue-400 underline"
          >
            Arbitrum guide
          </Link>{" "}
          to get set-up.
        </p>
      ),
    },
    {
      question: "How Does Leveraged Trading Work?",
      answer: (
        <p className="mb-6">
          Normally, to trade with leverage you need to borrow money. Borrowing
          lets you take on a bigger position than you could get with your
          initial capital, so, once the debt is paid off, any profits or losses
          you make are amplified. With Tracer, you can get leveraged exposure
          without borrowing or worrying about margin calls and liquidations.
          Read more about Tracer’s Power Leverage{" "}
          <a
            href="https://docs.tracer.finance/market-types/perpetual-pools/mechanism-design"
            target="_blank"
            className="text-blue-400 underline"
          >
            here
          </a>
          .
        </p>
      ),
    },
    {
      question: "Are Perpetual Pools Different from Perpetual Swaps?",
      answer: (
        <p className="mb-6">
          Yes. Perpetual Pools are a marketplace for leveraged tokens, while
          perpetual swaps simulate spot trading with margin. They are both
          derivatives, but, unlike perpetual swaps, you don’t need an account
          with an exchange to trade Perpetual Pool tokens. That’s because the
          tokens act most like a leveraged ETF, where positions are
          transferable. Read more{" "}
          <a
            href="https://docs.tracer.finance/tracer-faqs/perpetual-pools-faqs#how-are-perpetual-pools-different-from-perpetual-swaps"
            target="_blank"
            className="text-blue-400 underline"
          >
            here
          </a>
          .
        </p>
      ),
    },
  ];
  return (
    <>
      <section className="relative z-10">
        <LearnHeader />
        <Container className="mb-12 lg:max-w-[900px]">
          {faqQuestions.map((content, i) => (
            <FAQQuestion key={i} content={content} />
          ))}
        </Container>
        <a
          href="https://docs.tracer.finance"
          target="_blank"
          className="mx-auto flex w-max text-white underline transition-colors duration-300 hover:text-blue-400"
        >
          Read more FAQs
          <img className="ml-3" src={OpenLinkIcon} />
        </a>
      </section>
    </>
  );
};

export default FAQSection;
