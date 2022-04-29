import GradientLine from "@/components/Shared/GradientLine";

const AssetHeading: React.FC<{
  heading: string;
  subheading: string | React.ReactNode;
}> = ({ heading, subheading }) => (
  <div className="mb-4 w-1/2">
    <h2 className="pb-2 text-sm uppercase leading-[14px] tracking-[0.15em] text-highlight">
      {heading}
    </h2>
    <GradientLine color="lightblue" />
    <span className="mt-2 block text-sm leading-[20px] text-tertiary">
      {subheading}
    </span>
  </div>
);

export default AssetHeading;
