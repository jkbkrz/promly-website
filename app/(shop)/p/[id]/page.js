import { getProduct } from "@/server-actions"
import ProductPage from "@/components/ProductPage"

export async function generateMetadata({ params }) {
    const id = params.id

    try {
        const data = await getProduct(id)
        const product = data.product

        return {
            title: product.name + ' - Promly',
        }
    } catch (error) {
        return {
            title: 'Promly'
        }
    }
}

export default async function Page({ params }) {
    const data = await getProduct(params.id)

    if (!data.product) throw new Error('Failed to fetch product')

    return (
        <div className="max-w-2xl mx-auto p-4">
            <ProductPage product={data.product} />
        </div>
    )
}
