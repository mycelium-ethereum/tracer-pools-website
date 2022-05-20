import PageLink from "@components/Shared/PageLink";

const ParticipationAgreementText: React.FC<{
  containerRef: React.MutableRefObject<HTMLDivElement>;
}> = ({ containerRef }) => {
  return (
    <div ref={containerRef} className="legal-text">
      <small className="mb-5 block text-base font-normal">
        Last updated: December 2020
      </small>
      <h2>Background</h2>
      <ol>
        <li>
          <p>
            The Tracer DAO is a decentralised autonomous organisation for Tracer
            ("Tracer"), an open source, blockchain-based financial protocol.
          </p>
        </li>
        <li>
          <p>
            The Tracer DAO relies on an experimental Smart Contract framework to
            manage a decentralised autonomous organisations where no one party
            is in control.
          </p>
        </li>
        <li>
          <p>
            The technical development of the Tracer DAO and Tracer will be
            achieved via a Governance Mechanism (defined further below) and
            managed via a Governance Token.
          </p>
        </li>
        <li>
          <p>
            Governance Tokens may be acquired during the Governance Period only
            by persons with sufficient technical and legal expertise to
            contribute their industry knowledge to the further development of
            the trading protocol, and who do not act as Consumers. It is only
            intended for users of blockchain technology and smart contract based
            software systems and only intended to be provided to individuals or
            entities that intend to actively participate in the Tracer DAO
            experiments.
          </p>
        </li>
        <li>
          <p>
            Governance Tokens allow holders to participate in the Tracer System
            via its Governance Mechanism and have no ownership or economic
            rights of any kind. By accepting this Agreement, you are agreeing
            that Tracer DAO’s Governance Tokens are not being viewed by you as
            an investment or a speculative asset.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ParticipationAgreementText;
