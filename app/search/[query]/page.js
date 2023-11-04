import { searchProducts } from "@/actions"
import Search from "@/components/Search"
import SelectNavigation from "@/components/SelectNavigation"
import { SelectItem } from "@/components/ui/select"
import { categories, sortOptions } from "@/lib/utils"
import LoadMore from "@/load-more"

export const metadata = {
    title: 'Promly - Wyszukiwanie'
}

export default async function Page({ params, searchParams }) {
    const { products, nextCursor, lastPrice } = await searchProducts({ searchQuery: params.query, category: searchParams.category || '', sortOption: searchParams.sort })

    return (
        <main className="px-3 min-h-screen" >
            <div className="mt-5 mb-8">
                <Search value={params.query} />
            </div>

            <div className="mb-8">

                <SelectNavigation categoryValue={searchParams.category || ''} sortValue={searchParams.sort || ''}>
                    {{
                        categories: categories.map((category) => (
                            <SelectItem value={category.id} key={category.id}>{category.label}</SelectItem>
                        )),
                        sortOptions: sortOptions.map((sortOption) => (
                            <SelectItem value={sortOption.id} key={sortOption.id}>{sortOption.label}</SelectItem>
                        )),
                    }}
                </SelectNavigation>
            </div>

            {(products.length == 0 && !nextCursor) && (
                <span className="text-center block text-neutral-500">Brak wyników dla frazy: {params.query}</span>
            )}

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
                {products}
                {(products.length > 0 && nextCursor) && (
                    <LoadMore key={params.query + "_" + searchParams.category + "_" + searchParams.sort} searchQuery={params.query} nextCursor={nextCursor} category={searchParams.category} sortOption={searchParams.sort} lastPrice={lastPrice} isSearch={true} />
                )}

            </div>

            <div className="h-16" />
        </main>
    )
}