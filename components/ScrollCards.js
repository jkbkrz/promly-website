"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import ScrollCard from "./ScrollCard"
import Lenis from '@studio-freight/lenis'
import AllPromotionsButton from "./AllPromotionsButotn"

const cards = [
    {
        // title: "Dress Well, Pay Less",
        title: <span>Gdzie styl spotyka oszczędności</span>,
        color: "text-orange-500",
        imageSource: "/euro-dynamic-color.png",
        content: <span className="text-neutral-500 block max-w-xl">Z Promly znajdziesz znajdziesz tanie, ale jakościowe produkty. Skupiamy się głównie na znanych markach</span>
    },
    {
        title: <span>Bądź tuż przed wszystkimi</span>,
        color: "text-red-500",
        imageSource: "/explorer-dynamic-colorx.png",
        content: <span className="text-neutral-500 block max-w-xl">Promly skanuje internet na bieżąco, dlatego wszystkie promocje zazwyczaj są nowe</span>
    },
    {
        title: <span>Wyselekcjonowane produkty</span>,
        color: "text-blue-500",
        imageSource: "/zoom-dynamic-color.png",
        content: <span className="text-neutral-500 block max-w-xl">W troscę o jakość, produkty są sortowane przez różne czynniki m.in cene. Produkty z oznaką Promly Selected zostały wybrane ręcznie</span>

    },
    {
        title: <span>Nie przegapisz żadnej promocji</span>,
        color: "text-orange-500",
        imageSource: "/megaphone-dynamic-color.png",
        content: <span className="text-neutral-500 block max-w-xl">Pobierając aplikację mobilną zostaniesz poinformowany o ciekawych nowościach</span>

    },
    {
        title: <span>Pobierz aplikację już dziś</span>,
        color: "text-red-500",
        imageSource: "/trophy-dynamic-color.png",
        content: (
            <>
                <div className="flex flex-row gap-1 mb-1.5 justify-center" >
                    <a href='https://play.google.com/store/apps/details?id=pl.promly.promly'
                        target='_blank'
                    >
                        <img src="/gp_pl-cropped.svg" className="h-10 md:h-12" />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=pl.promly.promly'
                        target='_blank'
                    >
                        <img src="/as_pl-cropped.svg" className="h-10  md:h-12 opacity-50" />
                    </a>


                </div>
                <span className="text-xs text-neutral-500 block max-w-xl my-3">Aplikacja na App Store będzie dostępna w niedalekiej przyszłości. Promocje są dostępne również na stronie internetowej: <div className="-mt-2"><AllPromotionsButton /></div></span>
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

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
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