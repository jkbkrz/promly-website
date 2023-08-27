"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SelectNavigation = ({ children, categoryValue, sortValue }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        const updatedSearchParams = new URLSearchParams(searchParams);
        updatedSearchParams.set('category', newCategory);
        const updatedQueryString = updatedSearchParams.toString();
        router.push(`${pathname}?${updatedQueryString}`);
        router.refresh();
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        const updatedSearchParams = new URLSearchParams(searchParams);
        updatedSearchParams.set('sort', newSort);
        const updatedQueryString = updatedSearchParams.toString();
        router.push(`${pathname}?${updatedQueryString}`);
        router.refresh();
    };

    return (
        <div className="inline-block">
            <select
                value={categoryValue}
                onChange={handleCategoryChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {children.categories}
            </select>
            <select
                value={sortValue}
                onChange={handleSortChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 dark:bg-black dark:border-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                {children.sortOptions}
            </select>
        </div>
    );
}

export default SelectNavigation