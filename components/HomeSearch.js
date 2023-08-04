'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import Typed from 'typed.js';

export default function HomeSearch() {
    const router = useRouter()
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['biała koszulka oversize', 'nike air force 1', 'czarne sneakersy', 'Przeszukaj tysiące promocji'],
            typeSpeed: 50,
            attr: 'placeholder',
        });

        return () => {
            typed.destroy();
        };
    }, []);


    const [query, setQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/s/${query}`, { scroll: true })
    }

    return <form onSubmit={handleSubmit}>
        <div className="relative max-w-md sm:max-w-xl mx-auto">
            <input onChange={(e) => setQuery(e.target.value)} ref={el} type="search" autoComplete="off" id="default-search" className="block bg-white dark:bg-black pl-5 p-4 text-black dark:text-white border border-gray-300 dark:border-zinc-700 rounded-full w-full focus:outline-none focus:ring" required></input>
            <button type="submit" className="text-black absolute right-2 bottom-3 font-medium rounded-lg text-sm px-4 py-2"><svg className="w-5 h-5 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg></button>
        </div>
    </form>

}