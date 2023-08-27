"use client"

import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "./hooks/useIsVisible"
import { searchProducts } from "./actions"

export default function LoadMore({ searchQuery, nextCursor }) {
    console.log('First next cursor: ', nextCursor)
    const [data, setData] = useState({
        nextCursor: nextCursor, products: []
    })

    const container = useRef(null)
    const visible = useIsVisible(container)

    useEffect(() => {
        if (visible) {
            searchProducts({ searchQuery, cursor: data.nextCursor }).then((res) => {
                console.log('Next cursor: ', res.nextCursor)
                setData((data) => ({
                    nextCursor: res.nextCursor,
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
        {data.nextCursor ? <div ref={container}></div> : <></>}
    </>
}