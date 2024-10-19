import { categoriesPopular } from "@/lib/constants";
import CategoryCard from "./CategoryCard";

export default function PopularCategory() {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <h5 className="text-base text-slate-800 font-bold">Popular Category</h5>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[30px]">
        {categoriesPopular.map((category) => (
          <CategoryCard key={category.color} title={category.title} description={category.description} color={category.color} >
            {category.icon}
          </CategoryCard>
        ))}
      </div>
    </div>
  );
}
