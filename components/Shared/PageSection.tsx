const PageSection: React.FC<{
  className: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return <section className="relative">{children}</section>;
};

export default PageSection;
