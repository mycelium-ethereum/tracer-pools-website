import Link from "next/link";

const PageLink: React.FC<{
  href: string;
  children: React.ReactNode | string;
}> = ({ href, children }) => {
  return (
    <Link href={href} scroll={false} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default PageLink;
