import GradientLine from "@components/Shared/GradientLine";
import PageLink from "@components/Shared/PageLink";
// import Button from "../Shared/Button";

const LegalSidebarContent: React.FC<{ route: string }> = ({ route }) => {
  const NUMBER_OF_DOCS = 3;
  const documentLinks = [
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Terms of Use", link: "/terms-of-use" },
    {
      text: "Participation Agreement",
      outgoingLink: "/documents/Participation Agreement.pdf",
    },
    { text: "Interfaces Disclaimer", link: "/interfaces-disclaimer" },
  ];

  const Heading: React.FC<{ title: string; className?: string }> = ({
    title,
    className,
  }): JSX.Element => (
    <>
      <span
        className={`mb-2 block text-xs tracking-[0.15em] text-tertiary ${
          className ? className : ""
        }`}
      >
        {title}
      </span>
      <GradientLine color="grey" />
    </>
  );

  const DocumentLink: React.FC<{
    text: string;
    link?: string;
    outgoingLink?: string;
    border?: boolean;
  }> = ({ text, link, outgoingLink, border }): JSX.Element => (
    <>
      <PageLink
        href={outgoingLink ? outgoingLink : link}
        newTab={!!outgoingLink && outgoingLink.length > 0}
      >
        <span className="my-2 block font-bold leading-[24px] text-action-active transition-colors duration-300 hover:text-tracer-lightblue">
          {text}
        </span>
      </PageLink>
      {border && <GradientLine color="grey" />}
    </>
  );

  const getCurrentPage = () => {
    const currentPage = documentLinks.filter((link) => link.link === route);
    if (currentPage[0]) {
      return (
        <DocumentLink text={currentPage[0].text} link={currentPage[0].link} />
      );
    }
  };

  const getOtherDocuments = () => {
    return documentLinks.filter((link) => link.link !== route);
  };

  return (
    <div className="p-4">
      <Heading title="CURRENT DOCUMENT" />
      {getCurrentPage()}
      <Heading title="OTHER DOCUMENTS" className="mt-6" />
      {getOtherDocuments().map((link, i) => (
        <DocumentLink
          key={i}
          text={link.text}
          link={link.link}
          outgoingLink={!!link.outgoingLink ? link.outgoingLink : undefined}
          border={i !== NUMBER_OF_DOCS - 1}
        />
      ))}
      {/* <Button lightBlueGradient link="" */}
    </div>
  );
};

export default LegalSidebarContent;
