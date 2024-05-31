import { ProductBubbles } from "@/components/Bubbles";
import Hero from "@/components/Hero";
import ImagesMarquee from "@/components/ImagesMarquee";
import { MotionHero } from "@/components/MotionHero";
import { PlaceholdersAndVanishInput } from "@/components/PlaceholderVanishInput";
import ScrollCards from "@/components/ScrollCards";
import Search from "@/components/Search";
import { SearchBlocks } from "@/components/SearchBlocks";
import TagsCloud from "@/components/TagsCloud";
import { AuroraBackground } from "@/components/aurora-bg";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-3 flex justify-start items-center flex-col gap-1">

        <div className="h-24" />
        <MotionHero />

        <ProductBubbles />


        <SearchBlocks />

        <ScrollCards />


        {/* <PlaceholdersAndVanishInput placeholders={['nike air force 1', 'jordan', 'adidas', 'adidas gazelle']} /> */}

        {/* <ImagesMarquee /> */}
        {/* <Hero />
        <Search animate={true} /> */}
        {/* <ImagesMarquee /> */}
        {/* <ScrollCards /> */}
        <div className="h-16" />



      </main>
    </>

  )
}
