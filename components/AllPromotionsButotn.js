'use client'

import { getProductsCount } from "@/actions"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AllPromotionsButton() {
    const [count, setCount] = useState(null)

    useEffect(() => {
        getProductsCount().then((res) => setCount(res.count)).catch((error) => console.log(error))
    }, [])

    return <div className="text-center fllex items-center mt-4">
        <Link className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="/promotions">
            Przeglądaj wszystkie okazje
            {count && <div className='inline-block rounded-full bg-blue-600 px-1.5 ml-1 text-xs text-white dark:text-black'>{count}</div>}
            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

        </Link>
    </div>
}