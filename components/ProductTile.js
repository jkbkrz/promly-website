import Image from "next/image"
import ProductSizes from "./ProductSizes"

const ProductTile = ({ product, fromSearch }) => {
    const env = process.env.NODE_ENV

    const discount = Math.round((Math.abs(product.price - product.discountedPrice) / product.price) * 100)
    let rating

    if (discount >= 70) rating = 5
    else if (discount >= 60) rating = 4.5
    else if (discount >= 50) rating = 4
    else if (discount >= 40) rating = 3.5
    else rating = 3

    // h-96 max-h-96 sm:h-128 sm:max-h-128 
    return <a href={product.link} target="_blank" className="flex flex-col relative overflow-hidden border border-black border-opacity-10 dark:border-zinc-800 rounded-md">
        {product.selected === true && (
            <div className="px-4 py-3 flex flex-row gap-2 ">
                <Image src="/selected.svg" width={16} height={16}></Image>
                <span className="text-xs">Promly selected</span>
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
                className="h-full w-full object-contain object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="flex-shrink-0 p-4 flex justify-between flex-col border-t border-black border-opacity-10 dark:border-zinc-800">
            <div >
                <span className="text-md  line-through text-black dark:text-white mr-2 inline-block">{Math.floor(product.price)} PLN</span>
                <span className="text-md  text-black dark:text-white mr-2 inline-block">{Math.floor(product.discountedPrice)} PLN</span>
                <span className="text-xs hidden  text-neutral-500 sm:inline-block">
                    -{discount}%
                </span>
            </div>

            <h2 className="text-sm text-black dark:text-white line-clamp-3">{product.name}</h2>


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
                <div className="hidden lg:block">
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
                        2h
                    </span>
                </div>

            </div>

        </div>
    </a>
}

export default ProductTile