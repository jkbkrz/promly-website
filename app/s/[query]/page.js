import { searchProducts } from "@/actions"
import Search from "@/components/Search"
import SelectNavigation from "@/components/SelectNavigation"
import LoadMore from "@/load-more"

const categories = [
    {
        id: "",
        label: "Wszystko"
    },
    {
        id: "hoodies",
        label: "bluzy"
    },
    {
        id: "shoes",
        label: "buty"
    },
    {
        id: "tshirts",
        label: "koszulki"
    },
    {
        id: "pants",
        label: "spodnie"
    },
    {
        id: "jeans",
        label: "jeansy"
    }
]

const sortOptions = [
    {
        id: "",
        label: "Polecane"
    },
    {
        id: "price_asc",
        label: "Cena: od najnizszej"
    },
    {
        id: "price_desc",
        label: "Cena: od najwyzszej"
    }
]

export default async function Page({ params, searchParams }) {
    const { products, nextCursor } = await searchProducts({ searchQuery: params.query, category: searchParams.category || '', sortOption: searchParams.sort })

    return <main className="px-3 min-h-screen" >
        <div className="mt-5 mb-8">
            <Search value={params.query} />
        </div>

        <div className="mb-8">
            <SelectNavigation categoryValue={searchParams.category} sortValue={searchParams.sort}>
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

        {/* 
        {(products.length > 0 && !nextCursor) && (
            <span className="my-8 text-center block text-neutral-400">Liczba wyników: {products.length}</span>
        )} */}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
            {products}
            {(products.length > 0 && nextCursor) ? (
                <LoadMore searchQuery={params.query} nextCursor={nextCursor} category={searchParams.category} sortOption={searchParams.sort} />
            ) : <></>}
        </div>

        <div className="h-16" />


    </main>

}