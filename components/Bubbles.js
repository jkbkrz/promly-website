"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export const ProductBubbles = () => {
    const bubbles = [
        { src: "/bubbles/1.png", top: "0%", left: "5%", delay: 0.1, color: "shadow-blue-500/30" },
        { src: "/bubbles/2.png", top: "50%", left: "-5%", delay: 0.9, color: "shadow-red-500/30" },
        { src: "/bubbles/3.png", top: "100%", left: "5%", delay: 1.7, color: "shadow-pink-500/30" },
        { src: "/bubbles/4.png", top: "0%", right: "5%", delay: 1.3, color: "shadow-pink-500/30" },
        { src: "/bubbles/5.png", top: "50%", right: "-5%", delay: 0.5, color: "shadow-lime-500/30" },
        { src: "/bubbles/6.png", top: "100%", right: "5%", delay: 2.1, color: "shadow-purple-500/30" }
    ];

    return (
        <div className="hidden lg:flex absolute mt-10 w-full h-72 justify-center items-center max-w-[1200px]">
            <AnimatePresence>
                {bubbles.map((bubble, index) => (
                    <motion.div
                        key={bubble.src}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        onTransitionEnd={{ delay: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: bubble.delay, type: "spring" }}
                        className={cn("absolute overflow-hidden rounded-full border-2 dark:border-neutral-800")}
                        style={{ top: bubble.top, left: bubble.left, right: bubble.right }}
                    >
                        {bubble.src && (
                            <Image
                                src={bubble.src}
                                width={128}
                                height={128}
                                placeholder="empty"
                                className="w-32 h-32"
                            />
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}