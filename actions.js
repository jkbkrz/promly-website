"use server"

import ProductTile from "./components/ProductTile";

async function searchProducts({ searchQuery, cursor, category, sortOption, lastPrice }) {
    const url = `${process.env.API_URL}/search/next/AXWT5BIp8sq4HuZ?searchQuery=${searchQuery}&next=${cursor}&filterOptions=${category}&sortOption=${sortOption}&lastPrice=${lastPrice}`

    const res = await fetch(url, {
        cache: 'no-store'
    })

    const { products, nextCursor } = await res.json();

    return {
        nextCursor,
        products: products.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />),
        lastPrice: products.length > 0 ? products[products.length - 1].discountedPrice : null
    }
}

export { searchProducts }