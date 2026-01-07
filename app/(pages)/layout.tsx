import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:px-25 [@media(min-width:1700px)]:px-70">
        <Header />
      </div>

      {children}

      <div className="md:px-25 [@media(min-width:1700px)]:px-70">
        <Footer />
      </div>
    </>
  )
}
