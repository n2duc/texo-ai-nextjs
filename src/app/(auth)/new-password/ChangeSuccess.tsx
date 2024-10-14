import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import CelebSvg from "@/assets/svg/Illustrations.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ChangeSuccess() {
  return (
    <Card className="w-full max-w-[327px] sm:max-w-[480px] py-10 px-[60px] flex flex-col items-center">
      <CardHeader>
        <Image src={CelebSvg} alt="SVG" width={156} height={140} className="w-[126px] h-[114px] md:w-[156px] md:h-[140px]" />
      </CardHeader>
      <CardContent className="text-center p-0 mb-[25px]">
        <CardTitle className="text-base md:text-xl">Password change success</CardTitle>
        <CardDescription className="text-xs md:text-[13px]">Your new password has been successfully saved</CardDescription>
      </CardContent>
      <CardFooter className="w-full p-0">
        <Link href="/login" className="block w-full">
          <Button className="w-full">Login in</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}