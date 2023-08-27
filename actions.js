"use server"

import ProductTile from "./components/ProductTile";

async function searchProducts({ searchQuery, cursor, category, sortOption }) {
    console.log(`${process.env.API_URL}/search?searchQuery=${searchQuery}&next=${cursor}&filterOptions=${category}&sortOption=${sortOption}`)

    const res = await fetch(`${process.env.API_URL}/search?searchQuery=${searchQuery}&next=${cursor}&filterOptions=${category}&sortOption=${sortOption}`, {
        cache: 'no-cache'
    })

    const { products, nextCursor } = await res.json();
    return {
        nextCursor,
        products: products.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />)
    }
}

export { searchProducts }