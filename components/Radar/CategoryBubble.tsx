import { capitaliseFirstLetter } from "lib/helpers";

const CategoryBubble: React.FC<{
  category: string;
  large?: boolean;
  className?: string;
}> = ({ category, large, className }) => {
  return (
    <span
      className={`flex w-max items-center justify-center transition-colors duration-300 ${
        large
          ? "mr-2 h-10 rounded-lg py-2.5 px-[13px] text-sm"
          : "mt-4 h-6 rounded-md px-2 py-0.5 text-xs"
      } ${className ? className : "bg-action-cell text-action-active"}`}
    >
      {capitaliseFirstLetter(category)}
    </span>
  );
};

export default CategoryBubble;
