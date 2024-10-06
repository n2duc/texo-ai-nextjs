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
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-[327px] sm:max-w-md px-5 py-[30px] sm:p-6 sm:py-8 md:p-10">
      <CardHeader className="p-0 pb-[30px]">
        <CardTitle>Welcome Back 👏</CardTitle>
        <CardDescription>Have we meet before?</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <GoogleButton className="mb-[30px]">Sign in with Google</GoogleButton>
        <TextSeparator />
        <LoginForm />
      </CardContent>
      <CardFooter className="p-0 mt-5 text-center">
        <Link href="/register" className="w-full block text-center text-[13px] font-semibold text-muted-foreground">
          Already have an account? <span className="text-primary font-bold">Sign In</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
