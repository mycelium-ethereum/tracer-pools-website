import Link from "next/link";

const PageLink: React.FC<{
  href: string;
  newTab?: boolean;
  className?: string;
  children: React.ReactNode | string;
}> = ({ href, newTab, className, children }) => {
  return (
    <Link href={href} scroll={false} passHref>
      <a
        className={className ? className : ""}
        target={newTab ? "_blank" : null}
        rel={newTab ? "noreferrer noopener" : null}
      >
        {children}
      </a>
    </Link>
  );
};

export default PageLink;
