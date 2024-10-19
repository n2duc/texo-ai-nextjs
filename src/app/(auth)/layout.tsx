import Logo from "@/components/Logo";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full flex items-center justify-center bg-neutral-50">
      <div className="flex items-center justify-center w-full sm:max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto h-screen relative">
        <Logo className="absolute" />
        {children}
      </div>
    </main>
  )
}