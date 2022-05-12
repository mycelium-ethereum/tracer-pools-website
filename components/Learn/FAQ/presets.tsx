import PageLink from "@components/Shared/PageLink";
const paragraphStyles = "mb-4 mt-2 text-sm text-tertiary";

export const faqQuestions = [
  {
    question: "Are Perpetual Pools Different from Perpetual Swaps?",
    answer: (
      <p className={paragraphStyles}>
        Yes. Perpetual Pools are a marketplace for leveraged tokens, while
        perpetual swaps simulate spot trading with margin.They are both
        derivatives, but, unlike perpetual swaps, you don’t need an account with
        an exchange to trade Perpetual Pool tokens. That’s because the tokens
        act most like a leveraged ETF, where positions are transferable. Read
        more{" "}
        <a
          href="https://docs.tracer.finance/tracer-faqs/perpetual-pools-faqs#how-are-perpetual-pools-different-from-perpetual-swaps"
          target="_blank"
          className="text-blue-400 underline"
          id="faq-perp-pools"
        >
          here
        </a>
        .
      </p>
    ),
  },
  {
    question: "How do I use Perpertual Pools on Arbitrum?",
    answer: (
      <p className={paragraphStyles}>
        To use Perpetual Pools, you’ll need to be on a network called Arbitrum.
        Arbitrum is an Ethereum L2, which means it has the security of the
        Ethereum blockchain but is cheaper and faster to use. Once you’re
        connected, minting leveraged tokens is a breeze. Check out our{" "}
        <PageLink
          href="/radar/bridging-to-arbitrum/"
          className="text-blue-400 underline"
          // id = "faq-arbitrum-guide"
        >
          Arbitrum guide
        </PageLink>{" "}
        to get setup.
      </p>
    ),
  },
  {
    question: "How Does Leveraged Trading Work?",
    answer: (
      <p className={paragraphStyles}>
        Normally, to trade with leverage you need to borrow money. Borrowing
        lets you take on a bigger position than you could get with your initial
        capital, so, once the debt is paid off, any profits or losses you make
        are amplified. With Tracer, you can get leveraged exposure without
        borrowing or worrying about margin calls and liquidations. Read more
        about Tracer’s Power Leverage{" "}
        <a
          href="https://docs.tracer.finance/market-types/perpetual-pools/mechanism-design"
          target="_blank"
          className="text-blue-400 underline"
          id="faq-power-leverage"
        >
          here
        </a>
        .
      </p>
    ),
  },
];
