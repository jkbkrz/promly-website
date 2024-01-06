"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import ScrollCard from "./ScrollCard"
import Lenis from '@studio-freight/lenis'

const cards = [
    {
        // title: "Dress Well, Pay Less",
        title: <span>Gdzie styl spotyka oszczędności</span>,
        color: "text-orange-500",
        imageSource: "/euro-dynamic-color.png"
    },
    {
        title: <span>Bądź tuż przed wszystkimi</span>,
        color: "text-red-500",
        imageSource: "/explorer-dynamic-colorx.png"
    },
    {
        title: <span>Wyselekcjonowane produkty</span>,
        color: "text-blue-500",
        imageSource: "/zoom-dynamic-color.png"
    },
    {
        title: <span>Nie przegapisz żadnej promocji</span>,
        color: "text-orange-500",
        imageSource: "/megaphone-dynamic-color.png"
    },
    {
        title: <span>Pobierz aplikację już dziś</span>,
        color: "text-red-500",
        imageSource: "/heart-dynamic-color.png"
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
        <div ref={container}>
            {cards.map((card, index) => {
                const targetScale = 1 - ((cards.length - index) * 0.05)
                return <ScrollCard {...card} i={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />

            }
            )}
        </div>
    )
}