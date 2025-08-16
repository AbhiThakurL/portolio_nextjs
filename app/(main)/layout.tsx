import { Navbar } from "./header/header"
import Footer from "./footer/footer"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className="min-h-screen bg-[#0b0217] text-white antialiased bg-gradient-to-br from-[#0b0717] via-[#120a24] to-[#0b0717]">

        {/* Navbar  */}
        <Navbar/>

        <main className="relative z-10">{children}</main>

        <div className="fixed inset-0 -z-10 bg-[#0b0217]">
          <div className="absolute inset-0 bg-gradient-radial from-purple-800/30 via-transparent to-transparent blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]"></div>
        </div>

        <Footer/>

      </div>
  )
}
