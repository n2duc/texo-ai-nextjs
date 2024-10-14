"use client"

import { PasswordInput } from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { newPasswordSchema, NewPasswordValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function NewPasswordForm({ setIsSuccess }: { setIsSuccess: (value: boolean) => void }) {
  const form = useForm<NewPasswordValues>({
    resolver: zodResolver(newPasswordSchema)
  })

  function onSubmit(values: NewPasswordValues) {
    console.log(values);
    setIsSuccess(true);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex flex-col">
        <FormField 
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password *</FormLabel>
              <FormControl>
                <PasswordInput placeholder="New password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password *</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Confirm password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Confirm password</Button>
        <Link href="/" className="text-center text-xs font-bold text-amber-400">Resend Email</Link>
      </form>
    </Form>
  )
}