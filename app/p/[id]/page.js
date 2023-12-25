import { getProduct } from "@/actions"
import ProductPage from "@/components/ProductPage"

export async function generateMetadata({ params }) {
    const id = params.id

    const data = await getProduct(id)
    const product = data.product

    return {
        title: 'Promly - ' + product.name,
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
