import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Manrope-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Manrope-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Manrope-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/Manrope-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Manrope-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/Manrope-ExtraLight.ttf",
      weight: "200",
    }
  ],
  variable: "--font-manrope",
})


export const metadata: Metadata = {
  title: "TexoAI",
  description: "Copywriting AI Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-manrope bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
