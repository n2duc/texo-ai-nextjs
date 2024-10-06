import { Separator } from "./ui/separator";

export default function TextSeparator() {
  return (
    <div className="relative flex items-center w-full">
      <Separator className="flex-grow" />
      <span className="text-[13px] font-medium text-muted-foreground px-3 bg-background absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Or continue with
      </span>
    </div>
  )
}