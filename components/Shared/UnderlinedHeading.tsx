import GradientLine from "@components/Shared/GradientLine";

const UnderlinedHeading: React.FC<{
  lineColor: "blue" | "lightblue" | "purple" | "grey";
  hideBullet?: boolean;
  children: string;
  className?: string;
}> = ({ lineColor, hideBullet, children, className }) => {
  return (
    <div className={`${className} mb-4 text-sm uppercase`}>
      <div className="flex items-center pb-2">
        {!hideBullet && (
          <img
            src="/img/icons/bullet.svg"
            alt="Bullet"
            className="mr-2 h-2.5 w-2.5"
          />
        )}
        <span className="inline-block tracking-[0.15em]">{children}</span>
      </div>
      <GradientLine color={lineColor} />
    </div>
  );
};

export default UnderlinedHeading;
