import { searchProducts } from "@/actions"
import Search from "@/components/Search"
import LoadMore from "@/load-more"

export default async function Page({ params }) {
    const { products, nextCursor } = await searchProducts({ searchQuery: params.query })

    return <main className="px-3 min-h-screen" >
        <div className="mt-5 mb-8"> <Search value={params.query} /></div>

        {(products.length == 0 && !nextCursor) && (
            <span className="text-center block text-neutral-400">Brak wyników dla frazy: {params.query}</span>
        )}

        {/* 
        {(products.length > 0 && !nextCursor) && (
            <span className="my-8 text-center block text-neutral-400">Liczba wyników: {products.length}</span>
        )} */}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
            {products}
            {(products.length > 0 && nextCursor) ? (
                <LoadMore searchQuery={params.query} nextCursor={nextCursor} />
            ) : <></>}
        </div>

        <div className="h-16" />


    </main>

}