import { Button } from "@/components/ui/button";
import { CircleDollarSign, GraduationCap, LayoutPanelLeft } from "lucide-react";
import AvatarPhoto from "@/assets/avatar.png";
import Image from "next/image";

export default function MainMenu() {
  return (
    <>
      <div className="flex text-neutral-500 items-center gap-[10px]">
        <Button variant="ghost" className="py-3 px-[10px] h-auto">
          <LayoutPanelLeft className="mr-[10px] w-5 h-5" /> All Projects
        </Button>
        <Button variant="ghost" className="py-3 px-[10px] h-auto">
          <GraduationCap className="mr-[10px] w-5 h-5" /> Learn
        </Button>
      </div>
      <div className="flex items-center gap-8">
        <Button className="py-3 px-[30px] h-auto font-bold" variant="secondary">Upgrade Plan</Button>
        <div className="flex items-center gap-[5px]">
          <CircleDollarSign className="w-5 h-5 text-orange-500" />
          <span className="text-neutral-500 text-[13px] font-medium">20/ left this week</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-[14px] font-extrabold text-slate-900">Mahfuzul Islam Nabil</span>
          <Image src={AvatarPhoto} alt="avatar" className="w-[42px] h-[42px]" width={42} height={42} />
        </div>
      </div>
    </>
  )
}