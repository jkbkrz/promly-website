import Hero from "@/components/Hero";
import ImagesMarquee from "@/components/ImagesMarquee";
import Search from "@/components/Search";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-3">
        <Hero />
        <Search animate={true} />
        <ImagesMarquee />
        <div className="h-16" />
      </main>
    </>

  )
}
