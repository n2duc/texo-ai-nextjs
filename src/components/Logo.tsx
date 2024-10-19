import Image from "next/image";
import LogoIcon from "@/assets/logo/Logo.svg";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("hidden sm:flex items-center gap-[10px] top-10 left-4", className)}>
      <Image src={LogoIcon} alt="Logo" width={30} height={30} />
      <span className="text-lg font-extrabold tracking-[0.36px] text-primary">
        TexoAI
      </span>
    </div>
  );
}
