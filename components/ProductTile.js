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
import ShareProduct from "./ShareProduct"
import ProductPage from "./ProductPage"
import { removeGenerationParameter } from "@/lib/utils"

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
    return <Card className="w-full flex flex-col shadow-lg relative overflow-hidden border-none border-black border-opacity-10 dark:border-zinc-800 rounded-3xl shadow-black/5" {...props}>
        {product.selected === true && (
            <div className="mx-4 my-3 flex flex-row gap-2 absolute bg-red-200 px-2 py-0.5 rounded-full justify-start items-center">
                <img src="/fire.png" className="h-4"></img>
                <span className="text-black font-rubik text-xs">Popularne</span>
                {/* <span className="text-xs text-black">Promly selected</span> */}
            </div>
        )}

        {/* {env && <div className="font-mono p-2 text-xs text-neutral-400">
            <span className="block">score: {product.score.toFixed(5)} </span>
            <span className="block">_id: {product._id}</span>
            {fromSearch && <span>modifiedSearchScore: {product.modifiedSearchScore.toFixed(5)}</span>}
        </div>} */}

        <div className="flex-grow w-full bg-neutral-100 dark:bg-neutral-800 lg:aspect-none border-0 p-8  border-neutral-800  max-h-96 flex justify-center items-center">
            <img
                src={removeGenerationParameter(product.imageLinkFirebase)}
                className="h-full w-full rounded-2xl object-cover object-center aspect-square"
            />
        </div>
        {/* href={product.link} target="_blank"  */}

        <Sheet>


            <SheetContent className="p-4 overflow-auto">
                <ProductPage product={product} />
            </SheetContent>

            <div className="flex-shrink-0 p-4 flex justify-between flex-col ">
                <SheetTrigger>

                    <div className="text-start">
                        <span className="text-md  line-through text-black dark:text-white mr-2 inline-block">{Math.floor(product.price)} PLN</span>
                        <span className="text-md  text-black dark:text-white mr-2 inline-block">{Math.floor(product.discountedPrice)} PLN</span>
                        <span className="text-xs hidden  text-neutral-500 sm:inline-block">
                            -{discount}%
                        </span>
                    </div>

                    <h2 className="font-rubik text-start text-base font-medium text-black dark:text-white line-clamp-3 truncate text-ellipsis overflow-hidden">{product.name}</h2>
                </SheetTrigger>


                <div className="flex items-center my-2">
                    <ProductSizes sizes={product.sizes} />
                </div>


                <div className="truncate text-neutral-500 flex flex-row justify-between text-center">
                    <div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#a8a29e"
                            stroke="#a8a29e" viewBox="240 240 544 544" width={14} height={14} className="inline-block mr-2">
                            <path d="M421.5 638.7l-36.2-36.2 217.2-217.2 36.2 36.2-217.2 217.2zm126.7-54.3L421.5 711.1 312.8 602.4l126.7-126.7-36.1-36.1-126.7 126.7-36.2 36.2 144.8 144.8 36.1 36.1.1.1 36.2-36.2-.1-.1 126.7-126.7-36.1-36.1zm235.3-162.9l-36.2-36.2-144.8-144.8-36.2 36.2-126.7 126.7 36.1 36.1 126.7-126.7 108.7 108.7-126.7 126.7 36.1 36.1 126.7-126.7.1.1 36.2-36.2z"></path>
                        </svg> */}

                        <div className="w-7 h-7 bg-blue-100 dark:bg-blue-950 p-0.5 rounded-full inline-flex justify-center items-center mr-1">
                            <Image src="/link.png" height={15} width={15} />
                        </div>

                        <span className="text-xs truncate text-neutral-500  mb-1">{new URL(product.link).hostname}</span>
                    </div>
                </div>

            </div>
        </Sheet>
    </Card>
}

export default ProductTile