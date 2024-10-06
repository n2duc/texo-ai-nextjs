import Image from "next/image";
import Logo from "@/assets/logo/Logo.svg";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full flex items-center justify-center bg-neutral-50">
      <div className="flex items-center justify-center w-full sm:max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto h-screen relative">
        <div className="hidden sm:flex items-center gap-[10px] absolute top-10 left-4">
          <Image src={Logo} alt="Logo" width={30} height={30} />
          <span className="text-lg font-extrabold tracking-[0.36px] text-primary">TexoAI</span>
        </div>
        {children}
      </div>
    </main>
  )
}