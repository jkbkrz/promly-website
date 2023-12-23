import { getProducts } from "@/actions"
import SelectNavigation from "@/components/SelectNavigation"
import { SelectItem } from "@/components/ui/select"
import { categories, sortOptions } from "@/lib/utils"
import LoadMore from "@/load-more"

export const metadata = {
    title: 'Promly - Promocje'
}

export default async function Page({ searchParams }) {
    const { products, nextCursor, lastPrice, lastScore, selected } = await getProducts({ category: searchParams.category || '', sortOption: searchParams.sort, selected: searchParams.selected })

    return (
        <main className="px-3 min-h-screen -mt-12">
            <div className="mb-8">
                <SelectNavigation categoryValue={searchParams.category || 'default'} sortValue={searchParams.sort || 'default'}>
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
                <span className="text-center block text-neutral-500">Brak wyników</span>
            )}

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
                {products}
                {(products.length > 0 && nextCursor) && (
                    <LoadMore key={searchParams.category + "_" + searchParams.sort} nextCursor={nextCursor} category={searchParams.category} sortOption={searchParams.sort} lastPrice={lastPrice} lastScore={lastScore} isSearch={false} selected={searchParams.selected} />
                )}

            </div>

            <div className="h-16" />
        </main>
    )
}