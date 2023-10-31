import { getProducts } from "@/actions"
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

export const metadata = {
    title: 'Promly - Promocje'
}

export default async function Page({ searchParams }) {
    const { products, nextCursor, lastPrice, lastScore } = await getProducts({ category: searchParams.category || '', sortOption: searchParams.sort })

    return (
        <main className="px-3 min-h-screen">
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
                <span className="text-center block text-neutral-500">Brak wyników</span>
            )}

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
                {products}
                {(products.length > 0 && nextCursor) && (
                    <LoadMore key={searchParams.category + "_" + searchParams.sort} nextCursor={nextCursor} category={searchParams.category} sortOption={searchParams.sort} lastPrice={lastPrice} lastScore={lastScore} isSearch={false} />
                )}

            </div>

            <div className="h-16" />
        </main>
    )
}