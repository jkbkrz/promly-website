'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';

export default function Search({ value }) {
    const router = useRouter()

    const [query, setQuery] = useState(decodeURIComponent(value))
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/s/${query}`)
    }

    return <form onSubmit={handleSubmit}>
        <div className="relative max-w-md sm:max-w-xl mx-auto">
            <input onChange={(e) => setQuery(e.target.value)} value={query} type="search" autoComplete="off" id="default-search" className="block bg-white dark:bg-black pl-5 p-4 text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full w-full focus:outline-none focus:ring" required></input>
            <button type="submit" className="text-black absolute right-2 bottom-3 font-medium rounded-lg text-sm px-4 py-2"><svg className="w-5 h-5 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg></button>
        </div>
        <div className="text-center fllex items-center mt-4">
            <a className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
                Przeglądaj wszystkie okazje
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </a>
        </div>
    </form>

}