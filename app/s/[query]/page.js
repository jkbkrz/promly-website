import { searchProducts } from "@/actions"
import Search from "@/components/Search"
import LoadMore from "@/load-more"

export default async function Page({ params }) {
    const { products, nextCursor } = await searchProducts({ searchQuery: params.query })

    return <main className="px-3 min-h-screen" >
        <div className="mt-5"> <Search value={params.query} /></div>
        <h1>{params.query}</h1>
        {products}

        {(products.length > 0 && nextCursor) ? (
            <LoadMore searchQuery={params.query} nextCursor={nextCursor} />
        ) : products.length > 0 && !nextCursor ? (
            <span>Znaleziono tylko {products.length} wyników</span>
        ) : (
            <span>Brak wyników</span>
        )}
    </main>

}