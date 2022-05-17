import PageLink from "@components/Shared/PageLink";
import GradientLine from "@components/Shared/GradientLine";

const MobileLink: React.FC<{
  link?: string;
  children: string;
  border: boolean;
  noHover?: boolean;
  nestedLink?: boolean;
  onClickAction: () => void;
}> = ({ children, link, border, noHover, nestedLink, onClickAction }) => {
  return (
    <PageLink
      href={link ? link : "#"}
      onClickAction={onClickAction}
      className={`group relative block px-4 ${nestedLink ? "" : "nav-link"}`}
    >
      <span className="relative z-10 block overflow-hidden py-4 text-[40px] font-light leading-[44px]">
        {children}
      </span>
      {!noHover && (
        <span className="absolute left-1/2 top-0 z-0 h-full w-[calc(100%+32px)] -translate-x-1/2 transition-colors duration-500 group-hover:bg-tracer-cyan" />
      )}
      {border && <GradientLine color="lightblue" />}
    </PageLink>
  );
};

export default MobileLink;
