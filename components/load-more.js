// "use client"

// import { useEffect, useRef, useState } from "react"
// import { useIsVisible } from "../hooks/useIsVisible"
// import { searchProducts } from "../actions"
// import { useSearchParams } from "next/navigation"

// export default function LoadMore({ searchQuery, nextCursor, category, sortOption, lastPrice }) {
//     const [data, setData] = useState({
//         nextCursor: nextCursor, products: [], lastPrice: lastPrice
//     })

//     const container = useRef(null)
//     const visible = useIsVisible(container)

//     useEffect(() => {
//         if (visible) {
//             searchProducts({ searchQuery, cursor: data.nextCursor, category: category, lastPrice: data.lastPrice, sortOption: sortOption }).then((res) => {
//                 setData((data) => ({
//                     nextCursor: res.nextCursor,
//                     lastPrice: res.lastPrice,
//                     products: [
//                         ...data.products,
//                         ...res.products
//                     ]
//                 }))
//             })
//         }
//     }, [visible])

//     return <>
//         {data.products}
//         {data.nextCursor ? <div ref={container}>REF</div> : <div>cipa</div>}
//         <span>xd</span>
//     </>
// }