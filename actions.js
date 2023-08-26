"use server"

import ProductTile from "./components/ProductTile";

async function searchProducts({ searchQuery, cursor }) {
    console.log(`${process.env.API_URL}/search?searchQuery=${searchQuery}&next=${cursor}`)
    const res = await fetch(`${process.env.API_URL}/search?searchQuery=${searchQuery}&next=${cursor}`, {
        cache: 'no-cache'
    })

    const { products, nextCursor } = await res.json();
    return {
        nextCursor,
        products: products.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />)
    }
}

export { searchProducts }