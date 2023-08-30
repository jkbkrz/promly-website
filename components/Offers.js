"use client"

import { useEffect, useRef, useState } from "react"
import ProductTile from "./ProductTile"
import { useIsVisible } from "@/hooks/useIsVisible"
import { searchProducts } from "@/actions"
import SelectNavigation from "./SelectNavigation"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

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

// initialProducts, nextCursor, searchQuery, initialCategory, initialSort
const Offers = () => {
    const params = useParams()
    const searchParams = useSearchParams()

    const [searchOptions, setSearchOptions] = useState({
        searchQuery: params.query,
        category: searchParams.get('category'),
        sort: searchParams.get('sort')
    })

    const [data, setData] = useState({
        products: [], cursor: null
    })


    useEffect(() => {
        searchProducts({ searchQuery: searchOptions.searchQuery, cursor: data.cursor, category: searchOptions.category || '' }).then((res) => {
            setData({ products: res.products, cursor: res.nextCursor })
        })
    }, [])


    // const [data, setData] = useState({
    //     newProducts: [], cursor: nextCursor
    // })
    // ???
    // useEffect(() => {
    //     console.log("cursor from page " + nextCursor)
    //     setData(({
    //         ...data,
    //         cursor: nextCursor
    //     }));
    // }, [nextCursor]);

    let visible
    const container = useRef(null)
    if (container) visible = useIsVisible(container)

    // useEffect(() => {
    // if (visible) {
    //     console.log("is visible")
    //     searchProducts({ searchQuery, cursor: data.cursor, initialCategory }).then((res) => {
    //         setData({ newProducts: [...data.newProducts, ...res.products], cursor: res.nextCursor })
    //     })
    //     }
    // }, [visible])

    // const fetchNextPage = async () => {
    //     setLoading(true)
    //     await searchProducts({ searchQuery, cursor: data.cursor, category: initialCategory }).then((res) => {
    //         setData({ newProducts: [...data.newProducts, ...res.products], cursor: res.nextCursor })
    //     })
    //     setLoading(false)
    // }



    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // const router = useRouter();

    // const handleCategoryChange = async (e) => {
    //     const newCategory = e.target.value;
    //     const updatedSearchParams = new URLSearchParams(searchParams);

    //     if (newCategory) {
    //         updatedSearchParams.set('category', newCategory);
    //     } else {
    //         updatedSearchParams.delete('category');
    //     }

    //     const updatedQueryString = updatedSearchParams.toString();

    //     setData({
    //         newProducts: [],
    //         cursor: null
    //     });

    //     const newUrl = updatedQueryString ? `${pathname}?${updatedQueryString}` : pathname;

    //     router.push(newUrl);
    // }

    // const [loading, setLoading] = useState(false)

    // console.log({
    //     cursor: data.cursor,
    //     category: initialCategory,
    //     loading
    // })

    return <div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
            {data.products.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />)}
        </div>

        {data.cursor && <div ref={container} />}

    </div>

    // return <div>
    //     <div className="mb-8">
    //         <SelectNavigation categoryValue={initialCategory || ''} sortValue={null} categoryCallback={handleCategoryChange}>
    //             {{
    //                 categories: categories.map((category) => (
    //                     <option value={category.id} key={category.id} className="text-sm">
    //                         {category.label}
    //                     </option>
    //                 )),
    //                 sortOptions: sortOptions.map((sortOption) => (
    //                     <option value={sortOption.id} key={sortOption.id} className="text-sm">
    //                         {sortOption.label}
    //                     </option>
    //                 )),
    //             }}
    //         </SelectNavigation>
    //     </div>

    //     <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
    //         {initialProducts.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />)}
    //         {data.newProducts.map((product) => <ProductTile key={product._id} product={product} fromSearch={true} />)}
    //     </div>

    //     <div className="flex justify-center mt-10">
    //         {data.cursor ? <button type="button" onClick={fetchNextPage} disabled={loading} class=' text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Wczytaj więcej</button> : <></>}
    //     </div>

    // </div>
}

export default Offers