import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewPasswordForm from "./NewPasswordForm";
import { LockOpen } from "lucide-react";

export default function NewPasswordCard({ setIsSuccess }: { setIsSuccess: (value: boolean) => void }) {
  return (
    <Card className="w-full max-w-[327px] sm:max-w-[440px] p-10">
      <CardHeader className="p-0 mb-10 flex flex-row items-center gap-4">
        <div className="rounded-full p-3 bg-amber-50 text-amber-400">
          <LockOpen className="size-5" />
        </div>
        <div>
          <CardTitle className="text-xl font-extrabold text-neutral-800">Create New Password</CardTitle>
          <CardDescription>Enter a new password for login your account</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <NewPasswordForm setIsSuccess={setIsSuccess} />
      </CardContent>
    </Card>
  )
}