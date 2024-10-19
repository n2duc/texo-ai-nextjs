import Logo from "@/components/Logo";
import MainMenu from "./MainMenu";

export default function Header() {
  return (
    <header className="w-full py-3 px-[30px] sticky top-0 left-0 right-0 flex items-center bg-white justify-between">
      <Logo />
      <MainMenu />
    </header>
  )
}