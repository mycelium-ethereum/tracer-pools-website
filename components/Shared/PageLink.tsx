import Link from "next/link";

const PageLink: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode | string;
}> = ({ href, className, children }) => {
  return (
    <Link href={href} scroll={false} passHref>
      <a className={className ? className : ""}>{children}</a>
    </Link>
  );
};

export default PageLink;
