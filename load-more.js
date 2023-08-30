"use client"

import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "./hooks/useIsVisible"
import { searchProducts } from "./actions"
import { useSearchParams } from "next/navigation"

export default function LoadMore({ searchQuery, nextCursor, category, sortOption, lastPrice }) {
    console.log(`Initial load more: \n searchQuery: ${searchQuery} \n nextCursor: ${nextCursor} \n category: ${category} \n sortOption: ${sortOption}`)


    console.log('First next cursor: ', nextCursor)
    const [data, setData] = useState({
        nextCursor: nextCursor, products: [], category: category, sortOption: sortOption, lastPrice
    })

    const searchParams = useSearchParams();

    useEffect(() => {
        if (category !== data.category) {
            // Category has changed, reset products and maintain the current cursor
            setData({
                nextCursor: nextCursor,
                products: [],
                category: category,
                sortOption: sortOption
            });
        }
    }, [category, searchParams]);

    const container = useRef(null)
    const visible = useIsVisible(container)

    useEffect(() => {
        if (visible) {
            searchProducts({ searchQuery, cursor: data.nextCursor, category: data.category, sortOption: data.sortOption, lastPrice: data.lastPrice }).then((res) => {
                console.log('Next cursor: ', res.nextCursor)
                setData((data) => ({
                    nextCursor: res.nextCursor,
                    lastPrice: res.lastPrice,
                    products: [
                        ...data.products,
                        ...res.products
                    ]
                }))
            })
        }
    }, [visible])

    return <>
        {data.products}
        {data.nextCursor ? <div ref={container}>

        </div> : <></>}
    </>
}