import { searchProducts } from "@/actions"
import Search from "@/components/Search"
import SelectNavigation from "@/components/SelectNavigation"
import LoadMore from "@/load-more"

const categories = [
    {
        id: "",
        label: "Pokaż wszystko"
    },
    {
        id: "hoodies",
        label: "Bluzy"
    },
    {
        id: "shoes",
        label: "Buty"
    },
    {
        id: "tshirts",
        label: "Koszulki"
    },
    {
        id: "pants",
        label: "Spodnie"
    },
    {
        id: "jeans",
        label: "Jeansy"
    }
]

const sortOptions = [
    {
        id: "",
        label: "Polecane"
    },
    {
        id: "price_asc",
        label: "Cena: od najniższej"
    },
    {
        id: "price_desc",
        label: "Cena: od najwyższej"
    }
]

export default async function Page({ params, searchParams }) {
    const { products, nextCursor, lastPrice } = await searchProducts({ searchQuery: params.query, category: searchParams.category || '', sortOption: searchParams.sort })
    return <main className="px-3 min-h-screen" >
        <div className="mt-5 mb-8">
            <Search value={params.query} />
        </div>

        <div className="mb-8">
            <SelectNavigation categoryValue={searchParams.category || ''} sortValue={searchParams.sort || ''}>
                {{
                    categories: categories.map((category) => (
                        <option value={category.id} key={category.id} className="text-sm">
                            {category.label}
                        </option>
                    )),
                    sortOptions: sortOptions.map((sortOption) => (
                        <option value={sortOption.id} key={sortOption.id} className="text-sm">
                            {sortOption.label}
                        </option>
                    )),
                }}
            </SelectNavigation>
        </div>

        {(products.length == 0 && !nextCursor) && (
            <span className="text-center block text-neutral-400">Brak wyników dla frazy: {params.query}</span>
        )}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
            {products}
            {(products.length > 0 && nextCursor) && (
                <LoadMore key={params.query + "_" + searchParams.category + "_" + searchParams.sort} searchQuery={params.query} nextCursor={nextCursor} category={searchParams.category} sortOption={searchParams.sort} lastPrice={lastPrice} />
            )}

        </div>

        <div className="h-16" />
    </main>
}