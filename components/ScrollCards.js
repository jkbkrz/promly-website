"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import ScrollCard from "./ScrollCard"
import Lenis from '@studio-freight/lenis'
import AllPromotionsButton from "./AllPromotionsButotn"
import Link from "next/link"
import Image from "next/image"

const cards = [
    {
        // title: "Dress Well, Pay Less",
        title: <span className="leading-normal">Gdzie <span className="shadow-red-500 drop-shadow-xl">styl</span> spotyka <span className="text-red-500 px-4 rounded-full bg-red-100">oszczędności</span></span>,
        color: "bg-red-100",
        imageSource: "/discount.png",
        content: <span className="text-neutral-500 block max-w-xl">Z Promly uzyskujesz natychmiastowy dostęp do wszystkich najnowszych promocji z całej sieci</span>
    },
    {
        title: <span>Bądź przed wszystkimi</span>,
        color: "bg-orange-100",
        imageSource: "/explorer-dynamic-colorx.png",
        content: <span className="text-neutral-500 block max-w-xl">Promly skanuje sklepy internetowe na bieżąco, więc nie ominą Cie żadne promocje</span>
    },
    {
        title: <span>Wyselekcjonowane produkty</span>,
        color: "bg-blue-100",
        imageSource: "/zoom-dynamic-color.png",
        content: <span className="text-neutral-500 block max-w-xl">Promly nie tylko gromadzi najnowsze okazje, ale także dba o to, aby prezentowane promocje były najwyższej jakości</span>

    },
    {
        title: <span>Nie przegapisz żadnej promocji</span>,
        color: "bg-amber-100",
        imageSource: "/megaphone-dynamic-color.png",
        content: <span className="text-neutral-500 block max-w-xl">Pobierając aplikację mobilną zostaniesz poinformowany o ciekawych nowościach</span>

    },
    {
        title: <span>Pobierz aplikację już dziś</span>,
        color: "bg-neutral-100",
        imageSource: "/trophy-dynamic-color.png",
        content: (
            <>
                <div className="flex flex-row flex-nowrap justify-center gap-x-1.5 items-center">
                    <Link href="/app?referrer=website" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Download App</span>
                        <Image
                            src="/appstore.webp"
                            alt="App Store Badge"
                            height={0}
                            width={100}
                            style={{ height: '43px', width: "auto" }}
                            priority
                        />
                    </Link>
                    <Link href="/app?referrer=website" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Download App</span>
                        <Image
                            src="/googleplay.webp"
                            alt="App Store Badge"
                            height={0}
                            width={100}
                            style={{ height: '43px', width: "auto" }}
                            priority
                        />
                    </Link>
                </div>
            </>
        )
    }
]

export default function ScrollCards() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className="mt-24">
            {cards.map((card, index) => {
                const targetScale = 1 - ((cards.length - index) * 0.05)
                return <ScrollCard key={card.title + index} {...card} i={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />

            }
            )}
        </div>
    )
}