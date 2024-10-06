import GoogleButton from "@/components/GoogleButton";
import TextSeparator from "@/components/TextSeparator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-[327px] sm:max-w-md px-5 py-[30px] sm:p-6 sm:py-8 md:p-10">
      <CardHeader className="p-0 pb-[30px]">
        <CardTitle>Start for free Today  👏</CardTitle>
        <CardDescription>Access to all features. No credit card required.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <GoogleButton className="mb-[30px]">Sign up with Google</GoogleButton>
        <TextSeparator />
        <RegisterForm />
      </CardContent>
      <CardFooter className="p-0 mt-5 text-center">
        <Link href="/login" className="w-full block text-center text-[13px] font-semibold text-muted-foreground">
          Dont have an account? <span className="text-primary font-bold">Sign Up</span>
        </Link>
      </CardFooter>
    </Card>
  )
}