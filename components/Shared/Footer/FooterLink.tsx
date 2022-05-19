import PageLink from "@components/Shared/PageLink";

const FooterLink: React.FC<{
  route: string;
  content: {
    text: string;
    url: string;
  };
}> = ({ route, content }) => {
  const URL = content.url;
  return (
    <>
      {/* If outgoing URL */}
      {URL.includes("https") && URL !== "" && (
        <a
          href={URL}
          target="_blank"
          className="mb-2.5 transition-colors duration-300 hover:text-blue-400"
        >
          {content.text}
        </a>
      )}
      {/* If local URL */}
      {!URL.includes("https") && URL !== "" && (
        <PageLink
          href={URL}
          className="mb-2.5 transition-colors duration-300 hover:text-blue-400"
        >
          {content.text}
        </PageLink>
      )}
      {/* If no URL (coming soon) */}
      {URL === "" && (
        <div className="mb-2.5 flex cursor-default items-center">
          <span className="transition-colors duration-300 hover:text-blue-400">
            {content.text}
          </span>
          <span
            className={`ml-2.5 flex h-[14px] w-[38px] items-center justify-center rounded-lg text-[8px] font-bold ${
              route === "/" ? "bg-tracer-primaryblue" : "bg-action-inactive"
            }`}
          >
            SOON
          </span>
        </div>
      )}
    </>
  );
};

export default FooterLink;
