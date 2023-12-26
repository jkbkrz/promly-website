import Image from "next/image";
import ProductSizes from "./ProductSizes";
import ShareProduct from "./ShareProduct";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function ProductPage({ product }) {
    const discount = Math.round((Math.abs(product.price - product.discountedPrice) / product.price) * 100)
    return (
        <div>
            <div className="rounded-xl mx-auto p-4 w-full  bg-neutral-100 border-0  border-neutral-800  h-96 max-h-96">
                <img
                    src={product.imageBase64}
                    className="h-full mx-auto  object-contain object-center"
                />
            </div>

            <a href={product.link} target="_blank">
                <Button className="my-4 h-12 w-full">
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


                        <div className="truncate text-neutral-500 flex flex-row gap-3.5 text-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#a8a29e"
                                    stroke="#a8a29e" viewBox="240 240 544 544" width={14} height={14} className="inline-block mr-2">
                                    <path d="M421.5 638.7l-36.2-36.2 217.2-217.2 36.2 36.2-217.2 217.2zm126.7-54.3L421.5 711.1 312.8 602.4l126.7-126.7-36.1-36.1-126.7 126.7-36.2 36.2 144.8 144.8 36.1 36.1.1.1 36.2-36.2-.1-.1 126.7-126.7-36.1-36.1zm235.3-162.9l-36.2-36.2-144.8-144.8-36.2 36.2-126.7 126.7 36.1 36.1 126.7-126.7 108.7 108.7-126.7 126.7 36.1 36.1 126.7-126.7.1.1 36.2-36.2z"></path>
                                </svg>

                                <span className="text-xs truncate text-neutral-500  mb-1">{new URL(product.link).hostname}</span>

                            </div>
                            {product.selected === true && (
                                <div className="flex flex-row items-center gap-2">
                                    <Image src="/selected.svg" width={16} height={16}></Image>
                                    <span className="text-xs">Promly selected</span>
                                </div>
                            )}
                        </div>

                    </div>


                </CardContent>

            </Card>
            <ShareProduct className="my-4" placeholder={`https://promly.pl/p/${product._id}`} />
        </div>
    )
}