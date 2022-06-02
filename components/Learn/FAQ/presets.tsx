import PageLink from "@components/Shared/PageLink";
const paragraphStyles = "mb-4 mt-2 text-sm text-tertiary";
const linkStyles =
  "text-tracer-lightblue underline hover:text-tracer-navy transition-colors duration-300";

export const faqQuestions = [
  // FAQ 1
  {
    question: "What Network is Perpetual Pools on?",
    answer: (
      <p className={paragraphStyles}>
        Perpetual Pools is native to Arbitrum. Arbitrum is an Ethereum L2, which
        means it has the security of the Ethereum blockchain but is cheaper and
        faster to use. Once you’re connected, minting leveraged tokens is a
        breeze. Check out our&nbsp;
        <PageLink href="/radar/bridging-to-arbitrum/" className={linkStyles}>
          Arbitrum guide
        </PageLink>
        &nbsp; to get setup.
      </p>
    ),
  },
  // FAQ 2
  {
    question: "What are Perpetual Pools?",
    answer: (
      <>
        <p className={paragraphStyles}>
          A Perpetual Pool market is basically a wager (or trade) between two
          groups of people who think something will either increase or decrease.
          The thing people are speculating might increase or decrease is
          typically the price of an asset like Bitcoin or Ethereum, but it can
          be anything - even the temperature.
        </p>
        <p className={paragraphStyles}>
          We call the <i>thing</i> that people are making trades on the
          <b>price feed</b>, and the price feed is supplied by an <b>oracle.</b>
        </p>
        <p className={paragraphStyles}>
          To learn more about Perpetual Pools,&nbsp;
          <PageLink
            href="/radar/tracer-perpetual-pools-eli5/"
            className={linkStyles}
          >
            read this explainer
          </PageLink>
          .
        </p>
      </>
    ),
  },
  // FAQ 3
  {
    question: "How Does Leveraged Trading Work?",
    answer: (
      <p className={paragraphStyles}>
        Normally, to trade with leverage you need to borrow money. Borrowing
        lets you take on a bigger position than you could get with your initial
        capital, so, once the debt is paid off, any profits or losses you make
        are amplified. With Tracer, you can get leveraged exposure without
        borrowing or worrying about margin calls and liquidations. Read more
        about Tracer’s Power Leveragee&nbsp;
        <a
          href="https://docs.tracer.finance/market-types/perpetual-pools/mechanism-design"
          target="_blank"
          className={linkStyles}
        >
          here
        </a>
        .
      </p>
    ),
  },
  // FAQ 4
  {
    question: "Are Perpetual Pools Different From Perpetual Swaps?",
    answer: (
      <p className={paragraphStyles}>
        Yes. Perpetual Pools are a marketplace for leveraged tokens, while
        perpetual swaps simulate spot trading with margin. They are both
        derivatives, but, unlike perpetual swaps, you don’t need an account with
        an exchange to trade Perpetual Pool tokens. That’s because the tokens
        act most like a leveraged ETF, where positions are transferable. Read
        more&nbsp;
        <a
          href="https://docs.tracer.finance/tracer-faqs/perpetual-pools-faqs#how-are-perpetual-pools-different-from-perpetual-swaps"
          target="_blank"
          className={linkStyles}
        >
          here
        </a>
        .
      </p>
    ),
  },
  // FAQ 5
  {
    question: "Are Tracer’s products secure to use?",
    answer: (
      <p className={paragraphStyles}>
        Yes. At Tracer, security is of the upmost importance. Find our extensive
        list of protocol audits&nbsp;
        <a
          href="https://docs.tracer.finance/tracer-faqs/perpetual-pools-faqs#how-are-perpetual-pools-different-from-perpetual-swaps"
          target="_blank"
          className={linkStyles}
        >
          here
        </a>
      </p>
    ),
  },
  // FAQ 6
  {
    question: "How are there no liquidations with Perpetual Pools?",
    answer: (
      <>
        <p className={paragraphStyles}>
          The way the Perpetual Pool market calculates how much money to move
          from the losers to the winners prevents the loser from ever losing
          100% of their money. The pool does this by, in extreme scenarios,
          sacrificing some of the gains of the winners in order to protect the
          losers from losing everything. This is why we say Perpetual Pool
          positions cannot be liquidated.
        </p>
        <p className={paragraphStyles}>
          However; this does not mean you cannot lose money by trading with
          Perpetual Pools.
        </p>
      </>
    ),
  },
];

export const faqSchemaData = [
  {
    question: "Are Perpetual Pools Different from Perpetual Swaps?",
    answer: `Perpetual Pools is native to Arbitrum. Arbitrum is an Ethereum L2, which
    means it has the security of the Ethereum blockchain but is cheaper and
    faster to use. Once you’re connected, minting leveraged tokens is a
    breeze. Check out our&nbsp;
    <a href="/radar/bridging-to-arbitrum/">
      Arbitrum guide
    </a>
    &nbsp; to get setup`,
  },
  {
    question: "How do I use Perpertual Pools on Arbitrum?",
    answer: `A Perpetual Pool market is basically a wager (or trade) between two
    groups of people who think something will either increase or decrease.
    The thing people are speculating might increase or decrease is typically
    the price of an asset like Bitcoin or Ethereum, but it can be anything -
    even the temperature.
    <br />
    We call the <i>thing</i> that people are making trades on the{" "}
    <b>price feed</b>, and the price feed is supplied by an <b>oracle.</b>
    <br />
    To learn more about Perpetual Pools,&nbsp;
    <a href="/radar/tracer-perpetual-pools-eli5/">read this explainer</a>.`,
  },
  {
    question: "How Does Leveraged Trading Work?",
    answer: `Normally, to trade with leverage you need to borrow money. Borrowing
    lets you take on a bigger position than you could get with your initial
    capital, so, once the debt is paid off, any profits or losses you make
    are amplified. With Tracer, you can get leveraged exposure without
    borrowing or worrying about margin calls and liquidations. Read more
    about Tracer’s Power Leveragee&nbsp;
    <a
      href="https://docs.tracer.finance/market-types/perpetual-pools/mechanism-design"
    >
      here
    </a>.`,
  },
  {
    question: "Are Perpetual Pools Different From Perpetual Swaps?",
    answer: `Yes. Perpetual Pools are a marketplace for leveraged tokens, while
    perpetual swaps simulate spot trading with margin. They are both
    derivatives, but, unlike perpetual swaps, you don’t need an account with
    an exchange to trade Perpetual Pool tokens. That’s because the tokens
    act most like a leveraged ETF, where positions are transferable. Read
    more&nbsp;
    <a
      href="https://docs.tracer.finance/tracer-faqs/perpetual-pools-faqs#how-are-perpetual-pools-different-from-perpetual-swaps"
    >
      here
    </a>.`,
  },
  {
    question: "Are Tracer’s products secure to use?",
    answer: `Yes. At Tracer, security is of the upmost importance. Find our extensive
    list of protocol audits&nbsp;
    <a
      href="https://docs.tracer.finance/tracer-faqs/perpetual-pools-faqs#how-are-perpetual-pools-different-from-perpetual-swaps"
    >
      here
    </a>`,
  },
  {
    question: "How are there no liquidations with Perpetual Pools?",
    answer: `The way the Perpetual Pool market calculates how much money to move
    from the losers to the winners prevents the loser from ever losing
    100% of their money. The pool does this by, in extreme scenarios,
    sacrificing some of the gains of the winners in order to protect the
    losers from losing everything. This is why we say Perpetual Pool
    positions cannot be liquidated.
    <br><br/>
    <br><br/>
    However; this does not mean you cannot lose money by trading with
    Perpetual Pools.`,
  },
];
