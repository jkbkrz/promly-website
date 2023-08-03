"use server"

import TestCard from "./components/TestCard";

async function searchProducts({ searchQuery, cursor }) {
    const res = await fetch(`http://localhost:3030/website/search?searchQuery=${searchQuery}&next=${cursor}`, {
        cache: 'no-cache'
    })

    const { results, nextCursor } = await res.json();

    console.log(results, nextCursor)

    return {
        nextCursor,
        products: results.map((product) => <TestCard key={product._id} product={product} />)
    }
}

export { searchProducts }