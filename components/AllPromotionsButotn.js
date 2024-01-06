'use client'

import { getProductsCount } from "@/server-actions"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AllPromotionsButton({ props }) {
    const [count, setCount] = useState(null)

    useEffect(() => {
        getProductsCount().then((res) => count == 0 ? setCount(null) : setCount(res.count)).catch((error) => console.log(error))
    }, [])

    return (
        <div className="flex w-full justify-center">
            <div className="bg-blue-600 rounded-full text-center inline-flex px-3 py-2 items-center mt-4 " {...props}>
                <Link className="inline-flex items-center gap-x-1.5 text-sm text-white decoration-2 hover:underline font-medium" href="/promotions">
                    Przeglądaj wszystkie okazje 👀
                    {Boolean(count) && <div className='inline-block rounded-full bg-white px-1.5 ml-1 text-xs text-blue-600 dark:text-black'>{count}</div>}
                    <svg className="w-2.5 h-2.5" fill="none" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="#ffff" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                </Link>
            </div>
        </div>
    )
}