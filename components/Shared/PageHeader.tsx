import MeshUnderlay from "./Mesh/MeshUnderlay";

const PageHeader: React.FC<{
  title: string;
  subheading: string;
  children?: React.ReactNode;
}> = ({ title, subheading, children }) => {
  return (
    <header className="pt-[139px] pb-[106px]">
      <h1 className="mb-1 text-[40px] font-bold leading-[48px] text-action-active">
        {title}
      </h1>
      <small className="text-lg font-light leading-[30px] text-tertiary">
        {subheading}
      </small>
      {children}
      <MeshUnderlay />
    </header>
  );
};

export default PageHeader;