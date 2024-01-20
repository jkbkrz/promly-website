import { getAllProducts } from "@/server-actions";

export default async function sitemap() {
    const allProducts = await getAllProducts()
    // console.log(allProducts)
    const products = allProducts.map(product => {
        return {
            url: `https://promly.pl/p/${product._id}`,
            lastModified: product.updatedAt
        }
    })

    return products
}