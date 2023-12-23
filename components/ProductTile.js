import Image from "next/image"
import ProductSizes from "./ProductSizes"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const calculateTimeSinceUpdate = (date) => {
    const currentDate = new Date()
    const updatedAt = new Date(date)

    const timeDifference = currentDate - updatedAt
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference < 24) {
        return `${Math.floor(hoursDifference)}h`
    } else {
        return `${Math.floor(hoursDifference / 24)}d`
    }
}

const ProductTile = ({ product, fromSearch, ...props }) => {
    const env = process.env.NODE_ENV

    const discount = Math.round((Math.abs(product.price - product.discountedPrice) / product.price) * 100)

    let rating = discount >= 70 ? 5 :
        discount >= 60 ? 4.5 :
            discount >= 50 ? 4 :
                discount >= 40 ? 3.5 :
                    3

    // h-96 max-h-96 sm:h-128 sm:max-h-128 
    return <Card className="flex flex-col relative overflow-hidden border border-black border-opacity-10 dark:border-zinc-800 rounded-2xl" {...props}>
        {product.selected === true && (
            <div className="px-4 py-3 flex flex-row gap-2 absolute">
                <Image src="/selected.svg" width={16} height={16}></Image>
                {/* <span className="text-xs text-black">Promly selected</span> */}
            </div>
        )}

        {/* {env && <div className="font-mono p-2 text-xs text-neutral-400">
            <span className="block">score: {product.score.toFixed(5)} </span>
            <span className="block">_id: {product._id}</span>
            {fromSearch && <span>modifiedSearchScore: {product.modifiedSearchScore.toFixed(5)}</span>}
        </div>} */}

        <div className="flex-grow p-4 w-full bg-neutral-100 lg:aspect-none border-0  border-neutral-800 lg:h-96 lg:max-h-96">
            <img
                src={product.imageBase64}
                className="h-full w-full object-contain object-center"
            />
        </div>
        {/* href={product.link} target="_blank"  */}

        <Sheet>


            <SheetContent className="p-4">


                <div className="rounded-xl mx-auto p-4 w-full  bg-neutral-100 border-0  border-neutral-800  h-60 max-h-60">
                    <img
                        src={product.imageBase64}
                        className="h-full mx-auto  object-contain object-center"
                    />
                </div>

                <a href={product.link} target="_blank">
                    <Button className="my-4 h-12 w-full bg-emerald-700">
                        Kup teraz

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="800"
                            height="800"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 ml-1 fill-white"
                        >
                            <g className="fill-white" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                <g fill="" transform="translate(42.667 85.333)">
                                    <path d="M0 0h70.362L89.75 85.333h288.64l-41.143 192H89.638L36.288 42.667H0V0zm138.667 384c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32zM288 384c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32z"></path>
                                </g>
                            </g>
                        </svg>
                    </Button>
                </a>
                <Card>
                    <CardContent>


                        <div className="mt-3 text-start flex-shrink-0 flex justify-between flex-col">
                            <div >
                                <span className="text-md  line-through text-black dark:text-white mr-2 inline-block">{Math.floor(product.price)} PLN</span>
                                <span className="text-md  text-black dark:text-white mr-2 inline-block">{Math.floor(product.discountedPrice)} PLN</span>
                                <span className="text-xs hidden  text-neutral-500 sm:inline-block">
                                    -{discount}%
                                </span>
                            </div>

                            <h2 className="text-md text-black dark:text-white line-clamp-3 truncate text-ellipsis overflow-hidden">{product.name}</h2>


                            <div className="flex items-center my-2">
                                <ProductSizes sizes={product.sizes} />
                            </div>


                            <div className="truncate text-neutral-500 flex flex-row justify-between text-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#a8a29e"
                                        stroke="#a8a29e" viewBox="240 240 544 544" width={14} height={14} className="inline-block mr-2">
                                        <path d="M421.5 638.7l-36.2-36.2 217.2-217.2 36.2 36.2-217.2 217.2zm126.7-54.3L421.5 711.1 312.8 602.4l126.7-126.7-36.1-36.1-126.7 126.7-36.2 36.2 144.8 144.8 36.1 36.1.1.1 36.2-36.2-.1-.1 126.7-126.7-36.1-36.1zm235.3-162.9l-36.2-36.2-144.8-144.8-36.2 36.2-126.7 126.7 36.1 36.1 126.7-126.7 108.7 108.7-126.7 126.7 36.1 36.1 126.7-126.7.1.1 36.2-36.2z"></path>
                                    </svg>

                                    <span className="text-xs truncate text-neutral-500  mb-1">{new URL(product.link).hostname}</span>
                                </div>
                                {/* <div className="hidden lg:block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#a8a29e"
                        className="inline-block mr-2"
                        width={14} height={14}
                        viewBox="0 0 32 32"
                    >
                        <path d="M22 18h-8v-8h4v4h4v4zm8-16v28H2V2h28zm-4 4H6v20h20V6z"></path>
                    </svg>
                    <span className="text-xs font-medium text-neutral-500  self-center">
                        {calculateTimeSinceUpdate(product.updatedAt)}
                    </span>
                </div> */}

                            </div>

                        </div>
                    </CardContent>

                </Card>
                {/* <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader> */}
            </SheetContent>
            <SheetTrigger>

                <div className="text-start flex-shrink-0 p-4 flex justify-between flex-col border-t border-black border-opacity-10 dark:border-zinc-800">
                    <div >
                        <span className="text-md  line-through text-black dark:text-white mr-2 inline-block">{Math.floor(product.price)} PLN</span>
                        <span className="text-md  text-black dark:text-white mr-2 inline-block">{Math.floor(product.discountedPrice)} PLN</span>
                        <span className="text-xs hidden  text-neutral-500 sm:inline-block">
                            -{discount}%
                        </span>
                    </div>

                    <h2 className="text-sm text-black dark:text-white line-clamp-3 truncate text-ellipsis overflow-hidden">{product.name}</h2>


                    <div className="flex items-center my-2">
                        <ProductSizes sizes={product.sizes} />
                    </div>


                    <div className="truncate text-neutral-500 flex flex-row justify-between text-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#a8a29e"
                                stroke="#a8a29e" viewBox="240 240 544 544" width={14} height={14} className="inline-block mr-2">
                                <path d="M421.5 638.7l-36.2-36.2 217.2-217.2 36.2 36.2-217.2 217.2zm126.7-54.3L421.5 711.1 312.8 602.4l126.7-126.7-36.1-36.1-126.7 126.7-36.2 36.2 144.8 144.8 36.1 36.1.1.1 36.2-36.2-.1-.1 126.7-126.7-36.1-36.1zm235.3-162.9l-36.2-36.2-144.8-144.8-36.2 36.2-126.7 126.7 36.1 36.1 126.7-126.7 108.7 108.7-126.7 126.7 36.1 36.1 126.7-126.7.1.1 36.2-36.2z"></path>
                            </svg>

                            <span className="text-xs truncate text-neutral-500  mb-1">{new URL(product.link).hostname}</span>
                        </div>
                        {/* <div className="hidden lg:block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#a8a29e"
                        className="inline-block mr-2"
                        width={14} height={14}
                        viewBox="0 0 32 32"
                    >
                        <path d="M22 18h-8v-8h4v4h4v4zm8-16v28H2V2h28zm-4 4H6v20h20V6z"></path>
                    </svg>
                    <span className="text-xs font-medium text-neutral-500  self-center">
                        {calculateTimeSinceUpdate(product.updatedAt)}
                    </span>
                </div> */}

                    </div>

                </div>
            </SheetTrigger>
        </Sheet>
    </Card>
}

export default ProductTile