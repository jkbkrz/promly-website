import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const BODY_PADDING = "px-4 sm:px-6"

export const Header = () => {
    return <header
        className={cn(
            "top-5 sticky z-20 w-full py-3 flex flex-row flex-nowrap justify-between max-w-4xl mx-auto h-14 items-stretch animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out bg-white/80 dark:bg-black/80 backdrop-blur-2xl rounded-xl border border-neutral-100 dark:border-neutral-800",
            BODY_PADDING
        )}
    >
        <Link
            className="text-black text-lg font-medium flex flex-row flex-nowrap items-center justify-center gap-x-1.5 pr-1.5 leading-none rounded-lg"
            href="/"
        >
            {/* <Image src="/promly.svg" width={80} height={36} className="invert dark:invert-0" alt="Promly logo" /> */}
            <div
                className='flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-lg'
            >
                <Image src="/promly-square.svg" width={20} height={20} alt="Promly logo" />
            </div>
            <div className="ml-2 flex-none text-sm font-medium dark:text-white">
                Promly
            </div>
        </Link>

        <div className="flex flex-row flex-nowrap gap-x-1.5 items-center">
            <Link href="/app?referrer=website" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Download App</span>
                <Image
                    src="/appstore.webp"
                    alt="App Store Badge"
                    height={0}
                    width={100}
                    style={{ height: '33px', width: "auto" }}
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
                    style={{ height: '33px', width: "auto" }}
                    priority
                />
            </Link>
        </div>
    </header>
}