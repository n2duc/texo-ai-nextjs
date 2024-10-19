import { CategoryCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const CategoryCard = ({
  title,
  description,
  color,
  children,
}: CategoryCardProps) => {
  return (
    <div
      className={cn(
        `w-full p-5 md:p-[25px] rounded-[10px] flex items-center gap-[15px]`
      )}
      style={{ backgroundColor: color }}
    >
      <div className="p-2 md:p-[10px] rounded-full bg-white">{children}</div>
      <div className="flex flex-col gap-[10px]">
        <h6 className="text-sm font-bold text-slate-800 md:text-base leading-normal">
          {title}
        </h6>
        <p className="text-xs md:text-[13px] font-medium leading-none text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
