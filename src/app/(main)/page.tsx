import Image from "next/image";
import PartyPopper from "@/assets/svg/party-popper.svg";
import TabMainContent from "@/components/dashboard/TabMainContent";

export default function RootPage() {
  return (
    <div className="container py:py-5 md:py-[50px]">
      {/* Headline */}
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex flex-col md:flex-row items-center gap-[10px]">
          <Image src={PartyPopper} alt="Party Popper" className="w-8 h-8 md:w-10 md:h-10" width={40} height={40} />
          <h2 className="text-base md:text-2xl text-slate-900 font-extrabold leading-6 md:leading-[45px] text-center">Mahfuzul, So, what exactly do you have in mind?</h2>
        </div>
        <p className="text-xs md:text-base leading-[18px] md:leading-6 text-center text-slate-800">Begin with selecting the content type from the options below.</p>
      </div>
      {/* Tabs Section */}
      <TabMainContent />
    </div>
  )
}