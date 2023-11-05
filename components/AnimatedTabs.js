"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const AnimatedTabs = ({ motionLayoutId, headline, className, tabs, callback, value, isLoading, ...props }) => {
    const [activeTab, setActiveTab] = useState(value)

    return (
        <div
            className={cn("flex flex-wrap gap-1", className, isLoading ? '' : '')}
            {...props}
        >
            {headline && <span className="block text-sm text-neutral-500 px-3 pb-1">{headline}</span>}
            {tabs.map((tab) => (
                <button
                    disabled={isLoading}
                    key={tab.id}
                    onClick={() => {
                        if (tab.id === activeTab) return
                        setActiveTab(tab.id)
                        callback(tab.id)
                    }}
                    className={`${activeTab === tab.id ? "" : "hover:text-white/50"} ${isLoading && activeTab === tab.id ? "animate-pulse" : ""} relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline transition border border-black/20 dark:border-white/20`}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId={motionLayoutId}
                            className="absolute inset-0 bg-black dark:bg-white"
                            style={{
                                borderRadius: 9999, // for framer-motion
                            }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.3,
                            }}
                        />
                    )}
                    <span className="relative z-10 mix-blend-exclusion">{tab.label}</span>
                </button>
            ))}
        </div>
    )
}

export default AnimatedTabs
