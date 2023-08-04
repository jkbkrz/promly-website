import Hero from "@/components/Hero";
import HomeAccordion from "@/components/HomeAccordion";
import HomeSearch from "@/components/HomeSearch";
import ImagesMarquee from "@/components/ImagesMarquee";

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-3">
        <Hero />
        <HomeSearch />
        <div className="text-center fllex items-center mt-4">
          <a className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
            Przeglądaj wszystkie okazje
            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <ImagesMarquee />
        {/* <HomeAccordion /> */}
        <div className="h-16" />
      </main>
    </>

  )
}
