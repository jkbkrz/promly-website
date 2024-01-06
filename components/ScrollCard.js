"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function ScrollCard({ title, i, progress, range, targetScale, color, imageSource }) {

    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const textScale = useTransform(scrollYProgress, [0, 1], [2.3, 1])
    const textOpacity = useTransform(scrollYProgress, [0, 1], [-1, 1])
    const imagePosition = useTransform(scrollYProgress, [0, 1], [150, -10])
    const subTextOpacity = useTransform(scrollYProgress, [0, 1], [-2.5, 1])

    const scale = useTransform(progress, range, [1, targetScale])
    return (
        <div ref={container} key="index" className="card-container ">
            <motion.div style={{ top: `calc(-10% + ${i * 25}px)`, marginTop: "60px", scale }} className={cn(`bg-${color}`, "overflow-hidden border-neutral-300 border bg-white card rounded-3xl flex flex-col p-10 items-center justify-center shadow-2xl shadow-neutral-100")}>

                <div className="flex flex-col gap-4 justify-center items-center relative">
                    <motion.div className={cn(`bgs-${color}`, "border-2 border-neutral-200  rounded-full relative sm:w-64 sm:h-64 w-36 h-36")} style={{ top: imagePosition }}>
                        <Image fill className={cn("relative  p-6 z-10")} src={imageSource} />

                    </motion.div>
                    <motion.h1 style={{ scale: textScale, opacity: textOpacity }} className="text-center disable-select font-heading font-bold tracking-tighter text-black leading-none text-4xl sm:text-5xl" >
                        {title}
                    </motion.h1>
                    <motion.span style={{ opacity: subTextOpacity }} className={cn(color, "text-center")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</motion.span>

                </div>

                {/* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */}
            </motion.div>
        </div>
    )
}