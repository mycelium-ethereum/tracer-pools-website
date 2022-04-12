const PageSection: React.FC<{
  className?: string;
  id?: string;
  children: React.ReactNode;
}> = ({ className, id, children }) => {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

export default PageSection;
