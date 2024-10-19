import Header from "./Header";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Header />
      {children}
    </div>
  )
}