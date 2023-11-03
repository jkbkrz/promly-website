import Hero from "@/components/Hero";
import HomeAccordion from "@/components/HomeAccordion";
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
        {/* <HomeAccordion /> */}
        <div className="h-16" />
      </main>
    </>

  )
}
