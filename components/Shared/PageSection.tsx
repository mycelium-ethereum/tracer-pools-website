const PageSection: React.FC<{
  className: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <section className={`relative ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default PageSection;
