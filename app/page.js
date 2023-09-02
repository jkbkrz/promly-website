import AllPromotionsButton from "@/components/AllPromotionsButotn";
import Hero from "@/components/Hero";
import HomeAccordion from "@/components/HomeAccordion";
import HomeSearch from "@/components/HomeSearch";
import ImagesMarquee from "@/components/ImagesMarquee";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-3">
        <Hero />
        <HomeSearch />
        <AllPromotionsButton />

        <ImagesMarquee />
        {/* <HomeAccordion /> */}
        <div className="h-16" />
      </main>
    </>

  )
}
