"use server"
import ProductTile from "./components/ProductTile"

async function searchProducts({ searchQuery, cursor, category, sortOption, lastPrice }) {
    const url = `${process.env.API_URL}/search?searchQuery=${searchQuery}&next=${cursor}&filterOptions=${category}&sortOption=${sortOption}&lastPrice=${lastPrice}`

    const res = await fetch(url, {
        cache: 'no-store'
    })

    const { products, nextCursor } = await res.json()

    return {
        nextCursor,
        products: products.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />),
        lastPrice: products.length > 0 ? products[products.length - 1].discountedPrice : null
    }
}

async function getProducts({ cursor, category, sortOption, lastPrice, lastScore }) {
    const url = `${process.env.API_URL}/mobile/products?cursor=${cursor}&filterOptions=${category}&sortOption=${sortOption}&lastPrice=${lastPrice}&lastScore=${lastScore}`

    const res = await fetch(url, {
        cache: 'no-store'
    })

    const { products, nextCursor } = await res.json()

    return {
        nextCursor,
        products: products.map((product) => <ProductTile key={product._id} product={product} fromSearch={false} />),
        lastPrice: products.length > 0 ? products[products.length - 1].discountedPrice : null,
        lastScore: products.length > 0 ? products[products.length - 1].score : null
    }
}

async function getProductsCount() {
    const url = `${process.env.API_URL}/mobile/count`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const { count } = await res.json()

    return {
        count
    }
}

export { searchProducts, getProducts, getProductsCount }