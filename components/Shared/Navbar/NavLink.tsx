import PageLink from "@components/Shared/PageLink";

const NavLink: React.FC<{
  href: string;
  onClickAction?: () => void;
  children: string;
}> = ({ href, onClickAction, children }) => {
  return (
    <PageLink href={href}>
      <button onClick={onClickAction} className="mr-6 text-sm">
        {children}
      </button>
    </PageLink>
  );
};

export default NavLink;
