import { CategoryType } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

export default function CategoryCardItem({ title, description, color, icon }: CategoryType) {
  return (
    <Card>
      <CardContent className="p-[25px] flex items-center gap-[15px]">
        <div className={cn("p-2 md:p-[10px] rounded-full", `bg-[#${color}]/60`)} style={{ backgroundColor: `rgba(${color ? color : "72, 139, 255"}, 0.2)`, color: `rgb(${color ? color : ""})` }}>{icon}</div>
        <div className="flex flex-col items-start gap-[10px]">
          <CardTitle className="text-sm md:text-base">{title}</CardTitle>
          <CardDescription className="text-xs md:text-[13px] line-clamp-1">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}