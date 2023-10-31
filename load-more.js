"use client"

import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "./hooks/useIsVisible"
import { getProducts, searchProducts } from "./actions"

export default function LoadMore({ searchQuery, nextCursor, category, sortOption, lastPrice, lastScore, isSearch }) {
    const [data, setData] = useState({
        nextCursor: nextCursor, products: [], lastPrice, lastScore
    })

    const container = useRef(null)
    const visible = useIsVisible(container)

    useEffect(() => {
        if (visible) {
            if (isSearch) {
                searchProducts({ searchQuery, cursor: data.nextCursor, category, sortOption, lastPrice: data.lastPrice }).then((res) => {
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
            } else {
                getProducts({ cursor: data.nextCursor, category, sortOption, lastPrice: data.lastPrice, lastScore: data.lastScore }).then((res) => {
                    setData((data) => ({
                        nextCursor: res.nextCursor,
                        lastPrice: res.lastPrice,
                        lastScore: res.lastScore,
                        products: [
                            ...data.products,
                            ...res.products
                        ]
                    }))
                })
            }
        }
    }, [visible])

    return (
        <>
            {data.products}
            {data.nextCursor ? <div ref={container}>
                {/* Loading indicator... */}
            </div> : <></>}
        </>
    )
}