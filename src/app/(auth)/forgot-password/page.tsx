import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { LockOpen } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <Card className="w-full max-w-[327px] sm:max-w-[440px] p-10">
      <CardHeader className="p-0 mb-10 flex-row items-center gap-4">
        <div className="rounded-full p-3 bg-amber-50 text-amber-400">
          <LockOpen className="size-5" />
        </div>
        <div>
          <CardTitle className="text-xl font-extrabold text-neutral-800">Can’t log in?</CardTitle>
          <CardDescription>Restore access to your account</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  )
}