import { Link } from "gatsby";
import React from "react";

const InterfacesDisclaimerText = ({}) => {
  return (
    <>
      <h1 className="mb-10 text-4xl font-semibold text-black">
        Tracer Interfaces Disclaimer
      </h1>
      <small className="mb-5 block text-base font-normal">
        Last updated: 7 March 2022
      </small>
      <p className="mb-4">
        Your use of a smart contract governed by Tracer DAO, including a Tracer
        Perpetual Pools or Tracer Perpetual Swaps contract and the Tracer
        Factory (“
        <b>
          <i>Tracer Suite</i>
        </b>
        ”), involves various risks, including, but not limited to, the risks
        outlined below. By interacting with the Tracer Suite, you accept those
        risks. If you choose to use the Tracer Suite, this Disclaimer applies in
        addition to Tracer’s Terms of Use, which are available{" "}
        <a
          href="/privacy-policy?page=1#terms-of-use"
          className="text-blue-400 underline"
        >
          here.
        </a>
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Price and Asset Risk
      </h2>
      <p className="mb-4">
        Asset losses are possible due to the fluctuation of prices of tokens.
        You acknowledge that financial contracts involving cryptocurrencies are
        inherently risky, some cryptocurrencies are not recognised legal tender
        in some countries, are unregulated by many central and government
        authorities, and may be subject to extreme price volatility. You warrant
        that you understand the risks associated with transactions,
        cryptocurrencies, financial contracts and any other goods, services or
        products in connection to the Tracer protocol. Before using the Tracer
        protocol, you should review the relevant documentation to make sure you
        understand how the Tracer protocol works.
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Liquidation Risk
      </h2>
      <p className="mb-4">
        When interacting with the Tracer Suite, your positions may be subject to
        liquidation risk. Despite having well defined liquidation penalties,
        your loss could be 100% of your position. This risk is not only
        theoretical, during the so-called “Black Thursday”, around $8M of user’s
        positions in MakerDAO was lost.{" "}
        <b>
          The Tracer Suite is non-custodial, and therefore can not help users to
          avoid liquidations, or recover funds following liquidation.
        </b>
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Oracle Risk
      </h2>
      <p className="mb-4">
        Tracer DAO relies on oracles to provide spot price data for assets. This
        price data is used as part of the mint and burn functions (for Perpetual
        Pools) and liquidation flow (for Perpetual Swaps) and, as a result, has
        inherent risks. Should oracle prices not be updated, or should they be
        updated erroneously, there is risk a user may suffer loss, or be
        liquidated, unexpectedly. Currently, the Tracer Suite uses Chainlink’s
        oracle network; this may be subject to change.
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Smart Contract and Software Risk
      </h2>
      <p className="mb-4">
        The Tracer Suite has been audited (Perpetual Pools by Sigma Prima and
        Perpetual Swaps by Sigma Prime and Code 423n4). The contracts were
        checked for correctness of functionality and safety of user funds.
        However, an audit does not eliminate the risk of an exploit or bug being
        present in the Tracer protocol. You must do your own research before
        interacting with the Tracer protocol, and only supply funds that you are
        prepared to lose.
      </p>

      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Contract Upgrade Risk
      </h2>
      <p className="mb-4">
        Contract upgrades may be implemented by Tracer DAO, via proposal, to the
        Tracer Suite. While these upgrades will likely be audited prior to
        implementation, the Tracer Suite’s codebase is subject to change and, as
        such, risks of exploits and bugs are present. You must remain aware of
        updates being implemented by Tracer DAO to the Tracer Suite, and ensure
        that, following any update, the Tracer Suite is safe to use.
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Governance Risk
      </h2>
      <p className="mb-4">
        Tracer DAO owns and controls the Tracer Suite. Upgrades and
        modifications to the protocol are managed in a decentralised manner by
        holders of TCR governance tokens. No entity involved in creating the
        Tracer Suite (including developers) will be liable for any claims or
        damage whatsoever associated with your use, inability to use, direct,
        indirect, incidental, special, exemplary, punitive or consequential
        damages, or loss of profits, cryptocurrencies, tokens, or anything else
        of value. For the avoidance of doubt, Tracer DAO does not control user
        funds.
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Developer Must Comply with Applicable Laws
      </h2>
      <p className="mb-4">
        Tracer DAO is not responsible for the actions of Tracer Suite users.
        Users of Tracer Suite are solely responsible for ensuring compliance
        with the laws of their specific jurisdiction. Tracer DAO are curators of
        the Tracer Suite and maintain no liability for the repercussions,
        actions and consequences of material created using the Tracer Suite.
      </p>
      <h2 className="mb-4 mt-8 text-xl font-semibold text-black">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        TRACER DAO, ITS AFFILIATES, THEIR RESPECTIVE OFFICERS, DIRECTORS,
        EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS MAKE NO WARRANTIES OR
        REPRESENTATIONS ABOUT THE TRACER SUITE, ITS CONTENTS, OR ANY CREATION OR
        ANY DERIVATIVE OF THE TRACER FACTORY INCLUDING BUT NOT LIMITED TO, ITS
        ACCURACY, RELIABILITY, FUNCTIONALITY, COMPLETENESS, OR TIMELINESS. ANY
        CREATION BY A USER OF THE TRACER SUITE IS NOT THE RESPONSIBILITY OF
        TRACER DAO AND THE USER INDEMNIFIES TRACER DAO AGAINST ANY AND ALL
        CLAIMS THAT MAY ARISE OUT OF USING THE TRACER SUITE. USERS ACKNOWLEDGE
        AND AGREE THAT THEY TAKE SOLE RESPONSIBILITY FOR CREATIONS OR WORKS OF
        THE TRACER SUITE AND ACKNOWLEDGE THAT THEY USE THE TRACER SUITE AT THEIR
        OWN RISK.
      </p>
      <p className="mb-4">
        Discussions with updated information on the Tracer protocol’s governance
        can be found in{" "}
        <a
          href="https://discourse.tracer.finance/"
          target="_blank"
          className="text-blue-400 underline"
        >
          Tracer DAO's Discourse
        </a>
        .
      </p>
    </>
  );
};

export default InterfacesDisclaimerText;
